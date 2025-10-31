import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieInfo } from '../services';
import { ISelectedMovieState } from '../types';

const initialState: ISelectedMovieState = {
  selectedMovie: null,
  selectedMovieLoading: false,
  selectedMovieError: null,
};

export const getSelectedMovieInfo = createAsyncThunk(
  'selectedMovie/getSelectedMovieInfo',
  async (id: number, { rejectWithValue }) => {
    try {
      const selectedMovie = await getMovieInfo(id);
      return selectedMovie;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    clearSelectedMovieInfo: state => {
      state.selectedMovie = null;
      state.selectedMovieError = null;
      state.selectedMovieLoading = false;
    },
    setSeletedMovieError: (state, action) => {
      state.selectedMovieError = action.payload;
    },
    setSelectedMovieLoading: (state, action) => {
      state.selectedMovieLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSelectedMovieInfo.pending, state => {
        state.selectedMovieLoading = true;
      })
      .addCase(getSelectedMovieInfo.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
        state.selectedMovieLoading = false;
      })
      .addCase(getSelectedMovieInfo.rejected, state => {
        state.selectedMovie = null;
        state.selectedMovieLoading = false;
      });
  },
});

export const { setSeletedMovieError, setSelectedMovieLoading, clearSelectedMovieInfo } =
  selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
