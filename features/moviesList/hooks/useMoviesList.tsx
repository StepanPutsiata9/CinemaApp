import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useState } from 'react';
import { getAllMovies } from '../services';
import { getAllMoviesList, setMoviesError, setMoviesLoading } from '../store/moviesList.slice';

export const useMoviesList = () => {
  const dispatch = useAppDispatch();
  const { moviesLoading, moviesError, allMoviesList } = useAppSelector(state => state.moviesList);
  const [refreshing, setRefreshing] = useState(false);
  const loadMoviesList = useCallback(async () => {
    try {
      dispatch(setMoviesLoading(true));
      dispatch(setMoviesError(null));

      const moviesList = await getAllMovies();
      dispatch(getAllMoviesList(moviesList));
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

  const mainMovie = allMoviesList?.main[0];
  const popularMovies = allMoviesList?.popular || [];
  const allMovies = allMoviesList?.all || [];

  return {
    moviesLoading,
    moviesError,
    loadMoviesList,
    mainMovie,
    popularMovies,
    allMovies,
    refreshing,
    onRefresh,
  };
};
