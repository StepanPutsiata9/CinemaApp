import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useEffect, useState } from 'react';
import { getAllDateList, setDateListError, setPickedDate } from '../store/date.slice';

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
        await dispatch(getAllDateList(id)).unwrap();
      } catch (error) {
        dispatch(setDateListError(error instanceof Error ? error.message : 'Unknown error'));
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
  const getMonthAbbreviation = (monthNumber: string): string => {
    const monthAbbreviations: { [key: number]: string } = {
      '1': 'ЯНВ',
      '2': 'ФЕВ',
      '3': 'МАР',
      '4': 'АПР',
      '5': 'МАЙ',
      '6': 'ИЮН',
      '7': 'ИЮЛ',
      '8': 'АВГ',
      '9': 'СЕН',
      '10': 'ОКТ',
      '11': 'НОЯ',
      '12': 'ДЕК',
    };
    return monthAbbreviations[Number(monthNumber)];
  };
  return {
    dateError,
    dateLoading,
    loadDateList,
    dateList,
    pickedDate,
    handleCategoryPress,
    selectedCategory,
    getMonthAbbreviation,
  };
};
