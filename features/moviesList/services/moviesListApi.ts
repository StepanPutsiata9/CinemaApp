import { api } from '@/api';
import { MoviesData } from '../types';
export const getAllMovies = async () => {
  const { data } = await api.get('movies');
  const moviesList = data as MoviesData;
  console.log('=================================');
  console.log(moviesList.main);
  console.log('=================================');
  return moviesList;
};
