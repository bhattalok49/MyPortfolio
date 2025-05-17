import React from 'react';
import { profile } from '../data/profile';
import MessageBubble from './MessageBubble';
import { Award } from 'lucide-react';

interface CertificationsSectionProps {
  isActive: boolean;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center dark:bg-dark-accent bg-light-accent p-2 rounded-md">
        <span className="text-sm font-medium dark:text-dark-text text-light-text">
          # certifications
        </span>
      </div>

      <MessageBubble
        content={
          <div>
            <h3 className="text-lg font-medium mb-2">Certifications & Training</h3>
            <p className="text-sm">Professional development and learning achievements:</p>
          </div>
        }
        delay={300}
      />

      {profile.certifications.map((cert, index) => (
        <MessageBubble
          key={cert.id}
          content={
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award size={16} className="dark:text-slack-yellow text-slack-yellow" />
                </div>
                <div className="ml-2">
                  <h4 className="font-medium">{cert.name}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm">
                    <span className="font-medium">{cert.organization}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="dark:text-dark-muted text-light-muted">{cert.period}</span>
                  </div>
                  <p className="text-sm mt-1 dark:text-dark-text text-light-text">
                    {cert.description}
                  </p>
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

export default CertificationsSection