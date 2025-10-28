import { api } from '@/api';
import { IDateList } from '../types';
export const getDateList = async (id: number) => {
  const { data } = await api.get(`getAllDates/${id}`);
  const dateList = data as IDateList;
  return dateList;
};
