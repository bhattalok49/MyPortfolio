import React from 'react';
import { FileDown, Github, Linkedin, Heart } from 'lucide-react';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 dark:bg-dark-secondary bg-light-secondary border-t
                       dark:border-dark-border border-light-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/AlokBhatt_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md
                         dark:bg-dark-accent bg-light-accent
                         dark:hover:bg-dark-border hover:bg-light-border
                         dark:text-dark-text text-light-text
                         transition duration-200"
            >
              <FileDown size={16} />
              <span className="text-sm font-medium">Resume</span>
            </a>
            
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md
                         dark:bg-dark-accent bg-light-accent
                         dark:hover:bg-dark-border hover:bg-light-border
                         dark:text-dark-text text-light-text
                         transition duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-md
                         dark:bg-dark-accent bg-light-accent
                         dark:hover:bg-dark-border hover:bg-light-border
                         dark:text-dark-text text-light-text
                         transition duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
          
          <div className="flex items-center dark:text-dark-muted text-light-muted text-sm">
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-slack-red fill-slack-red" /> by Alok Bhatt
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;