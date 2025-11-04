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
  secondaryBackground: string;
  error: string;
  tabbar: string;
  takedPlace: string;
}

export interface IThemeState {
  mode: 'light' | 'dark';
}
export type ThemeMode = 'light' | 'dark';
