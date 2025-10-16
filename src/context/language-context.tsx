
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import id from '@/lib/i18n/id.json';
import en from '@/lib/i18n/en.json';
import ace from '@/lib/i18n/ace.json';

type Language = 'id' | 'en' | 'ace';

export type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const dictionaries = { id, en, ace };
  const dictionary = dictionaries[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
