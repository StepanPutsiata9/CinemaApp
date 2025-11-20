import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback } from 'react';
import { deleteTicketItem, getAllTickets, setTicketsError } from '../store/tickets.slice';

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
  const handleDeleteTicket = async (ticketId: number) => {
    try {
      await dispatch(deleteTicketItem(ticketId)).unwrap();
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };
  return {
    ticketsList: ticketsList,
    ticketsError: ticketsError,
    ticketsLoading: ticketsLoading,
    loadTicketsList: loadTicketsList,
    handleDeleteTicket: handleDeleteTicket,
  };
};
