import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback } from 'react';
import { getAllDateList, setDateListError, setDateListLoading } from '../store/date.slice';

export const useDateList = () => {
  const dispatch = useAppDispatch();
  const { dateList, dateError, dateLoading } = useAppSelector(state => state.dateList);

  const loadDateList = useCallback(
    async (id: number) => {
      try {
        dispatch(setDateListLoading(true));
        dispatch(setDateListError(null));

        dispatch(getAllDateList(id));
      } catch (error) {
        dispatch(setDateListError(error instanceof Error ? error.message : 'Unknown error'));
      } finally {
        dispatch(setDateListLoading(false));
      }
    },
    [dispatch]
  );

  const timesList = dateList?.times || [];
  const calendarList = dateList?.dates || [];
  return {
    dateError: dateError,
    dateLoading: dateLoading,
    loadDateList: loadDateList,
    timesList: timesList,
    calendarList: calendarList,
  };
};
