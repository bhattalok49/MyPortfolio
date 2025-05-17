import React, { useState } from 'react';
import { Hash, ChevronDown, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeChannel: string;
  setActiveChannel: (channel: string) => void;
}

const channels = [
  { id: 'about-me', name: 'about-me' },
  { id: 'experience', name: 'experience' },
  { id: 'certifications', name: 'certifications' },
  { id: 'projects', name: 'projects' },
  { id: 'skills', name: 'skills' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeChannel, setActiveChannel }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleChannelClick = (channelId: string) => {
    setActiveChannel(channelId);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md dark:bg-dark-accent bg-light-accent"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Sidebar */}
      <div className={`fixed md:static inset-y-0 left-0 z-20 w-64 transform 
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                      md:translate-x-0 transition-transform duration-300 ease-in-out
                      dark:bg-dark-primary bg-light-primary border-r
                      dark:border-dark-border border-light-border h-full`}>
        <div className="p-4 border-b dark:border-dark-border border-light-border">
          <div className="flex items-center">
            <h2 className="text-lg font-medium dark:text-dark-text text-light-text">Alok's Workspace</h2>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center dark:text-dark-muted text-light-muted">
              <ChevronDown size={16} />
              <span className="ml-1 text-sm uppercase font-medium">Channels</span>
            </div>
          </div>
          
          <ul>
            {channels.map((channel) => (
              <li key={channel.id}>
                <button
                  onClick={() => handleChannelClick(channel.id)}
                  className={`flex items-center w-full p-2 rounded-md text-left text-sm transition-colors
                              ${activeChannel === channel.id 
                                ? 'dark:bg-slack-purple bg-slack-blue dark:text-white text-white' 
                                : 'dark:text-dark-text text-light-text dark:hover:bg-dark-accent hover:bg-light-accent'}`}
                >
                  <Hash size={16} />
                  <span className="ml-2">{channel.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar