import { api } from '@/api';
import { ITimeItem } from '../types';
export const getDateList = async (id: number) => {
  const { data } = await api.get(`movies/shows/${id}`);
  console.log('dates====================================');
  console.log(data[0]);
  console.log('====================================');
  const dateList = data as ITimeItem[];
  return dateList;
};
