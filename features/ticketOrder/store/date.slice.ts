import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDateList } from '../services';
import { IDateState } from '../types';

const initialState: IDateState = {
  dateList: null,
  dateLoading: false,
  dateError: null,
};

export const getAllDateList = createAsyncThunk(
  'date/getAllDateList',
  async (_, { rejectWithValue }) => {
    try {
      const dateList = await getDateList();
      return dateList;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const dateListSlice = createSlice({
  name: 'dateList',
  initialState,
  reducers: {
    setDateError: (state, action) => {
      state.dateError = action.payload;
    },
    setDateLoading: (state, action) => {
      state.dateLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllDateList.pending, state => {
        state.dateLoading = true;
      })
      .addCase(getAllDateList.fulfilled, (state, action) => {
        state.dateList = action.payload;
        state.dateLoading = false;
      })
      .addCase(getAllDateList.rejected, state => {
        state.dateList = null;
        state.dateLoading = false;
      });
  },
});

export const { setDateError, setDateLoading } = dateListSlice.actions;
export default dateListSlice.reducer;
