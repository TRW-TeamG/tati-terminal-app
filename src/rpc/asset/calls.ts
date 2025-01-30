import { createV2 } from '@metaplex-foundation/mpl-core'
import { setComputeUnitPrice } from '@metaplex-foundation/mpl-toolbox'
import { Umi, generateSigner, transactionBuilder } from '@metaplex-foundation/umi'

import { ASSET_AUTHORITY, ASSET_PLACEHOLDER_URI, ClusterSettings } from '@/config'

// Mint Asset
export const mintAsset = (umi: Umi) => {
  const asset = generateSigner(umi)

  const { priority, commitment } = ClusterSettings

  let tb = transactionBuilder()

  if (priority) {
    tb = tb.add(setComputeUnitPrice(umi, { microLamports: priority }))
  }

  tb = tb.add(
    createV2(umi, {
      asset: asset,
      name: 'Celestial Shard',
      uri: ASSET_PLACEHOLDER_URI,
      updateAuthority: ASSET_AUTHORITY,
    })
  )

  return { asset, tx: tb.sendAndConfirm(umi, { confirm: { commitment } }) }
}
