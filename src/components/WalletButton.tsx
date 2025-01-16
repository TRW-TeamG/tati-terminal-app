import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function WalletButton() {
  const { wallet } = useWallet();

  return (
    <WalletMultiButton
      className="px-4 py-2 font-semibold text-sm bg-purple-500 text-white rounded-lg 
        hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
        focus:ring-opacity-50 dark:bg-purple-600 dark:hover:bg-purple-700"
    />
  );
}
