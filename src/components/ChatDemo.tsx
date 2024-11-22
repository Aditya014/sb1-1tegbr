import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, X } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  content: string;
}

interface ChatDemoProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ChatDemo: React.FC<ChatDemoProps> = ({ isVisible, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversation: Message[] = [
    {
      type: 'bot',
      content: 'Hello! How can I assist you today?'
    },
    {
      type: 'user',
      content: 'Can you help me with a React component?'
    },
    {
      type: 'bot',
      content: 'Of course! I can help you design, implement, and debug React components. What specifically would you like to create?'
    },
    {
      type: 'user',
      content: 'I need a reusable button component with different variants'
    },
    {
      type: 'bot',
      content: 'I can help you create a flexible button component with primary, secondary, and outline variants. Would you like to see some code examples?'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];

    const initializeMessages = () => {
      if (isVisible && messages.length === 0) {
        let index = 0;
        
        const addMessage = () => {
          if (index < conversation.length) {
            setIsTyping(true);
            const typingTimeout = setTimeout(() => {
              setMessages(prev => [...prev, conversation[index]]);
              setIsTyping(false);
              index++;
              if (index < conversation.length) {
                const nextMessageTimeout = setTimeout(addMessage, 500);
                timeoutIds.push(nextMessageTimeout);
              }
            }, 1000);
            timeoutIds.push(typingTimeout);
          }
        };

        addMessage();
      }
    };

    initializeMessages();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[var(--surface)] w-full max-w-2xl mx-4 rounded-lg neon-border p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold neon-text">Live Demo</h3>
          <button 
            onClick={onClose}
            className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-4 min-h-[400px] max-h-[600px] overflow-y-auto">
          {messages && messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[var(--background)] flex items-center justify-center neon-border">
                {message.type === 'bot' ? (
                  <Bot className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div 
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-[var(--primary)]/10 ml-auto' 
                    : 'bg-[var(--background)]'
                }`}
              >
                <p className="text-[var(--primary)] font-mono">{message.content}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--background)] flex items-center justify-center neon-border">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-[var(--background)] p-4 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};