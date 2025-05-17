import React from 'react';
import { profile } from '../data/profile';
import MessageBubble from './MessageBubble';
import { Code } from 'lucide-react';

interface ProjectsSectionProps {
  isActive: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center dark:bg-dark-accent bg-light-accent p-2 rounded-md">
        <span className="text-sm font-medium dark:text-dark-text text-light-text">
          # projects
        </span>
      </div>

      <MessageBubble
        content={
          <div>
            <h3 className="text-lg font-medium mb-2">Projects & Initiatives</h3>
            <p className="text-sm">Some of the projects I've built:</p>
          </div>
        }
        delay={300}
      />

      {profile.projects.map((project, index) => (
        <MessageBubble
          key={project.id}
          content={
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Code size={16} className="dark:text-slack-green text-slack-green" />
                </div>
                <div className="ml-2">
                  <h4 className="font-medium">{project.title}</h4>
                  <p className="text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                dark:bg-dark-accent dark:text-dark-text
                                bg-light-accent text-light-text"
                      >
                        {tech}
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

export default ProjectsSection;