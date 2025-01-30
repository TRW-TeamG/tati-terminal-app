import bs58 from 'bs58'
import { useMemo, useState } from 'react'

import { notify } from '@/components/Notification'
import { useUmi } from '@/contexts/useUmi'
import { mintAsset } from '@/rpc/asset/calls'
import { useUnrewarded } from '@/rpc/asset/hooks'
import { verifyAsset } from '@/rpc/webhook'
import { getErrorMessage } from '@/utils/errors'
import { LinkType } from '@/utils/explorer'

export default function RewardButton() {
  const umi = useUmi()
  const [minting, setMinting] = useState(false)
  const { data: unrewardedCount = 0, isLoading, refetch } = useUnrewarded()

  const hasRewards = useMemo(() => unrewardedCount > 0, [unrewardedCount])

  const handleMint = async () => {
    if (!hasRewards) return

    setMinting(true)

    try {
      notify({
        message: 'The cosmic energies are aligning...',
        type: 'info',
      })

      // executing mint
      const { asset, tx } = mintAsset(umi)
      const { signature } = await tx

      notify({
        message: 'Your celestial shard is materializing...',
        type: 'info',
        linkType: LinkType.Tx,
        linkDest: bs58.encode(signature),
      })

      notify({
        message: 'The ethereal planes are synchronizing...',
        type: 'info',
      })

      // Trigger verification of the asset at backend
      await verifyAsset(asset.publicKey)

      notify({
        message: 'A new Celestial Shard has manifested in your realm! 🌟',
        type: 'success',
        linkType: LinkType.Address,
        linkDest: asset.publicKey,
      })

      setMinting(false)

      // Refetch the unrewarded count
      void refetch()
    } catch (e: unknown) {
      console.error(e)
      setMinting(false)

      notify({
        message: `The cosmic energies were disrupted: ${getErrorMessage(e)}`,
        type: 'error',
      })
    }
  }

  return (
    <button
      onClick={() => {
        void handleMint()
      }}
      disabled={!hasRewards || isLoading || minting}
      className={`
        px-4 py-2 rounded-lg font-montserrat text-sm 
        text-electric-blue hover:text-luminous-turquoise
        transition-colors duration-200
        ${hasRewards ? '' : 'opacity-50 cursor-not-allowed'}
      `}
    >
      <div className="flex items-center gap-2">
        {isLoading ? (
          <span>Loading...</span>
        ) : minting ? (
          <span className="flex items-center gap-2">✨ Manifesting...</span>
        ) : (
          <span className="flex items-center gap-2">
            {hasRewards ? (
              <>
                ✨ <span>Claim Celestial Shard</span> ✨
              </>
            ) : (
              <>
                <span>No Rewards</span>
              </>
            )}
          </span>
        )}
      </div>
    </button>
  )
}
