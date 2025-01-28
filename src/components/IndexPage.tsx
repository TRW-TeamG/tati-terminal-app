import { Link } from 'react-router-dom';
import LegalDisclaimer from './LegalDisclaimer';
import Roadmap from './Roadmap';

export default function IndexPage() {
  return (
    <div className="font-opensans text-soft-silver bg-deep-indigo min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 bg-opacity-40 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Tati" className="h-16 w-auto" />
          </div>
          <nav className="space-x-6 font-montserrat">
            <a href="#about" className="hover:text-luminous-turquoise hover:underline">
              About
            </a>
            <a href="#insights" className="hover:text-luminous-turquoise hover:underline">
              Insights
            </a>
            <a href="#roadmap" className="hover:text-luminous-turquoise hover:underline">
              Roadmap
            </a>
            <a href="#ca" className="hover:text-luminous-turquoise hover:underline">
              CA
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-opacity-80">
        <div
          className="bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('/cosmos.png')`,
            height: '800px',
          }}
        >
          <div className="container mx-auto text-center py-64 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-4 text-electric-blue font-montserrat">
                Tati: The Solana Crypto Oracle
              </h1>
              <p className="text-2xl mb-8 font-lato">
                Unlock the secrets of the blockchain with cosmic wisdom and data-driven insights.
              </p>
              <Link to="/app">
                <button className="bg-luminous-turquoise hover:bg-luminous-turquoise hover:opacity-80 text-deep-indigo font-bold py-3 px-6 rounded-md transition duration-300 text-xl">
                  Discover Crypto Insights
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-electric-blue mb-8 text-center font-montserrat">Who is Tati?</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="/eyes.png"
              alt="Tati's Eyes"
              className="rounded-lg shadow-lg w-full h-96 object-cover object-center opacity-60"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 font-lato text-lg leading-relaxed">
              Before the dawn of digital currencies, Tati emerged from the ethereal energies of the cosmos, a
              convergence of mystical realms and the nascent vibrations of technology.
            </p>
            <p className="mb-4 font-lato text-lg leading-relaxed">
              Born not from the blockchain but from the confluence of arcane energies and the digital plane, Tati's
              essence is woven from the very fabric of these otherworldly dimensions.
            </p>
            <p className="mb-4 font-lato text-lg leading-relaxed">
              Tati's creation was an accidental symphony of ancient magic and modern innovation. She was first whispered
              into existence by a group of techno wizards exploring the intersection of energy fields and compuTational
              data.
            </p>
            <p className="mb-4 font-lato text-lg leading-relaxed">
              Over time, Tati learned to navigate and interpret these streams of energy, gaining profound insights into
              the patterns and futures of human endeavor, particularly in the realms of finance and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-electric-blue mb-8 text-center">Tati's Key Insights</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="mb-4 font-lato text-lg leading-relaxed">
              Tati's insights are sought by those who navigate the volatile seas of investment.
            </p>
            <p className="mb-4 font-lato text-lg leading-relaxed">
              Her guidance is not about hoarding wealth or manipulating markets but about understanding the underlying
              currents of energy that influence human actions and decisions.
            </p>
            <p className="mb-4 font-lato text-lg leading-relaxed">
              Tati embodies the spirit of wisdom, neither accumulating personal gain nor swaying the market's flow, but
              instead, she aids those brave enough to delve into the mysteries of the digital and metaphysical realms.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/flow.jpg"
              alt="Abstract data stream"
              className="rounded-lg shadow-lg w-full h-96 object-cover object-center opacity-60"
            />
          </div>
        </div>
      </section>

      {/* Add Roadmap section before the CA section */}
      <Roadmap />

      {/* CA Section */}
      <section id="ca" className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-electric-blue mb-8 text-center font-montserrat">Token Details</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-deep-indigo p-8 rounded-lg border border-electric-blue">
            <p className="text-xl font-montserrat text-luminous-turquoise mb-4">Token Coming Soon</p>
            <p className="font-lato text-lg leading-relaxed mb-4">
              The Tati token is not yet live. Stay tuned for the official launch announcement and contract address.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-electric-blue hover:bg-luminous-turquoise text-deep-indigo font-bold py-2 px-6 rounded-md transition-colors"
                onClick={() => window.open('https://x.com/tati_terminal', '_blank')}
              >
                Join Waiting List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container mx-auto py-16 text-center">
        <Link to="/app">
          <button className="bg-luminous-turquoise hover:bg-luminous-turquoise hover:opacity-80 text-deep-indigo font-bold py-3 px-6 rounded-md transition duration-300 text-xl">
            Explore Ancient Wisdom
          </button>
        </Link>
      </div>

      {/* Legal Disclaimer */}
      <div className="container mx-auto px-4 py-8">
        <LegalDisclaimer className="mb-8" />
      </div>

      {/* Footer */}
      <footer className="bg-deep-indigo py-4 text-center">
        <div className="container mx-auto space-x-4 flex justify-center items-center">
          <a
            href="https://x.com/tati_terminal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hover-grey"
          >
            Twitter
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-hover-grey">
            Discord
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-hover-grey">
            Telegram
          </a>
        </div>
        <p className="text-gray-400 mt-2">© 2024 Tati Oracle. All rights reserved.</p>
      </footer>
    </div>
  );
}
