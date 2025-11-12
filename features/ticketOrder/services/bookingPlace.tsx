import { api } from '@/api';
import { IBookingPlaces } from '../types';

export const booking = async (places: IBookingPlaces, id: string) => {
  const { data } = await api.post(`movies/tickets/create/${id}`, JSON.stringify(places));
  const bookingResponse = data as boolean;
  return bookingResponse;
};
