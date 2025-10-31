import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useEffect, useState } from 'react';
import {
  getAllDateList,
  setDateListError,
  setDateListLoading,
  setPickedDate,
} from '../store/date.slice';

export const useDateList = () => {
  const dispatch = useAppDispatch();
  const { dateList, dateError, dateLoading, pickedDate } = useAppSelector(state => state.dateList);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    pickedDate?.id || (dateList && dateList.length > 0 ? dateList[0].id : null)
  );

  useEffect(() => {
    if (dateList && dateList.length > 0 && !selectedCategory) {
      const firstDateId = dateList[0].id;
      setSelectedCategory(firstDateId);
    }
  }, [dateList, selectedCategory]);

  const loadDateList = useCallback(
    async (id: number) => {
      try {
        dispatch(setDateListLoading(true));
        dispatch(setDateListError(null));
        await dispatch(getAllDateList(id)).unwrap();
      } catch (error) {
        dispatch(setDateListError(error instanceof Error ? error.message : 'Unknown error'));
      } finally {
        dispatch(setDateListLoading(false));
      }
    },
    [dispatch]
  );

  const handleCategoryPress = (id: number) => {
    if (id !== selectedCategory) {
      setSelectedCategory(id);
      dispatch(setPickedDate(id));
    }
  };

  return {
    dateError,
    dateLoading,
    loadDateList,
    dateList,
    pickedDate,
    handleCategoryPress,
    selectedCategory,
  };
};
