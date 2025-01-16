import ChatWidget from './ChatWidget';

export default function Content() {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-8 min-h-[600px]">
      {/* Left Column - Image */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-0">
        <div className="absolute inset-0">
          <img src="/tati.png" alt="AI Assistant" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Right Column - Chat Interface */}
      <div className="w-full md:w-1/2">
        <ChatWidget />
      </div>
    </div>
  );
}
