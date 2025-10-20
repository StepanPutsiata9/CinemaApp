import {
  Header,
  MainMovie,
  MoviesList,
  PopularMoviesList,
  useCollapsibleHeader,
  useMoviesList,
} from '@/features/moviesList';
import { ErrorContainer, LoadingContainer } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import React, { useEffect } from 'react';
import { Animated, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeTab = () => {
  const { headerHeight, greetingOpacity, greetingTranslateY, onScroll } = useCollapsibleHeader({
    expandedHeight: 115,
    collapsedHeight: 60,
  });
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const {
    loadMoviesList,
    mainMovie,
    popularMovies,
    allMovies,
    moviesError,
    moviesLoading,
    refreshing,
    onRefresh,
  } = useMoviesList();
  useEffect(() => {
    loadMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <KeyboardAvoidingView style={styles.keyboardContainer} behavior={'padding'}>
      <SafeAreaView style={styles.container}>
        <Header
          headerHeight={headerHeight}
          greetingOpacity={greetingOpacity}
          greetingTranslateY={greetingTranslateY}
        />
        {moviesLoading && <LoadingContainer />}
        {moviesError && <ErrorContainer error={moviesError} />}
        {!moviesLoading && !moviesError && (
          <Animated.ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.content}
            onScroll={onScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            {mainMovie && <MainMovie movie={mainMovie} />}
            {popularMovies && popularMovies.length !== 0 && (
              <View>
                <Text style={styles.titleText}>Популярные</Text>
                <PopularMoviesList movies={popularMovies} />
              </View>
            )}
            {allMovies && allMovies.length !== 0 && (
              <View style={styles.moviesList}>
                <Text style={styles.titleText}>Прокат</Text>
                <MoviesList movies={allMovies} />
              </View>
            )}
          </Animated.ScrollView>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    keyboardContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
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
    titleText: {
      fontFamily: 'Montserrat',
      fontSize: 18,
      color: colors.text.title,
      marginBottom: 12,
    },
  });
}

export default HomeTab;
