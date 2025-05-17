import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 p-8 animate-fade-in
                    bg-gradient-to-r from-light-secondary to-light-accent dark:from-dark-secondary dark:to-dark-accent rounded-2xl shadow-xl">
      <div className="flex-shrink-0 relative">
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-32 h-32 rounded-full object-cover border-4 dark:border-dark-border border-light-border shadow-lg transition-transform duration-300 hover:scale-105"
        />
        {/* Status Dot */}
        <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-dark-secondary rounded-full shadow-md"></span>
      </div>
      
      <div className="flex-grow text-center sm:text-left space-y-2">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#611f69] to-purple-600 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        <p className="text-lg font-semibold dark:text-dark-muted text-light-muted mb-2">{profile.title}</p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm justify-center sm:justify-start">
          <span className="flex items-center gap-2 dark:text-dark-text text-light-text">
            <Phone size={16} className="flex-shrink-0" />
            {profile.contact.phone}
          </span>
          <span className="flex items-center gap-2 dark:text-dark-text text-light-text">
            <Mail size={16} className="flex-shrink-0" />
            {profile.contact.email}
          </span>
          <span className="flex items-center gap-2 dark:text-dark-text text-light-text">
            <MapPin size={16} className="flex-shrink-0" />
            {profile.location}
          </span>
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ProfileHeader;