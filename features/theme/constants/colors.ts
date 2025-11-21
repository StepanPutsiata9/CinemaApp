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
  background: '#FFF4E5',
  text: {
    title: '#000000',
    info: '#121212',
  },
  secondaryBackground: '#FFEACB',
  error: '#FF1B44',
  tabbar: '#FFE3B9',
  takedPlace: '#C1C1C1',
} as const;
