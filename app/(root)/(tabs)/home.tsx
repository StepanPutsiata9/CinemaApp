import {
  Header,
  MainMovie,
  MoviesList,
  PopularMoviesList,
  useCollapsibleHeader,
  useMoviesList,
} from '@/features/moviesList';
import { ErrorContainer, LoadingModal } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeTab = () => {
  const { headerHeight, greetingOpacity, greetingTranslateY, onScroll } = useCollapsibleHeader({
    expandedHeight: 115,
    collapsedHeight: 60,
  });
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const { loadMoviesList, mainMovie, popularMovies, allMovies, moviesError, moviesLoading } =
    useMoviesList();
  useEffect(() => {
    loadMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <LoadingModal visible={moviesLoading} />
      <Header
        headerHeight={headerHeight}
        greetingOpacity={greetingOpacity}
        greetingTranslateY={greetingTranslateY}
      />
      {/* {moviesLoading && <LoadingContainer />} */}
      {moviesError && <ErrorContainer error={moviesError} />}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {mainMovie && <MainMovie movie={mainMovie} />}
        {popularMovies && popularMovies.length !== 0 && (
          <View>
            <Text style={styles.popularText}>Популярные</Text>
            <PopularMoviesList movies={popularMovies} />
          </View>
        )}
        {allMovies && allMovies.length !== 0 && (
          <View style={styles.moviesList}>
            <MoviesList movies={allMovies} />
          </View>
        )}
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
