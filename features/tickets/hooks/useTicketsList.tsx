import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback } from 'react';
import { getAllTickets, setTicketsError } from '../store/tickets.slice';

export const useTicketsList = () => {
  const { ticketsError, ticketsList, ticketsLoading } = useAppSelector(state => state.ticketsList);
  const dispatch = useAppDispatch();
  const loadTicketsList = useCallback(async () => {
    try {
      dispatch(getAllTickets());
    } catch (error) {
      dispatch(setTicketsError(error instanceof Error ? error.message : 'Unknown error'));
    }
  }, [dispatch]);
  return {
    ticketsList: ticketsList,
    ticketsError: ticketsError,
    ticketsLoading: ticketsLoading,
    loadTicketsList: loadTicketsList,
  };
};
