import { api } from '@/api';
import { IDateList } from '../types';
export const getDateList = async () => {
  const { data } = await api.get(`getAllDates`);
  const dateList = data as IDateList;
  return dateList;
};
