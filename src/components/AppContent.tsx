import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo } from 'react'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'

import { ClusterSettings } from '@/config'
import { UmiProvider } from '@/contexts/UmiContext'

import { AuthProvider } from '../contexts/AuthContext'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import LegalDisclaimer from './LegalDisclaimer'

export default function AppContent() {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ConnectionProvider endpoint={ClusterSettings.rpc}>
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
    </QueryClientProvider>
  )
}
