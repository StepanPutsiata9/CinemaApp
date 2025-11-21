import { IColorsTheme } from '@/features/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IGradientProgressBarProps {
  progress: number;
  title: string;
  colors: IColorsTheme;
}

export const GradientProgressBar = ({ progress, title, colors }: IGradientProgressBarProps) => {
  const styles = useStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <LinearGradient
          colors={['#FF7700', '#FFC812']}
          style={[styles.progressBarFill, { width: `${progress * 100}%` }]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      width: '70%',
      position: 'relative',
    },
    progressBarBackground: {
      height: 30,
      backgroundColor: colors.tabbar,
      borderRadius: 10,
      overflow: 'hidden',
    },
    progressBarFill: {
      height: 30,
      borderRadius: 10,
    },
    textContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontFamily: 'MontserratBold',
      color: colors.text.title,
    },
  });
}
