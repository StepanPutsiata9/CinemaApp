import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTickets } from '../services';
import { ITicketsState } from '../types';

const initialState: ITicketsState = {
  ticketsList: null,
  ticketsLoading: false,
  ticketsError: null,
};

export const getAllTickets = createAsyncThunk(
  'tickets/getAllTickets',
  async (_, { rejectWithValue }) => {
    try {
      const ticketsList = await getTickets();
      return ticketsList;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllTickets.pending, state => {
        state.ticketsLoading = true;
      })
      .addCase(getAllTickets.fulfilled, (state, action) => {
        state.ticketsList = action.payload;
        state.ticketsLoading = false;
      })
      .addCase(getAllTickets.rejected, state => {
        state.ticketsList = null;
        state.ticketsLoading = false;
      });
  },
});

export const {} = moviesListSlice.actions;
export default moviesListSlice.reducer;
