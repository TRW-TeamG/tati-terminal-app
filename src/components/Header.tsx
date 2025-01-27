import { Link } from 'react-router-dom';
import WalletButton from './WalletButton';

export default function Header() {
  return (
    <header className="bg-deep-indigo shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo.svg" alt="Tati" className="h-16 hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <WalletButton />
        </div>
      </nav>
    </header>
  );
}
