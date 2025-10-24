import * as SecureStore from 'expo-secure-store';
import { ThemeMode } from '../types';

const STORAGE_KEYS = {
  THEME_MODE: 'theme_mode',
} as const;

export const storeTheme = async (theme: ThemeMode): Promise<boolean> => {
  try {
    await SecureStore.setItemAsync(STORAGE_KEYS.THEME_MODE, theme);
    return true;
  } catch (error) {
    console.error('Error storing theme:', error);
    return false;
  }
};

export const getTheme = async (): Promise<ThemeMode | null> => {
  try {
    const theme = await SecureStore.getItemAsync(STORAGE_KEYS.THEME_MODE);

    if (theme) {
      return theme as ThemeMode;
    }
    return null;
  } catch (error) {
    console.error('Error getting theme:', error);
    return null;
  }
};

export const clearTheme = async (): Promise<boolean> => {
  try {
    await SecureStore.deleteItemAsync(STORAGE_KEYS.THEME_MODE);
    return true;
  } catch (error) {
    console.error('Error clearing theme:', error);
    return false;
  }
};
