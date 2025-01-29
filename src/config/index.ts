import { ClusterType, getClusterSettings } from '@/utils/cluster'
import { Explorer } from '@/utils/explorer'

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
export const APP_METADATA_URI = process.env.NEXT_PUBLIC_APP_METADATA_URI

const cluster = (process.env.VITE_SOLANA_CLUSTER || 'devnet') as ClusterType

export const ClusterSettings = getClusterSettings(cluster)
export const ClusterExplorer = new Explorer(cluster)

export const ASSET_PLACEHOLDER_URI =
  process.env.VITE_ASSET_PLACEHOLDER_URI || 'https://thetati.fun/assets/placeholder.json'
