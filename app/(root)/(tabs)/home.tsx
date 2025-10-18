import { Header, MoviesList, PopularMoviesList, useCollapsibleHeader } from '@/features/moviesList';
import { IColorsTheme, useTheme } from '@/features/theme';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeTab = () => {
  const { headerHeight, greetingOpacity, greetingTranslateY, onScroll } = useCollapsibleHeader({
    expandedHeight: 115,
    collapsedHeight: 60,
  });
  const { colors } = useTheme();
  const styles = useStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerHeight={headerHeight}
        greetingOpacity={greetingOpacity}
        greetingTranslateY={greetingTranslateY}
      />

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: '100%',
            height: 160,
            backgroundColor: '#FFA605',
            borderRadius: 20,
            marginBottom: 12,
          }}
        />
        <View>
          <Text style={styles.popularText}>Популярные</Text>
          <PopularMoviesList
            items={Array.from({ length: 30 }, (_, i) => ({ id: i + 1, number: i + 1 }))}
          />
        </View>
        <View style={styles.moviesList}>
          <MoviesList
            items={Array.from({ length: 30 }, (_, i) => ({ id: i + 1, number: i + 1 }))}
          />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    scrollView: {
      flex: 1,
    },
    moviesList: {
      marginBottom: 70,
    },
    content: {
      paddingVertical: 16,
    },
    popularText: {
      fontFamily: 'Montserrat',
      fontSize: 18,
      color: colors.text.title,
      marginBottom: 12,
    },
  });
}

export default HomeTab;
