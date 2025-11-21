import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../hooks';
import { IColorsTheme } from '../types';

interface ISwitchThemeButtonProps {
  colors: IColorsTheme;
}
export const SwitchThemeButton = ({ colors }: ISwitchThemeButtonProps) => {
  const { isDark, handleToggleTheme } = useTheme();
  const styles = useStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <AntDesign
          name={isDark ? 'moon' : 'sun'}
          size={20}
          color={isDark ? colors.primary.finish : '#FFA500'}
        />
        <Text style={styles.text}>{isDark ? 'Темная тема' : 'Светлая тема'}</Text>
      </View>

      <View style={styles.switchWrapper}>
        <Switch
          value={isDark}
          onValueChange={handleToggleTheme}
          trackColor={{ false: '#9CA3AF', true: colors.primary.start }}
          thumbColor={isDark ? 'white' : '#FDE68A'}
          ios_backgroundColor="#9CA3AF"
        />
      </View>
    </View>
  );
};

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: colors.tabbar,
      borderRadius: 20,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    text: {
      fontSize: 16,
      fontFamily: 'Montserrat',
      color: colors.text.title,
    },
    switchWrapper: {
      ...Platform.select({
        android: {
          marginVertical: -10,
        },
        ios: {},
      }),
    },
  });
