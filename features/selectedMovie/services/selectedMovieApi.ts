import { api } from '@/api';
import { ISelectedMovie } from '../types';
export const getMovieInfo = async (id: number) => {
  const { data } = await api.get(`movies/${id}`);
  const selectedMovie = data as ISelectedMovie;
  console.log('====================================');
  console.log('sel', selectedMovie);
  console.log('====================================');
  return selectedMovie;
};
