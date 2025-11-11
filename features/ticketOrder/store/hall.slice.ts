import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { booking, getHall } from '../services';
import { IHallState } from '../types';

const initialState: IHallState = {
  hallPlaces: null,
  hallLoading: false,
  hallError: null,
  reservedPlaceCount: 0,
  bookingLoading: false,
  bookingError: null,
  reservedPlaceCost: 0,
  isBookingSucsess: false,
};

export const getHallPlaces = createAsyncThunk(
  'hall/getHallPlaces',
  async ({ id, time }: { id: string; time: string }, { rejectWithValue }) => {
    try {
      const hallList = await getHall(id, time);
      return hallList;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);
export const bookingPlace = createAsyncThunk(
  'hall/bookingPlace',
  async (idArray: number[], { rejectWithValue }) => {
    try {
      const isBooking = await booking(idArray);
      return isBooking;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);
const hallSlice = createSlice({
  name: 'hall',
  initialState,
  reducers: {
    setHallError: (state, action) => {
      state.hallError = action.payload;
    },
    setHallLoading: (state, action) => {
      state.hallLoading = action.payload;
    },
    selectPlace: (state, action) => {
      if (action.payload === 'select') {
        state.reservedPlaceCost += 15;
        state.reservedPlaceCount += 1;
      }
      if (action.payload === 'free') {
        state.reservedPlaceCost -= 15;
        state.reservedPlaceCount -= 1;
      }
    },
    removeSelectedPlaces: state => {
      state.reservedPlaceCost = 0;
      state.reservedPlaceCount = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getHallPlaces.pending, state => {
        state.hallLoading = true;
      })
      .addCase(getHallPlaces.fulfilled, (state, action) => {
        state.hallPlaces = action.payload;
        state.hallLoading = false;
      })
      .addCase(getHallPlaces.rejected, state => {
        state.hallPlaces = null;
        state.hallLoading = false;
      })

      .addCase(bookingPlace.pending, state => {
        state.bookingLoading = true;
      })
      .addCase(bookingPlace.fulfilled, (state, action) => {
        state.isBookingSucsess = action.payload as unknown as boolean;
        state.bookingLoading = false;
      })
      .addCase(bookingPlace.rejected, state => {
        state.bookingLoading = false;
      });
  },
});

export const { setHallError, setHallLoading, selectPlace, removeSelectedPlaces } =
  hallSlice.actions;
export default hallSlice.reducer;
