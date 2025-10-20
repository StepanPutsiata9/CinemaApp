import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMoviesListState, MoviesData } from '../types';

const initialState: IMoviesListState = {
  allMoviesList: null,
  moviesLoading: false,
  moviesError: null,
};

export const getAllMoviesList = createAsyncThunk(
  'moviesList/getAllMovies',
  async (moviesList: MoviesData, { rejectWithValue }) => {
    return moviesList;
  }
);

const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    setMoviesError: (state, action) => {
      state.moviesError = action.payload;
    },
    setMoviesLoading: (state, action) => {
      state.moviesLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllMoviesList.pending, state => {
        state.moviesLoading = true;
      })
      .addCase(getAllMoviesList.fulfilled, (state, action) => {
        state.allMoviesList = action.payload;
        state.moviesLoading = false;
      })
      .addCase(getAllMoviesList.rejected, state => {
        state.allMoviesList = null;
        state.moviesLoading = false;
      });
  },
});

export const { setMoviesError, setMoviesLoading } = moviesListSlice.actions;
export default moviesListSlice.reducer;
