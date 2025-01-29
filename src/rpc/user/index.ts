import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters'
import { useQuery } from '@tanstack/react-query'

import { PublicKey } from '@solana/web3.js'

import { useUmi } from '@/contexts/useUmi'

type Options = {
  publicKey: PublicKey | null
}

export const useAccountData = ({ publicKey }: Options) => {
  const umi = useUmi()
  return useQuery({
    enabled: !!publicKey,
    queryKey: ['account_data', publicKey],
    queryFn: async () => {
      if (!publicKey) throw new Error('Invalid publicKey')
      return { data: await umi.rpc.getAccount(fromWeb3JsPublicKey(publicKey)) }
    },
  })
}
