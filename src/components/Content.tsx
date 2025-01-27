import ChatWidget from './ChatWidget';

export default function Content() {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-8">
      {/* Left Column - Image */}
      <div className="w-full md:w-1/2">
        <div className="w-full h-[300px] md:h-full">
          <img
            src="/chat.png"
            alt="AI Assistant"
            className="w-full h-full object-cover object-top rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Column - Chat Interface */}
      <div className="w-full md:w-1/2">
        <ChatWidget />
      </div>
    </div>
  );
}
