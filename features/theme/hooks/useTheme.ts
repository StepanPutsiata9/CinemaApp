// import { useSelector } from 'react-redux';
// import { useMemo } from 'react';
// import { RootState } from '@/store';
import { darkTheme } from '../constans/colors';
import { IColorsTheme } from '../types';

export const useTheme = () => {
  //   const themeMode = useSelector((state: RootState) => state.theme.mode);

  //   const colors: IColorsTheme = useMemo(() => {
  //     return themeMode === 'light' ? lightColors : darkColors;
  //   }, [themeMode]);

  //   const isDark = themeMode === 'dark';
  //   const isLight = themeMode === 'light';
  const colors: IColorsTheme = darkTheme;
  return {
    // mode: themeMode,
    colors,
    // isDark,
    // isLight,
  };
};
