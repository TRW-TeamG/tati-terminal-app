import ThemeToggle from './ThemeToggle';
import WalletButton from './WalletButton';
import TatiIcon from './TatiIcon';

export default function Header() {
  return (
    <header className="bg-white shadow dark:bg-gray-800 dark:text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TatiIcon />
          <span className="text-3xl font-display font-bold tracking-wide bg-gradient-to-r from-purple-500 to-accent bg-clip-text text-transparent">
            TaTi
          </span>
        </div>
        <div className="flex items-center gap-4">
          <WalletButton />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
