import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMovies } from '../services';
import { IMoviesListState } from '../types';

const initialState: IMoviesListState = {
  allMoviesList: null,
  moviesLoading: false,
  moviesError: null,
  searchedMoviesList: null,
};

export const getAllMoviesList = createAsyncThunk(
  'moviesList/getAllMovies',
  async (_, { rejectWithValue }) => {
    try {
      const moviesList = await getAllMovies();
      console.log(moviesList.main);
      return moviesList;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
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
    searchMovieByTitle(state, action) {
      if ((!action.payload || typeof action.payload !== 'string') && state.allMoviesList?.main) {
        state.searchedMoviesList = state.allMoviesList?.all;
        return;
      }

      const searchTerm = action.payload.toLowerCase().trim();

      if (!searchTerm && state.allMoviesList?.main) {
        state.searchedMoviesList = state.allMoviesList?.all;
        return;
      }
      if (state.allMoviesList?.all) {
        state.searchedMoviesList = state.allMoviesList?.all.filter(movie =>
          movie.name.toLowerCase().startsWith(searchTerm)
        );
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllMoviesList.pending, state => {
        state.moviesLoading = true;
      })
      .addCase(getAllMoviesList.fulfilled, (state, action) => {
        state.allMoviesList = action.payload;
        state.searchedMoviesList = action.payload.all;
        state.moviesLoading = false;
      })
      .addCase(getAllMoviesList.rejected, state => {
        state.allMoviesList = null;
        state.moviesLoading = false;
      });
  },
});

export const { setMoviesError, setMoviesLoading, searchMovieByTitle } = moviesListSlice.actions;
export default moviesListSlice.reducer;
