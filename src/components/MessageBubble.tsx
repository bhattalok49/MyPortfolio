import React, { useEffect, useState } from 'react';
import { profile } from '../data/profile';

interface MessageBubbleProps {
  content: string | React.ReactNode;
  delay?: number;
  isTyping?: boolean;
  sender?: 'user' | 'system';
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  content, 
  delay = 0,
  isTyping = false,
  sender = 'system'
}) => {
  const [visible, setVisible] = useState(delay === 0);
  const [typing, setTyping] = useState(isTyping);

  useEffect(() => {
    let timeoutId: number;
    
    if (delay > 0) {
      timeoutId = window.setTimeout(() => {
        setVisible(true);
        
        if (isTyping) {
          window.setTimeout(() => {
            setTyping(false);
          }, 1500);
        }
      }, delay);
    }
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay, isTyping]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4 animate-slide-in`}>
      {sender === 'system' && (
        <div className="flex-shrink-0 mr-3">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-8 h-8 rounded-md object-cover"
          />
        </div>
      )}
      <div 
        className={`max-w-[85%] rounded-lg px-4 py-2 shadow-sm
                  ${sender === 'user' 
                    ? 'dark:bg-slack-green bg-slack-green text-white'
                    : 'dark:bg-dark-secondary bg-light-secondary dark:text-dark-text text-light-text'}`}
      >
        {typing ? (
          <div className="flex space-x-1 items-center h-6">
            <div className="w-2 h-2 rounded-full dark:bg-dark-muted bg-light-muted animate-pulse"></div>
            <div className="w-2 h-2 rounded-full dark:bg-dark-muted bg-light-muted animate-pulse delay-150"></div>
            <div className="w-2 h-2 rounded-full dark:bg-dark-muted bg-light-muted animate-pulse delay-300"></div>
          </div>
        ) : (
          <div>{content}</div>
        )}
      </div>
      {sender === 'user' && (
        <div className="flex-shrink-0 ml-3">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-8 h-8 rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;