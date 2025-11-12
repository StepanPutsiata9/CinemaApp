import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDateList } from '../services';
import { IDateState } from '../types';

const initialState: IDateState = {
  dateList: null,
  dateLoading: false,
  dateError: null,
  pickedDate: null,
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
    setPickedDate: (state, action) => {
      state.pickedDate = state.dateList?.find(el => el.id === action.payload) || null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllDateList.pending, state => {
        state.dateLoading = true;
      })
      .addCase(getAllDateList.fulfilled, (state, action) => {
        state.dateList = action.payload;
        state.pickedDate = action.payload[0];
        state.dateLoading = false;
      })
      .addCase(getAllDateList.rejected, state => {
        state.dateList = null;
        state.dateLoading = false;
      });
  },
});

export const { setDateListError, setDateListLoading, setPickedDate } = dateListSlice.actions;
export default dateListSlice.reducer;
