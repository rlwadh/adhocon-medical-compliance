// components/LanguageSwitcher.js - Diese Datei erstellen
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage, t } = useLanguage();
  
  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
        <Globe className="w-4 h-4 text-gray-600" />
        <select
          value={language}
          onChange={(e) => switchLanguage(e.target.value)}
          className="border-none bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
        >
          <option value="de">{t('language.german')}</option>
          <option value="en">{t('language.english')}</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;