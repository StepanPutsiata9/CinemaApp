import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useRef, useState } from 'react';
import {
  getAllMoviesList,
  searchMovieByTitle,
  setMoviesError,
  setMoviesLoading,
} from '../store/moviesList.slice';

export const useMoviesList = () => {
  const dispatch = useAppDispatch();
  const { moviesLoading, moviesError, allMoviesList, searchedMoviesList } = useAppSelector(
    state => state.moviesList
  );
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchTimeoutRef = useRef<number | null>(null);

  const loadMoviesList = useCallback(async () => {
    try {
      dispatch(setMoviesLoading(true));
      dispatch(setMoviesError(null));

      dispatch(getAllMoviesList());
    } catch (error) {
      dispatch(setMoviesError(error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      dispatch(setMoviesLoading(false));
    }
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadMoviesList();
      setRefreshing(false);
    }, 1000);
  }, [loadMoviesList]);

  const searchMovie = useCallback(
    (movieTitle: string) => {
      setSearchQuery(movieTitle);

      if (searchTimeoutRef.current !== null) {
        clearTimeout(searchTimeoutRef.current);
      }

      if (movieTitle.trim() === '') {
        dispatch(searchMovieByTitle(''));
        return;
      }

      searchTimeoutRef.current = setTimeout(() => {
        dispatch(searchMovieByTitle(movieTitle));
      }, 300);
    },
    [dispatch]
  );

  const clearSearch = useCallback(() => {
    if (searchTimeoutRef.current !== null) {
      clearTimeout(searchTimeoutRef.current);
      searchTimeoutRef.current = null;
    }
  }, []);

  const mainMovie = allMoviesList?.main;
  const popularMovies = allMoviesList?.popular || [];
  const allMovies = searchedMoviesList || [];

  return {
    moviesLoading,
    moviesError,
    loadMoviesList,
    mainMovie,
    popularMovies,
    allMovies,
    refreshing,
    onRefresh,
    searchMovie,
    searchQuery,
    clearSearch,
  };
};
