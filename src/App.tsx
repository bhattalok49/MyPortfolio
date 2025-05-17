import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import ProfileHeader from './components/ProfileHeader';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

function App() {
  const [activeChannel, setActiveChannel] = useState('about-me');

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col dark:bg-dark-primary bg-light-primary dark:text-dark-text text-light-text">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeChannel={activeChannel} setActiveChannel={setActiveChannel} />
          
          <div className="flex-1 flex flex-col w-full md:ml-64 relative">
            <div className="p-4 sticky top-0 z-10 dark:bg-dark-primary bg-light-primary border-b dark:border-dark-border border-light-border">
              <ProfileHeader />
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <AboutSection isActive={activeChannel === 'about-me'} />
              <ExperienceSection isActive={activeChannel === 'experience'} />
              <CertificationsSection isActive={activeChannel === 'certifications'} />
              <ProjectsSection isActive={activeChannel === 'projects'} />
              <SkillsSection isActive={activeChannel === 'skills'} />
            </div>
            
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;