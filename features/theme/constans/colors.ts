import { IColorsTheme } from '../types';

export const darkTheme: IColorsTheme = {
  primary: {
    start: '#ff9900',
    finish: '#FFB412',
  },
  background: '#121212',
  text: {
    title: '#fff',
    info: '#121212',
  },
  inputBackground: '#242424',
  error: '#FF1B44',
  tabbar: '#2b2b2b',
} as const;
export const lightTheme: IColorsTheme = {
  primary: {
    start: '#ff9900',
    finish: '#FFB412',
  },
  background: '#e4e4e4ff',
  text: {
    title: '#000000',
    info: '#121212',
  },
  inputBackground: '#ffffffff',
  error: '#FF1B44',
  tabbar: '#e9e6e6ff',
} as const;
