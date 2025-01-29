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
      className={`relative px-4 py-2 rounded-lg font-montserrat text-sm 
        transition-all duration-300 group
        ${
          hasRewards
            ? 'bg-electric-blue text-deep-indigo hover:bg-luminous-turquoise animate-pulse'
            : 'bg-deep-indigo text-soft-silver opacity-50 cursor-not-allowed'
        }
      `}
    >
      {/* Sparkle effect */}
      {hasRewards && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-2 h-2 bg-luminous-turquoise rounded-full animate-ping" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-luminous-turquoise rounded-full animate-ping delay-100" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-luminous-turquoise rounded-full animate-ping delay-200" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-luminous-turquoise rounded-full animate-ping delay-300" />
        </div>
      )}

      {/* Content */}
      <div className="flex items-center gap-2">
        <span>{isLoading ? 'Loading...' : `Claim Rewards ${unrewardedCount > 0 ? `(${unrewardedCount})` : ''}`}</span>
        {hasRewards && (
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    </button>
  )
}
