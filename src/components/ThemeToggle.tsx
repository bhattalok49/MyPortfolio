import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-md transition-colors duration-200
                 dark:bg-dark-accent dark:hover:bg-dark-border
                 bg-light-accent hover:bg-light-border"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-light-text" />
      ) : (
        <Sun size={18} className="text-dark-text" />
      )}
    </button>
  );
};

export default ThemeToggle;