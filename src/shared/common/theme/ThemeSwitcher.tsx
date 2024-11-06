import React from 'react';
import { useThemeContext, Theme } from './ThemeProvider';
import { useLanguageContext } from '../language/LanguageProvider';

export const ThemeSwitcher: React.FC = () => {

  const { translations } = useLanguageContext();
  const t = translations[useLanguageContext().language];

  const { theme, toggleTheme } = useThemeContext();
  return (
    <button type="button" onClick={toggleTheme}>
      {theme === Theme.light ? t.setDarkTheme : t.setLightTheme}
    </button>
  );
};
