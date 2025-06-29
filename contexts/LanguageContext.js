// contexts/LanguageContext.js - Diese Datei erstellen
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../lib/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de'); // Standard: Deutsch
  
  // Sprache aus localStorage laden beim Start
  useEffect(() => {
    const savedLanguage = localStorage.getItem('adhocon-language');
    if (savedLanguage && ['de', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Sprache in localStorage speichern bei Änderung
  useEffect(() => {
    localStorage.setItem('adhocon-language', language);
  }, [language]);
  
  const switchLanguage = (newLanguage) => {
    if (['de', 'en'].includes(newLanguage)) {
      setLanguage(newLanguage);
    }
  };
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Fallback zu Deutsch falls Übersetzung fehlt
        value = translations.de;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object') {
            value = value[fallbackKey];
          } else {
            return `Missing translation: ${key}`;
          }
        }
        break;
      }
    }
    
    return value || `Missing translation: ${key}`;
  };
  
  return (
    <LanguageContext.Provider value={{
      language,
      switchLanguage,
      t,
      isGerman: language === 'de',
      isEnglish: language === 'en'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};