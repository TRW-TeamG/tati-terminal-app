import AnimatedText from './AnimatedText';

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
    isAnimating?: boolean;
  };
  onAnimationComplete: () => void;
  onTextUpdate: () => void;
}

export default function ChatMessage({ message, onAnimationComplete, onTextUpdate }: ChatMessageProps) {
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          message.role === 'user'
            ? 'bg-luminous-turquoise text-deep-indigo font-opensans'
            : 'bg-deep-indigo text-soft-silver font-montserrat text-lg'
        }`}
      >
        {message.role === 'assistant' && message.isAnimating ? (
          <AnimatedText
            text={message.content}
            onComplete={onAnimationComplete}
            onTextUpdate={onTextUpdate}
            speed={30}
          />
        ) : (
          message.content
        )}
      </div>
    </div>
  );
}
