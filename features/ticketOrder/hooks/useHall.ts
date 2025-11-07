import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { TLine } from '../components/HallPlan';
import { removeSelectedPlaces, selectPlace } from '../store/hall.slice';

export const useHall = () => {
  const { hallError, hallLoading, hallPlaces, reservedPlaceCount, reservedPlaceCost } =
    useAppSelector(state => state.hall);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [seatsData, setSeatsData] = useState<TLine[][]>([
    [
      { id: 1, mode: 'free' },
      { id: 2, mode: 'free' },
      { id: 3, mode: 'free' },
      { id: 4, mode: 'free' },
      { id: 5, mode: 'free' },
      { id: 6, mode: 'free' },
      { id: 7, mode: 'free' },
      { id: 8, mode: 'free' },
      { id: 9, mode: 'free' },
      { id: 10, mode: 'free' },
      { id: 11, mode: 'free' },
    ],
    [
      { id: 1, mode: 'taken' },
      { id: 2, mode: 'free' },
      { id: 3, mode: 'free' },
      { id: 4, mode: 'free' },
      { id: 5, mode: 'free' },
      { id: 6, mode: 'taken' },
      { id: 7, mode: 'free' },
      { id: 8, mode: 'free' },
      { id: 9, mode: 'free' },
      { id: 10, mode: 'free' },
      { id: 11, mode: 'free' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 15, mode: 'taken' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'taken' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'free' },
      { id: 23, mode: 'free' },
      { id: 24, mode: 'free' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'taken' },
      { id: 19, mode: 'taken' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'free' },
      { id: 23, mode: 'free' },
      { id: 24, mode: 'free' },
    ],
    [
      { id: 12, mode: 'taken' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'taken' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'taken' },
      { id: 18, mode: 'taken' },
      { id: 19, mode: 'taken' },
      { id: 20, mode: 'taken' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'free' },
      { id: 23, mode: 'free' },
      { id: 24, mode: 'free' },
    ],
    [
      { id: 12, mode: 'taken' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'taken' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'taken' },
      { id: 19, mode: 'taken' },
      { id: 20, mode: 'taken' },
      { id: 21, mode: 'taken' },
      { id: 22, mode: 'free' },
      { id: 23, mode: 'free' },
      { id: 24, mode: 'free' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 22, mode: 'free' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 24, mode: 'free' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
      { id: 23, mode: 'free' },
    ],
    [
      { id: 22, mode: 'free' },
      { id: 23, mode: 'free' },
      { id: 24, mode: 'free' },
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 22, mode: 'free' },
      { id: 23, mode: 'free' },
      { id: 24, mode: 'free' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'taken' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'taken' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'free' },
      { id: 23, mode: 'free' },
      { id: 24, mode: 'free' },
    ],
  ]);
  const handleSeatPress = (lineIndex: number, seatIndex: number) => {
    const updatedData = [...seatsData];
    const seat = updatedData[lineIndex][seatIndex];
    if (seat.mode === 'free') {
      seat.mode = 'selected';
      dispatch(selectPlace('select'));
    } else if (seat.mode === 'selected') {
      seat.mode = 'free';
      dispatch(selectPlace('free'));
    }
    setSeatsData(updatedData);
  };
  const handleBack = () => {
    dispatch(removeSelectedPlaces());
    router.back();
  };
  const handleBookingPress = () => {
    Alert.alert(
      'Бронирование места',
      'Вы уверены, что хотите забронировать это место?',
      [
        {
          text: 'Забронировать',
          style: 'default',
          onPress: async () => {
            try {
              await handleBooking();
              Alert.alert('Успешно!', 'Место успешно забронировано!', [
                { text: 'OK', style: 'default' },
              ]);
            } catch {
              Alert.alert('Ошибка', 'Не удалось забронировать место. Попробуйте еще раз.', [
                { text: 'OK', style: 'destructive' },
              ]);
            }
          },
        },
        {
          text: 'Отмена',
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleBooking = async () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
  };
  return {
    seatsData: seatsData,
    handleSeatPress: handleSeatPress,
    hallPlaces: hallPlaces,
    hallError: hallError,
    hallLoading: hallLoading,
    reservedPlaceCount: reservedPlaceCount,
    reservedPlaceCost: reservedPlaceCost,
    handleBack: handleBack,
    handleBookingPress: handleBookingPress,
  };
};
