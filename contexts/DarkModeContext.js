// contexts/DarkModeContext.js - ERSETZEN (Toggle Fix)
import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemMode, setIsSystemMode] = useState(true);
  
  // Systemeinstellung erkennen
  const getSystemPreference = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };
  
  // Initial Setup
  useEffect(() => {
    const savedMode = localStorage.getItem('adhocon-dark-mode');
    const savedSystemMode = localStorage.getItem('adhocon-system-mode');
    
    if (savedMode !== null && savedSystemMode !== null) {
      // User hat manuelle Einstellung
      setIsDarkMode(savedMode === 'true');
      setIsSystemMode(savedSystemMode === 'true');
    } else {
      // Erste Nutzung - Systemeinstellung verwenden
      const systemDark = getSystemPreference();
      setIsDarkMode(systemDark);
      setIsSystemMode(true);
    }
  }, []);
  
  // Dark Mode CSS-Klasse anwenden
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);
  
  // System Theme Changes überwachen (nur wenn im System-Modus)
  useEffect(() => {
    if (typeof window === 'undefined' || !isSystemMode) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (isSystemMode) {
        setIsDarkMode(e.matches);
      }
    };
    
    // Moderne addEventListener API
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isSystemMode]);
  
  // Manueller Toggle (verlässt System-Modus)
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setIsSystemMode(false);
    
    // In localStorage speichern
    localStorage.setItem('adhocon-dark-mode', newMode.toString());
    localStorage.setItem('adhocon-system-mode', 'false');
    
    console.log('Dark mode toggled:', newMode); // Debug
  };
  
  // Zurück zu Systemeinstellung
  const useSystemMode = () => {
    const systemDark = getSystemPreference();
    setIsDarkMode(systemDark);
    setIsSystemMode(true);
    
    // System-Modus in localStorage
    localStorage.setItem('adhocon-system-mode', 'true');
    localStorage.removeItem('adhocon-dark-mode');
  };
  
  return (
    <DarkModeContext.Provider value={{
      isDarkMode,
      isSystemMode,
      toggleDarkMode,
      useSystemMode
    }}>
      {children}
    </DarkModeContext.Provider>
  );
};