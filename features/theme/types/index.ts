export interface IColorsTheme {
  primary: {
    start: string;
    finish: string;
  };
  background: string;
  text: {
    title: string;
    info: string;
  };
  inputBackground: string;
  error: string;
  tabbar: string;
}

export interface IThemeState {
  mode: 'light' | 'dark';
}
export type ThemeMode = 'light' | 'dark';
