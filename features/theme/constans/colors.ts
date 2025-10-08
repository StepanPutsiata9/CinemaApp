import { IColorsTheme } from '../types/interfaces';

export const darkTheme: IColorsTheme = {
  primary: {
    start: '#ff9900',
    finish: '#FFB412',
  },
  //   secondary: {
  //     main: '#dc004e',
  //     light: '#ff5983',
  //     dark: '#9a0036',
  //   },
  background: '#121212',
  text: {
    title: '#fff',
    info: '#121212',
  },
  //   common: {
  //     white: '#ffffff',
  //     black: '#000000',
  //   },
  //   error: '#f44336',
  //   warning: '#ff9800',
  //   success: '#4caf50',
} as const;
