import React from 'react';
import { useLanguageContext } from './LanguageProvider';

export const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage, translations } = useLanguageContext();
    const t = translations[language];

    return (
        <button type="button" onClick={toggleLanguage}>
            {language === "en" ? `${t.set} RU` : `${t.set} EN`}
        </button>
    );
};
