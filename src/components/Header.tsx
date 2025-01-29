import { Link } from 'react-router-dom'

import { useAuth } from '@/contexts/AuthContext'

import RewardButton from './RewardButton'
import WalletButton from './WalletButton'

export default function Header() {
  const { isAuthenticated } = useAuth()

  return (
    <header className="bg-deep-indigo shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo.svg" alt="Tati" className="h-16 hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated && <RewardButton />}
          <WalletButton />
        </div>
      </nav>
    </header>
  )
}
