interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
}

export default function ChatInput({ value, onChange, onSubmit, disabled }: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || disabled) return;
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-hover-grey">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ask TaTi anything..."
          disabled={disabled}
          className="w-full px-4 pr-12 py-3 rounded-lg border border-hover-grey 
            bg-deep-indigo text-soft-silver focus:outline-none focus:ring-2 
            focus:ring-electric-blue font-montserrat text-lg
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
            text-electric-blue hover:text-luminous-turquoise
            focus:outline-none focus:ring-2 focus:ring-electric-blue
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors"
          aria-label="Send message"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
