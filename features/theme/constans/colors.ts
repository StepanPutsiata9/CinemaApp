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
  secondaryBackground: '#242424',
  error: '#FF1B44',
  tabbar: '#2b2b2b',
  takedPlace: '#484848',
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
  secondaryBackground: '#ffffffff',
  error: '#FF1B44',
  tabbar: '#d9d8d8ff',
  takedPlace: '#c7c4c4ff',
} as const;
