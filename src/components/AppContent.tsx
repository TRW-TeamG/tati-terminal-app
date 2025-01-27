import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { AuthProvider } from '../contexts/AuthContext';
import LegalDisclaimer from './LegalDisclaimer';

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css';

export default function AppContent() {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
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
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
