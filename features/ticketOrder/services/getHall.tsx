import { api } from '@/api';
import { TPlace } from '../types';
export const getHall = async (id: string, time: string) => {
  console.log('try');
  console.log('try ', id, ' ', time);

  const { data } = await api.post(`movies/tickets/shows/${id}`, JSON.stringify({ time: time }));
  console.log('GetHall====================================');
  console.log(data);
  console.log('====================================');
  const hall = data.places as TPlace[][];
  return hall;
};
