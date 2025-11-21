import { api } from '@/api';
import { ITicket } from '../types';
export const getTickets = async () => {
  const { data } = await api.get('movies/tickets/user');
  console.log('data tickets', data);
  const ticketsList = data as ITicket[];
  return ticketsList;
};
