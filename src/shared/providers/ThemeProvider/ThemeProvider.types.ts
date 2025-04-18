import {Theme} from 'shared/lib';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}
