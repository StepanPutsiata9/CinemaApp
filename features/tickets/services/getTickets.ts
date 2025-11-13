import { api } from '@/api';
import { ITicket } from '../types';
export const getTickets = async () => {
  const { data } = await api.get('tickets');
  const ticketsList = data as ITicket[];
  return ticketsList;
};
