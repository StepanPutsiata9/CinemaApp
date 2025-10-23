import authReducer from '@/features/auth/store/auth.slice';
import moviesListReducer from '@/features/moviesList/store/moviesList.slice';
import selectedMovieReducer from '@/features/selectedMovie/store/selectedMovie.slice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    moviesList: moviesListReducer,
    selectedMovie: selectedMovieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
