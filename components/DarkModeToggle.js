// components/DarkModeToggle.js - FINAL VERSION (ohne Debug)
import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, isSystemMode, toggleDarkMode } = useDarkMode();
  
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm relative"
      title={isSystemMode ? 'System Mode' : (isDarkMode ? 'Dark Mode' : 'Light Mode')}
    >
      {isSystemMode ? (
        <Monitor className="w-4 h-4 text-blue-500" />
      ) : isDarkMode ? (
        <Moon className="w-4 h-4 text-blue-400" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-500" />
      )}
      
      {/* System Mode Indicator */}
      {isSystemMode && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
      )}
    </button>
  );
};

export default DarkModeToggle;