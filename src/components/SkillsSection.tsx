import React from 'react';
import { profile } from '../data/profile';
import MessageBubble from './MessageBubble';
import { Zap } from 'lucide-react';

interface SkillsSectionProps {
  isActive: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center dark:bg-dark-accent bg-light-accent p-2 rounded-md">
        <span className="text-sm font-medium dark:text-dark-text text-light-text">
          # skills
        </span>
      </div>

      <MessageBubble
        content={
          <div>
            <h3 className="text-lg font-medium mb-2">Skills & Technologies</h3>
            <p className="text-sm">My technical toolkit:</p>
          </div>
        }
        delay={300}
      />

      {profile.skills.map((skillGroup, index) => (
        <MessageBubble
          key={skillGroup.category}
          content={
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Zap size={16} className="dark:text-slack-yellow text-slack-yellow" />
                </div>
                <div className="ml-2 w-full">
                  <h4 className="font-medium">{skillGroup.category}</h4>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                dark:bg-dark-accent dark:text-dark-text
                                bg-light-accent text-light-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
          delay={600 + index * 400}
        />
      ))}
    </div>
  );
};

export default SkillsSection;