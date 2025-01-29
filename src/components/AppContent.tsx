import { useMemo } from 'react'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

import { UmiProvider } from '@/contexts/UmiContext'

import { AuthProvider } from '../contexts/AuthContext'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import LegalDisclaimer from './LegalDisclaimer'

export default function AppContent() {
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <UmiProvider>
            <AuthProvider>
              <div className="flex flex-col min-h-screen bg-deep-indigo">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                  <Content />
                  <LegalDisclaimer className="mt-8" />
                </main>
                <Footer />
              </div>
            </AuthProvider>
          </UmiProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
