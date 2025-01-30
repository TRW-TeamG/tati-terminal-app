import { PublicKey, publicKey } from '@metaplex-foundation/umi'

import { ClusterType, getClusterSettings } from '@/utils/cluster'
import { Explorer } from '@/utils/explorer'

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
export const APP_METADATA_URI = process.env.NEXT_PUBLIC_APP_METADATA_URI

const cluster = (process.env.VITE_SOLANA_CLUSTER || 'devnet') as ClusterType

export const ClusterSettings = getClusterSettings(cluster)
export const ClusterExplorer = new Explorer(cluster)

export const ASSET_PLACEHOLDER_URI =
  process.env.VITE_ASSET_PLACEHOLDER_URI ||
  'https://zcacakoolnfkwehwwxeg.supabase.co/storage/v1/object/public/tati/asset.json'

export const ASSET_AUTHORITY: PublicKey = publicKey(
  process.env.VITE_ASSET_AUTHORITY || '9jjfgsQb5xMEBkNgrfuf2Wz1HMiL4Vt3Ew3qYrV5SfJi'
)
