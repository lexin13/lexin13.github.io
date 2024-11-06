import React, { createContext, useContext, useState } from 'react';
import { translations } from '../../../locales/translations';

export type Language = 'en' | 'ru';

export type LanguageProviderProps = {
    children: React.ReactNode;
};

export type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    translations: { [key: string]: { [key: string]: string } };
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    toggleLanguage: () => { },
    translations: translations,
});

export const useLanguageContext = (): LanguageContextType => useContext(LanguageContext);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');
    const toggleLanguage = () => {
        setLanguage(lang => (lang === 'en' ? 'ru' : 'en'));
    }

    const value = { language, toggleLanguage, translations };
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
