import React from 'react';
import { profile } from '../data/profile';
import MessageBubble from './MessageBubble';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  isActive: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center dark:bg-dark-accent bg-light-accent p-2 rounded-md">
        <span className="text-sm font-medium dark:text-dark-text text-light-text">
          # experience
        </span>
      </div>

      <MessageBubble
        content={
          <div>
            <h3 className="text-lg font-medium mb-2">Professional Experience</h3>
            <p className="text-sm">Here's my professional journey so far:</p>
          </div>
        }
        delay={300}
      />

      {profile.experience.map((exp, index) => {
        return (
          <React.Fragment key={exp.id}>
            <MessageBubble
              content={
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Briefcase size={16} className="dark:text-slack-blue text-slack-blue" />
                    </div>
                    <div className="ml-2">
                      <h4 className="font-medium">{exp.company}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                        <span className="font-medium">{exp.position}</span>
                        {exp.location && (
                          <>
                            <span className="hidden sm:inline mx-2">•</span>
                            <span>{exp.location}</span>
                          </>
                        )}
                        <span className="hidden sm:inline mx-2">•</span>
                        <span className="dark:text-dark-muted text-light-muted">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="dark:text-dark-text text-light-text">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              }
              delay={600 + index * 400}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ExperienceSection;