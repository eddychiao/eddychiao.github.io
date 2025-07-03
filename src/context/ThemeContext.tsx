import React, { createContext, useState, useContext } from 'react';

interface Theme {
  backgroundColor: string;
  headerColor: string;
  textColor: string;
  buttonColor: string;
}

const themes = {
  vermilion: {
    backgroundColor: '#FFF1E6',
    headerColor: '#E42015',
    textColor: '#315C4F',
    buttonColor: '#CDA952',
  },
  porcelain: {
    backgroundColor: '#F0EDE8',
    headerColor: '#266DD3',
    textColor: '#DE5246',
    buttonColor: '#468A96',
  },
  katana: {
    backgroundColor: '#333333',
    headerColor: '#A799B7',
    textColor: '#F5F5DC',
    buttonColor: '#F78764',
  },
};

interface ThemeContextProps {
  theme: Theme;
  setThemeName: (name: keyof typeof themes) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<keyof typeof themes>('vermilion');
  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};