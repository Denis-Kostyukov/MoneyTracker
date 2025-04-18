import {StatusBarStyle} from 'react-native';

export interface Theme {
  barStyle: StatusBarStyle,
  background: string,
  card: string,
  text: string,
  subtext: string,
  border: string,
  buttonBackground: string,
  buttonText: string,
  inputBackground: string,
  inputText: string,
}

export const lightTheme: Theme = {
  barStyle: 'dark-content',
  background: '#FFFFFF',
  card: '#F0F0F0',
  text: '#000000',
  subtext: '#333333',
  border: '#CCCCCC',
  buttonBackground: '#E0E0E0',
  buttonText: '#000000',
  inputBackground: '#FFFFFF',
  inputText: '#000000',
};

export const darkTheme: Theme = {
  barStyle: 'light-content',
  background: '#000000',
  card: '#1A1A1A',
  text: '#FFFFFF',
  subtext: '#CCCCCC',
  border: '#444444',
  buttonBackground: '#333333',
  buttonText: '#FFFFFF',
  inputBackground: '#111111',
  inputText: '#FFFFFF',
};
