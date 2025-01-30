import { useEffect, useMemo, useRef, useState } from 'react'

import { useUnrewarded } from '@/rpc/asset/hooks'

import { useAuth } from '../contexts/AuthContext'
import { ChatAction, ChatMessageType, ChatResponse } from '../types/chat'
import { apiRequest } from '../utils/api'
import TypingAnimation from './TypingAnimation'
import ChatActions from './chat/ChatActions'
import ChatInput from './chat/ChatInput'
import ChatMessage from './chat/ChatMessage'

export default function ChatWidget() {
  const { isAuthenticated, isLoading, signatureRejected, login } = useAuth()
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; isAnimating?: boolean }[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [chatActions, setChatActions] = useState<ChatAction[]>([])
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const { refetch: refetchUnrewarded } = useUnrewarded()

  useEffect(() => {
    if (isAuthenticated) {
      fetchWelcomeMessage()
    }
  }, [isAuthenticated])

  const fetchWelcomeMessage = async () => {
    try {
      const response: ChatResponse = await apiRequest('/chat/welcome', {
        method: 'GET',
        requireAuth: true,
      })
      setMessages([{ role: 'assistant', content: response.message, isAnimating: true }])
      if (response.actions) {
        setChatActions(response.actions)
      }
    } catch (error) {
      console.error('Failed to fetch welcome message:', error)
    }
  }

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages.length, isTyping])

  const handleTextUpdate = () => {
    scrollToBottom()
  }

  const isDisabled = useMemo(
    () => isTyping || messages.some((msg) => msg.isAnimating) || !isAuthenticated,
    [isTyping, messages, isAuthenticated]
  )

  const sendMessage = async (text: string, type: ChatMessageType = ChatMessageType.MESSAGE) => {
    if (!isAuthenticated) return

    try {
      setMessages((prev) => [...prev, { role: 'user', content: text }])
      setIsTyping(true)

      const response = await apiRequest('/chat/messages', {
        method: 'POST',
        body: JSON.stringify({ message: text, type }),
        requireAuth: true,
      })

      setIsTyping(false)
      setMessages((prev) => [...prev, { role: 'assistant', content: response.message, isAnimating: true }])
      if (response.actions) {
        setChatActions(response.actions)
      }
      void refetchUnrewarded()
    } catch (error) {
      console.error('Failed to send message:', error)
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.', isAnimating: true },
      ])
    }
  }

  const handleAnimationComplete = (index: number) => {
    setMessages((prev) => prev.map((msg, i) => (i === index ? { ...msg, isAnimating: false } : msg)))
  }

  const handleSubmit = () => {
    if (!input.trim() || isDisabled) return
    const userMessage = input
    setInput('')
    sendMessage(userMessage)
  }

  const handleActionClick = async (action: ChatAction) => {
    if (!isAuthenticated) {
      return
    }
    await sendMessage(action.message, action.type)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-soft-silver text-xl font-montserrat">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 space-y-4">
        {signatureRejected ? (
          <>
            <p className="text-soft-silver text-center font-montserrat text-xl">
              Signature was rejected. Please try again to chat with Tati.
            </p>
            <button
              onClick={() => login()}
              className="px-6 py-3 bg-electric-blue text-deep-indigo rounded-lg hover:bg-luminous-turquoise 
                transition-colors duration-200 font-montserrat text-lg shadow-md 
                hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-electric-blue 
                focus:ring-offset-2"
            >
              Try Again
            </button>
          </>
        ) : (
          <p className="text-soft-silver text-center font-montserrat text-xl">
            Please connect your wallet to chat with Tati
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-deep-indigo rounded-lg shadow-lg h-full md:h-[800px]">
      <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="text-center text-soft-silver mt-8 font-montserrat text-lg italic">
            Ask Tati about your crypto future...
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                onAnimationComplete={() => handleAnimationComplete(index)}
                onTextUpdate={handleTextUpdate}
              />
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-deep-indigo rounded-lg">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <ChatInput value={input} onChange={setInput} onSubmit={handleSubmit} disabled={isDisabled} />

      <ChatActions actions={chatActions} onActionClick={handleActionClick} disabled={isDisabled} />
    </div>
  )
}
