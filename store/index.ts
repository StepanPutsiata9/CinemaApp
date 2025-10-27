import { setOnLogoutCallback } from '@/api';
import authReducer, { logout } from '@/features/auth/store/auth.slice';
import moviesListReducer from '@/features/moviesList/store/moviesList.slice';
import selectedMovieReducer from '@/features/selectedMovie/store/selectedMovie.slice';
import themeReducer from '@/features/theme/store/theme.slice';
import dateListReducer from '@/features/ticketOrder/store/date.slice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    moviesList: moviesListReducer,
    selectedMovie: selectedMovieReducer,
    theme: themeReducer,
    dateList: dateListReducer,
  },
});
setOnLogoutCallback(() => {
  store.dispatch(logout());
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
