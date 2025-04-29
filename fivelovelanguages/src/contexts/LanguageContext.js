import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Dictionary for translations
import { translations } from '../data/translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage('language', 'en');

  // Function to get translation for a key
  const t = (key) => {
    if (!translations[currentLanguage] || !translations[currentLanguage][key]) {
      console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
      // Fallback to English if translation is missing
      return translations['en'][key] || key;
    }
    return translations[currentLanguage][key];
  };

  // Function to change language
  const changeLanguage = (lang) => {
    if (lang === 'en' || lang === 'uk' || lang === 'ru') {
      setCurrentLanguage(lang);
    } else {
      console.error(`Unsupported language: ${lang}`);
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};