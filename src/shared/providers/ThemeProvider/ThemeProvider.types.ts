import {Theme} from 'shared/lib';

export interface ThemeContextProps {
  theme: Theme;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}
