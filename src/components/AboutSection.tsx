import React from 'react';
import { profile } from '../data/profile';
import MessageBubble from './MessageBubble';

interface AboutSectionProps {
  isActive: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isActive }) => {
  if (!isActive) return null;
  
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center dark:bg-dark-accent bg-light-accent p-2 rounded-md">
        <span className="text-sm font-medium dark:text-dark-text text-light-text">
          # about-me
        </span>
      </div>
      
      <MessageBubble
        content={
          <div>
            <h3 className="text-lg font-medium mb-2">Hey there! 👋</h3>
            <p>{profile.about}</p>
          </div>
        }
        delay={300}
      />
      
      <MessageBubble 
        content={
          <div>
            <p className="text-sm">
              I'm a Software Engineer focused on building robust, efficient systems. My experience ranges from low-level
              networking to distributed systems. I enjoy tackling complex technical challenges and creating impactful solutions.
            </p>
          </div>
        } 
        delay={1200}
      />
      
      <MessageBubble 
        content={
          <div>
            <p className="italic text-sm">
              "The best way to predict the future is to implement it." 
            </p>
          </div>
        } 
        delay={2000}
      />
    </div>
  );
};

export default AboutSection;