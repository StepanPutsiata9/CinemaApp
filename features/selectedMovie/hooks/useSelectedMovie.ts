import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'expo-router';
import { clearSelectedMovieInfo, getSelectedMovieInfo } from '../store/selectedMovie.slice';

export const useSelectedMovie = () => {
  const { selectedMovie, selectedMovieLoading, selectedMovieError } = useAppSelector(
    state => state.selectedMovie
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectMovie = (id: number) => {
    dispatch(getSelectedMovieInfo(id));
  };
  const clearSelectedMovie = () => {
    dispatch(clearSelectedMovieInfo());
  };
  const handleClose = () => {
    router.back();
    clearSelectedMovie();
  };

  const handleBuyTicket = (id: number) => {
    router.push({
      pathname: '/(root)/(ticketOrder)/date',
      params: { id },
    });
  };

  return {
    selectedMovie,
    selectedMovieLoading,
    selectedMovieError,
    selectMovie: selectMovie,
    clearSelectedMovie: clearSelectedMovie,
    handleClose: handleClose,
    handleBuyTicket: handleBuyTicket,
  };
};
