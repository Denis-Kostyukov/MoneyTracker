import {createContext, FC, ReactNode, useState} from 'react';
import {ThemeContextProps} from 'shared/providers/ThemeProvider/ThemeProvider.types.ts';
import {useColorScheme, View} from 'react-native';
import {darkTheme, defaultStyles, lightTheme, Theme} from 'shared/lib';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    systemTheme === 'dark' ? darkTheme : lightTheme,
  );
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    systemTheme === 'dark',
  );

  const toggleTheme = () => {
    setTheme(prev => (prev === darkTheme ? lightTheme : darkTheme));
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, isDarkTheme, toggleTheme}}>
      <View style={defaultStyles.flex}>{children}</View>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
