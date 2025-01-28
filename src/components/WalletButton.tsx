import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function WalletButton() {
  return (
    <WalletMultiButton
      className="px-4 py-2 font-montserrat text-sm bg-luminous-turquoise text-deep-indigo rounded-lg 
        hover:bg-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue 
        focus:ring-opacity-50 transition-colors"
    />
  );
}
