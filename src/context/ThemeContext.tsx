import React, { createContext, useContext, useState, useEffect } from 'react';
import { colors } from '../const/enum';

export interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: colors.braves,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : colors.braves;
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);