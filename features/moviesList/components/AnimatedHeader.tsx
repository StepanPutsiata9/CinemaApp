import { useAuth } from '@/features/auth';
import { SearchLogo, TVLogo } from '@/features/shared';
import { IColorsTheme } from '@/features/theme';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import { useMoviesList } from '../hooks';
interface IHeaderProps {
  greetingOpacity: Animated.AnimatedInterpolation<string | number>;
  greetingTranslateY: Animated.AnimatedInterpolation<string | number>;
  headerHeight: Animated.AnimatedInterpolation<string | number>;
  colors: IColorsTheme;
}
export const AnimatedHeader = ({
  greetingOpacity,
  greetingTranslateY,
  headerHeight,
  colors,
}: IHeaderProps) => {
  const { user } = useAuth();
  const styles = useStyles(colors);
  const { searchMovie, searchQuery, clearSearch } = useMoviesList();
  useEffect(() => {
    return () => {
      clearSearch();
    };
  }, [clearSearch]);
  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <Animated.View
        style={[
          {
            opacity: greetingOpacity,
            transform: [{ translateY: greetingTranslateY }],
          },
          styles.greetingView,
        ]}
      >
        <View>
          <Text style={styles.greeting}>С возвращением!</Text>
          <Text style={styles.subtitle}>{user?.login}</Text>
        </View>
        <TVLogo />
      </Animated.View>

      <View style={styles.searchContainer}>
        <View style={styles.logoView}>
          <SearchLogo />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder={'Поиск фильмов'}
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={searchMovie}
          clearButtonMode="while-editing"
        />
      </View>
    </Animated.View>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    header: {
      justifyContent: 'flex-end',
      paddingBottom: 8,
    },
    greetingView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    greeting: {
      fontSize: 14,
      color: colors.text.title,
      fontFamily: 'Montserrat',
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 18,
      color: colors.primary.start,
      fontFamily: 'MontserratBold',
    },
    searchContainer: {
      marginTop: 8,
      position: 'relative',
    },
    logoView: {
      position: 'absolute',
      zIndex: 2,
      top: 14,
      left: 14,
    },
    searchInput: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 30,
      paddingRight: 16,
      paddingLeft: 40,
      paddingVertical: 12,
      fontSize: 16,
      color: '#B8B8B8',
    },
  });
}
