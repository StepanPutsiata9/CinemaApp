import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteTicket, getTickets } from '../services';
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

export const deleteTicketItem = createAsyncThunk(
  'tickets/deleteTicketItem',
  async (id: number, { rejectWithValue }) => {
    try {
      const isDelete = await deleteTicket(id);
      if (isDelete) {
        return id;
      }
      throw new Error('Failed to delete ticket');
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTicketsError: (state, action) => {
      state.ticketsError = action.payload;
    },
    removeTicketLocally: (state, action) => {
      if (state.ticketsList) {
        state.ticketsList = state.ticketsList.filter(ticket => ticket.id !== action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllTickets.pending, state => {
        state.ticketsLoading = true;
        state.ticketsError = null;
      })
      .addCase(getAllTickets.fulfilled, (state, action) => {
        state.ticketsList = action.payload;
        state.ticketsLoading = false;
      })
      .addCase(getAllTickets.rejected, (state, action) => {
        state.ticketsList = null;
        state.ticketsLoading = false;
        state.ticketsError = action.payload as string;
      })

      .addCase(deleteTicketItem.pending, (state, action) => {
        state.ticketsError = null;
        if (state.ticketsList) {
          state.ticketsList = state.ticketsList.filter(ticket => ticket.id !== action.meta.arg);
        }
      })
      .addCase(deleteTicketItem.fulfilled, state => {
        // Билет уже удален оптимистично, ничего не делаем
        // Можно добавить toast notification об успешном удалении
      })
      .addCase(deleteTicketItem.rejected, (state, action) => {
        state.ticketsError = action.payload as string;
      });
  },
});

export const { setTicketsError, removeTicketLocally } = ticketsSlice.actions;
export default ticketsSlice.reducer;
