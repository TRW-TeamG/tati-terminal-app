import { ChatAction } from '@/types/chat';

interface ChatActionsProps {
  actions: ChatAction[];
  onActionClick: (action: ChatAction) => void;
  disabled: boolean;
}

export default function ChatActions({ actions, onActionClick, disabled }: ChatActionsProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {actions.map((action, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onActionClick(action)}
          disabled={disabled}
          className="text-xs px-4 py-2 rounded-full bg-deep-indigo text-electric-blue 
            hover:text-luminous-turquoise font-montserrat
            border border-electric-blue hover:border-luminous-turquoise
            transition-colors duration-200 shadow-sm hover:shadow
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {action.message}
        </button>
      ))}
    </div>
  );
}
