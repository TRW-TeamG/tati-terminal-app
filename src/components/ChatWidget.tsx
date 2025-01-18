import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { apiRequest } from '../utils/api';
import TypingAnimation from './TypingAnimation';
import AnimatedText from './AnimatedText';

export default function ChatWidget() {
  const { isAuthenticated, isLoading, signatureRejected, login } = useAuth();
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; isAnimating?: boolean }[]>(
    []
  );
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sampleQuestions, setSampleQuestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    apiRequest('/chat/sample-questions', {
      method: 'GET',
      requireAuth: false,
    })
      .then((response) => {
        setSampleQuestions(response.questions);
      })
      .catch((error) => {
        console.error('Failed to fetch sample questions:', error);
        setSampleQuestions([]);
      });
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const isDisabled = isTyping || messages.some((msg) => msg.isAnimating) || !isAuthenticated;

  const sendMessage = async (text: string) => {
    if (!isAuthenticated) {
      return;
    }

    try {
      setMessages((prev) => [...prev, { role: 'user', content: text }]);
      setIsTyping(true);

      const response = await apiRequest('/chat/messages', {
        method: 'POST',
        body: JSON.stringify({ message: text }),
        requireAuth: true,
      });

      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'assistant', content: response.message, isAnimating: true }]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.', isAnimating: true },
      ]);
    }
  };

  const handleAnimationComplete = (index: number) => {
    setMessages((prev) => prev.map((msg, i) => (i === index ? { ...msg, isAnimating: false } : msg)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isDisabled) return;

    const userMessage = input;
    setInput('');
    await sendMessage(userMessage);
  };

  const handleQuestionClick = async (question: string) => {
    if (!isAuthenticated) {
      const shouldLogin = window.confirm(
        'Please connect your wallet to chat with TaTi. Would you like to connect now?'
      );
      if (shouldLogin) {
        await login();
      }
      return;
    }
    setInput(question);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-purple-500 text-xl font-mystical">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 space-y-4">
        {signatureRejected ? (
          <>
            <p className="text-gray-600 dark:text-gray-300 text-center font-mystical text-xl">
              Signature was rejected. Please try again to chat with TaTi.
            </p>
            <button
              onClick={() => login()}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 
                transition-colors duration-200 font-mystical text-xl shadow-md 
                hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 
                focus:ring-offset-2"
            >
              Try Again
            </button>
          </>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 text-center font-mystical text-xl">
            Please connect your wallet to chat with TaTi
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8 font-mystical text-lg italic">
            Ask TaTi about your crypto future...
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-purple-500 text-white font-sans'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mystical text-xl'
                  }`}
                >
                  {message.role === 'assistant' && message.isAnimating ? (
                    <AnimatedText text={message.content} onComplete={() => handleAnimationComplete(index)} speed={30} />
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask TaTi anything..."
            disabled={isDisabled}
            className="w-full px-4 pr-12 py-3 rounded-lg border dark:border-gray-700 
              bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 
              focus:ring-purple-500 dark:text-white font-mystical text-xl
              disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!input.trim() || isDisabled}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
              text-purple-500 hover:text-purple-600 hover:bg-purple-50
              dark:text-purple-400 dark:hover:text-purple-300 dark:hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent
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

        <div className="mt-4 flex flex-wrap gap-3">
          {sampleQuestions.map((question, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleQuestionClick(question)}
              disabled={isDisabled}
              className="text-lg px-4 py-2 rounded-full bg-purple-100 text-purple-700 
                hover:bg-purple-200 dark:bg-gray-700 dark:text-purple-300 
                dark:hover:bg-gray-600 transition-colors duration-200 font-mystical
                border border-purple-200 dark:border-gray-600 hover:border-purple-300
                dark:hover:border-gray-500 shadow-sm hover:shadow
                disabled:opacity-50 disabled:cursor-not-allowed 
                disabled:hover:bg-purple-100 dark:disabled:hover:bg-gray-700"
            >
              {question}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
