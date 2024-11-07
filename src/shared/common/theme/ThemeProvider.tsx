import React, { createContext, FC, useCallback, useContext, useInsertionEffect, useState, useMemo } from 'react';
export enum Theme { light = 'light', dark = 'dark' };

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.light,
  toggleTheme: () => { return null; },
});

export const useThemeContext = (): ThemeContextType => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);
  const toggleTheme = () => {
    setTheme(theme => (theme === Theme.light ? Theme.dark : Theme.light));
  }

  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
