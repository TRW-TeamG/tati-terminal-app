export default function Footer() {
  return (
    <footer className="bg-deep-indigo text-soft-silver font-opensans">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-montserrat font-bold text-electric-blue">Tati</div>
            <p className="text-sm mt-1">Your Neighborly Fortune Teller</p>
          </div>

          {/* Middle - Quick Links */}
          <div className="flex gap-8">
            <a
              href="https://docs.solana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-electric-blue transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-electric-blue transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-electric-blue transition-colors"
            >
              Discord
            </a>
          </div>

          {/* Right side - Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://x.com/tati_terminal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-electric-blue transition-colors group"
              aria-label="Twitter"
            >
              <img
                src="https://cdn.simpleicons.org/x/F5F5F5"
                alt="Twitter"
                className="w-5 h-5 group-hover:brightness-0"
              />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-electric-blue transition-colors group"
              aria-label="Telegram"
            >
              <img
                src="https://cdn.simpleicons.org/telegram/F5F5F5"
                alt="Telegram"
                className="w-5 h-5 group-hover:brightness-0"
              />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-8 pt-4 border-t border-hover-grey text-center text-sm">
          <p>© {new Date().getFullYear()} Tati. All rights reserved.</p>
          <p className="mt-1 text-xs text-hover-grey">Powered by Solana Blockchain</p>
        </div>
      </div>
    </footer>
  );
}
