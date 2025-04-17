import React, {createContext, useContext, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from '../constant';

type Theme = {
  colors: {
    background: string;
    text: string;
    imgColor: string;
    buttonColor: string;
    tabBarInactiveTintColor: string;
    greyText: string;
    imgblack: string;
    // :string;
  };
};

const ThemeContext = createContext<Theme | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const theme: Theme = {
    colors: {
      background: isDark ? '#000' : '#fff',
      text: isDark ? '#fff' : '#000',
      imgColor: isDark ? '#fff' : '#000',
      buttonColor: isDark ? Colors.white : Colors.Black,
      tabBarInactiveTintColor: isDark ? '#697585' : '#000',
      greyText: isDark ? '#fff' : '#697585',
      imgblack: isDark ? Colors.white : '#000',
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
