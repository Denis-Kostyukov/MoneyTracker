import {createContext, FC, ReactNode, useState} from 'react';
import {ThemeContextProps} from 'shared/providers/ThemeProvider/ThemeProvider.types.ts';
import {useColorScheme, View} from 'react-native';
import {darkTheme, defaultStyles, lightTheme, Theme} from 'shared/lib';

export const ThemeContext = createContext<
  ThemeContextProps | undefined
>(undefined);

const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(systemTheme === 'dark' ? darkTheme : lightTheme)

  const toggleTheme = () => {
    setTheme(prev => prev === darkTheme ? lightTheme : darkTheme)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <View style={defaultStyles.flex}>
        {children}
      </View>

    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
