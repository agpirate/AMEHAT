// providers/ThemeProvider.js
import React, { createContext, useState } from 'react';
import lightTheme from '../../styles/themes/light.js';
import darkTheme from '../../styles/themes/dark.js';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDark(!isDark);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme,isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};