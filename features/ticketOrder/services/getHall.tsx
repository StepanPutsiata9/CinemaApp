import { api } from '@/api';
import { TPlace } from '../types';
export const getHall = async (id: string, time: string) => {
  const { data } = await api.post(`movies/tickets/shows/${id}`, JSON.stringify({ time: time }));
  const hall = data.places as TPlace[][];
  return hall;
};
