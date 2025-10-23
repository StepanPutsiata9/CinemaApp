import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearSelectedMovieInfo, getSelectedMovieInfo } from '../store/selectedMovie.slice';

export const useSelectedMovie = () => {
  const { selectedMovie, selectedMovieLoading, selectedMovieError } = useAppSelector(
    state => state.selectedMovie
  );
  const dispatch = useAppDispatch();
  const selectMovie = (id: number) => {
    dispatch(getSelectedMovieInfo(id));
  };
  const clearSelectedMovie = () => {
    dispatch(clearSelectedMovieInfo());
  };
  return {
    selectedMovie,
    selectedMovieLoading,
    selectedMovieError,
    selectMovie: selectMovie,
    clearSelectedMovie: clearSelectedMovie,
  };
};
