import { useState } from 'react';
import { X } from 'lucide-react';

interface Phase {
  title: string;
  timeline: string;
  summary: string;
  details: {
    category: string;
    items: string[];
  }[];
}
/*
Tati: A Roadmap to Cosmic Crypto Guidance

Phase 1: The Whispers of the Oracle (Months 1-3)

Core Functionality Launch:

Website & Wallet Integration: Launch the core website with Solana wallet integration (Phantom, etc.).

Initial LLM Predictions: Implement basic LLM-powered portfolio analysis and predictions. Focus on concise, actionable insights.

Limited Pre-populated Prompts: Offer a few initial pre-populated prompts to guide user queries.

Data Collection: Begin collecting anonymous, aggregated user data for LLM training.

NFT Reward System – "Celestial Shards":

Task-Based Rewards: Introduce a simple NFT reward system. Initially, offer generic "Celestial Shard" NFTs for completing basic tasks.

Metadata Driven Lore: Each shard contains metadata that links to bits of Tati's lore, encouraging users to collect and explore.

Community Building:

Early Access Program: Offer exclusive early access to a small group of active community members and crypto enthusiasts.

Discord/Telegram Community: Establish core community channels for feedback and discussions.

Phase 2: The Oracle Unveiled (Months 4-6)

Advanced Predictive Capabilities:

Expanded LLM Integration: Enhance the LLM with data from more sources and provide more in-depth, personalized financial insights. Include sentiment analysis, oracle data, and on-chain metrics.

Dynamic Prompts: Introduce dynamic, context-aware prompts based on user history and market conditions.

Actionable Task System: Improve the task-assignment system, with more varied and challenging tasks.

Personalized Task Allocation: The tasks assigned should be based on the individual portfolios, and should be designed to improve a user's position and risk management.

NFT Rewards - "Celestial Manifestations":

Unique Day/Night NFTs: Introduce the Day/Night NFT reward system for completing daily tasks.

Marketplace Integration: Integrate the NFTs directly into a marketplace, making them tradeable.

Enhanced Metadata: Include metadata that is linked to the user's success, such as the percentage gain achieved or risk reduced.

Dynamic Art Generation: Implement a dynamic art generation for the Day/Night NFTs, based on market conditions or individual user achievements.

Royalty Program Implementation:

Secondary Market Royalties: Implement a system where Tati receives a small percentage of royalties for every NFT traded on the secondary market. These royalties will be used to improve and expand the service.

Content Push:

Blog and Social: Begin to post more regular content about Tati's lore, project updates, and crypto market trends.

Community Engagement: Actively engage with the community, respond to feedback and begin holding regular AMAs.

Phase 3: The Cosmic DAO (Months 7-12)

$TATI DAO Token Launch:

Fair Launch: Launch a community-focused DAO token $TATI.

Utility: Token holders gain exclusive benefits, such as advanced features, early access to new developments, and higher rewards.

Governance:

$TATI token holders can vote on decisions regarding the future of the platform, as well as funding proposals to grow the platform.

Enhanced NFT Utilities:

Staking Rewards: Introduce a staking system where users can stake Celestial Manifestation NFTs to earn $TATI tokens and boost prediction power.

"Oracle's Key" NFTs: Introduce a higher-tier NFT, that provides early access, and increased rewards. The "Oracle's Key" can be purchased using $TATI tokens, or earned via an extremely challenging quest, thus driving demand for the $TATI tokens, and increasing its utility.

NFT-Gated Access: Grant NFT holders access to exclusive content or tools, such as private Discord channels, or early access to new features.

Cross-Chain Integration:

Explore expanding beyond Solana to offer oracle services on other chains, bringing additional users to the platform.

Consider cross-chain NFT compatibility.

Partnerships:

Develop relationships and partnerships with other projects within the crypto space, which can offer value for the platform and its users.

Phase 4: Expanding the Oracle (Months 12+)

Advanced AI Agents:

Personalized AI Oracles: Allow users to create and customize their own AI oracles, trained on specific data sets.

Automated Trading Agents: Offer advanced trading agents, that execute tasks automatically for the users, making it easier to earn rewards and improve their positions.

Sentiment Based Action: Develop sophisticated agents that act based on real-time market sentiment data.

Tati Metaverse:

Virtual Oracle Space: Create a virtual space where users can interact with Tati in a more immersive and engaging environment.

Virtual Galleries: Allow NFT holders to display their digital assets and interact with other users.

Decentralized Gaming: Integrate DeFi and crypto games into Tati's universe to drive engagement and rewards.

Data Market:

Explore the option of creating a marketplace for aggregated data, where institutions or other projects can buy specific data sets, with royalty rewards for the users who contribute to the platform.

Continuous Improvement:

Continue to evolve Tati by integrating user feedback, and adapting to the fast-paced nature of the crypto market, by expanding data sources, and improving the model.

Decentralized Governance:

Hand over ownership of the project to the DAO.

Creative Twists:

"Cosmic Whispers": Periodically, Tati will release special cryptic messages through her social media, which contain clues to hidden NFTs or other rewards, encouraging exploration and a sense of discovery.

"Ethereal Events": Hold virtual events in the metaverse where users can interact with Tati's AI, get personalized insights, and win rare NFTs.

"Community Quests": Introduce challenging community-driven quests, that combine DeFi elements, and creative challenges to unlock hidden rewards.
*/

const phases: Phase[] = [
  {
    title: 'Phase 1: The Whispers of the Oracle',
    timeline: 'Jan 2025',
    summary: 'Launch core functionality, implement basic LLM predictions, and establish community foundations.',
    details: [
      {
        category: 'Core Functionality Launch',
        items: [
          'Website & Solana wallet integration',
          'Initial LLM-powered portfolio analysis',
          'Pre-populated prompts system',
          'Anonymous data collection for training',
        ],
      },
      {
        category: "NFT Reward System – 'Celestial Shards'",
        items: ['Task-based NFT rewards', 'Lore-enriched metadata', 'Basic collection mechanics'],
      },
      {
        category: 'Community Building',
        items: ['Early access program', 'Discord/Telegram community launch', 'Initial feedback collection'],
      },
    ],
  },
  {
    title: 'Phase 2: The Oracle Unveiled',
    timeline: 'Feb 2025',
    summary: 'Enhance predictive capabilities, expand NFT utilities, and grow the community.',
    details: [
      {
        category: 'Advanced Predictive Capabilities',
        items: [
          'Expanded LLM integration with multiple data sources',
          'Dynamic, context-aware prompts',
          'Improved task-assignment system',
          'Portfolio-based personalized tasks',
        ],
      },
      {
        category: "NFT Rewards - 'Celestial Manifestations'",
        items: [
          'Day/Night NFT reward system',
          'Marketplace integration',
          'Enhanced success-based metadata',
          'Dynamic art generation',
        ],
      },
      {
        category: 'Platform Growth',
        items: [
          'Secondary market royalties implementation',
          'Regular content and lore updates',
          'Active community engagement and AMAs',
        ],
      },
    ],
  },
  {
    title: 'Phase 3: The Cosmic DAO',
    timeline: 'Mar 2025',
    summary: 'Launch DAO token, implement governance, and expand cross-chain capabilities.',
    details: [
      {
        category: '$TATI Token & Governance',
        items: [
          'Fair launch of DAO token',
          'Token holder benefits and rewards',
          'Community governance implementation',
          'Funding proposal system',
        ],
      },
      {
        category: 'Enhanced NFT Utilities',
        items: [
          'NFT staking for $TATI rewards',
          "Introduction of 'Oracle's Key' NFTs",
          'Exclusive NFT-gated content',
          'Cross-chain NFT compatibility',
        ],
      },
      {
        category: 'Ecosystem Expansion',
        items: ['Cross-chain oracle services', 'Strategic partnerships', 'Enhanced reward mechanisms'],
      },
    ],
  },
  {
    title: 'Phase 4: Expanding the Oracle',
    timeline: 'Future',
    summary: 'Introduce advanced AI capabilities, create immersive experiences, and achieve full decentralization.',
    details: [],
  },
];

interface PhaseModalProps {
  phase: Phase;
  onClose: () => void;
}

function PhaseModal({ phase, onClose }: PhaseModalProps) {
  return (
    <div className="fixed inset-0 bg-deep-indigo bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-deep-indigo border-2 border-electric-blue rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="sticky top-0 bg-deep-indigo border-b border-electric-blue p-4 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-electric-blue">{phase.title}</h3>
            <p className="text-soft-silver text-sm mt-1">{phase.timeline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-luminous-turquoise hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X className="text-electric-blue w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-soft-silver mb-6 font-lato text-lg">{phase.summary}</p>
          {phase.details.map((section, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h4 className="text-luminous-turquoise font-montserrat font-semibold mb-3 text-lg">{section.category}</h4>
              <ul className="list-disc list-inside text-soft-silver space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-lato">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  return (
    <section id="roadmap" className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-electric-blue mb-16 text-center font-montserrat">Roadmap</h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-electric-blue transform -translate-x-1/2" />

        {/* Phases */}
        <div className="space-y-24">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 w-4 h-4 bg-luminous-turquoise rounded-full transform -translate-x-1/2" />

              {/* Content */}
              <div
                className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'pr-8' : 'pl-8'} cursor-pointer group`}
                onClick={() => setSelectedPhase(index)}
              >
                <div
                  className="bg-deep-indigo border border-electric-blue rounded-lg p-6 
                  transition-all duration-300 hover:border-luminous-turquoise hover:shadow-lg 
                  hover:shadow-electric-blue/20"
                >
                  <h3
                    className="text-xl font-montserrat font-bold text-electric-blue mb-2 
                    group-hover:text-luminous-turquoise transition-colors"
                  >
                    {phase.title}
                  </h3>
                  <p className="text-soft-silver text-sm mb-3">{phase.timeline}</p>
                  <p className="text-soft-silver font-lato">{phase.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhase !== null && <PhaseModal phase={phases[selectedPhase]} onClose={() => setSelectedPhase(null)} />}
    </section>
  );
}
