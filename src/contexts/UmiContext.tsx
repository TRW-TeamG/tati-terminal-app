import { mplToolbox } from '@metaplex-foundation/mpl-toolbox'
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters'
import { ReactNode, useMemo } from 'react'

import { useConnection, useWallet } from '@solana/wallet-adapter-react'

import { createUmi } from '@/lib/umi/createUmi'

import { UmiContext } from './useUmi'

export function UmiProvider({ children }: { children: ReactNode }) {
  const wallet = useWallet()
  const { connection } = useConnection()
  const umi = useMemo(
    () => createUmi(connection).use(walletAdapterIdentity(wallet)).use(mplToolbox()),
    [wallet, connection]
  )

  return <UmiContext.Provider value={{ umi }}>{children}</UmiContext.Provider>
}
