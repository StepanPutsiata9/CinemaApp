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
  async (id: number, { rejectWithValue }) => {
    try {
      const dateList = await getDateList(id);
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
    setDateListError: (state, action) => {
      state.dateError = action.payload;
    },
    setDateListLoading: (state, action) => {
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

export const { setDateListError, setDateListLoading } = dateListSlice.actions;
export default dateListSlice.reducer;
