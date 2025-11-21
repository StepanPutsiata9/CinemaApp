import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback } from 'react';
import { Alert } from 'react-native';
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
    Alert.alert(
      'Отмена брони',
      'Вы уверены, что хотите отменить бронь? Это действие невозможно отменить.',
      [
        {
          text: 'Нет',
          style: 'cancel',
        },
        {
          text: 'Да',
          style: 'destructive',
          onPress: () => confirmDelete(ticketId),
        },
      ]
    );
  };

  const confirmDelete = async (ticketId: number) => {
    try {
      await dispatch(deleteTicketItem(ticketId)).unwrap();
    } catch (error) {
      console.error('Ошибка при удалении:', error);
      Alert.alert('Ошибка', 'Произошла ошибка при отмене брони. Пожалуйста, попробуйте еще раз.');
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
