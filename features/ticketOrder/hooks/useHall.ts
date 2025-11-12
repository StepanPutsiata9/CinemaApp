import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
  bookingPlace,
  clearBookingPlace,
  getHallPlaces,
  removeSelectedPlaces,
  selectPlace,
  setBookingPlace,
  setHallError,
} from '../store/hall.slice';
import { IBookingPlaces, TPlace } from '../types';

export const useHall = () => {
  const {
    hallError,
    hallLoading,
    hallPlaces,
    reservedPlaceCount,
    reservedPlaceCost,
    bookingLoading,
    bookingError,
    bookingPlaces,
  } = useAppSelector(state => state.hall);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [seatsData, setSeatsData] = useState<TPlace[][] | null>(hallPlaces || null);

  useEffect(() => {
    setSeatsData(hallPlaces);
  }, [hallPlaces]);

  const loadHall = useCallback(
    async (id: string, time: string) => {
      try {
        await dispatch(getHallPlaces({ id, time })).unwrap();
      } catch (error) {
        dispatch(setHallError(error instanceof Error ? error.message : 'Unknown error'));
      }
    },
    [dispatch]
  );
  const handleSeatPress = (lineIndex: number, seatIndex: number) => {
    if (!seatsData) return;

    const updatedData = JSON.parse(JSON.stringify(seatsData)) as TPlace[][];
    const seat = updatedData[lineIndex][seatIndex];

    if (seat.mode === 'free') {
      seat.mode = 'selected';
      dispatch(selectPlace('select'));
      dispatch(setBookingPlace({ place: seatIndex + 1, row: lineIndex }));
    } else if (seat.mode === 'selected') {
      seat.mode = 'free';
      dispatch(selectPlace('free'));
    }

    setSeatsData(updatedData);
  };
  const clearAllData = () => {
    dispatch(removeSelectedPlaces());
    dispatch(clearBookingPlace());
  };
  const handleBack = () => {
    router.back();
  };
  const handleEmptyBookingPress = () => {
    Alert.alert(
      'Бронирование места',
      'Сначала выберите места для бронирования',
      [
        {
          text: 'Понятно',
          style: 'default',
        },
      ],
      { cancelable: true }
    );
  };
  const handleBookingPress = ({ id, places }: { places: IBookingPlaces; id: string }) => {
    Alert.alert(
      'Бронирование места',
      'Вы уверены, что хотите забронировать это место?',
      [
        {
          text: 'Забронировать',
          style: 'default',
          onPress: async () => {
            try {
              const result = await dispatch(
                bookingPlace({
                  places: places,
                  id: id,
                })
              ).unwrap();
              if (result) {
                Alert.alert('Успешно!', 'Место успешно забронировано!', [
                  { text: 'OK', style: 'default' },
                ]);
                dispatch(removeSelectedPlaces());
                router.navigate('/(root)/(tabs)/home');
              } else {
                Alert.alert('Ошибка', 'Не удалось забронировать место. Попробуйте еще раз.', [
                  { text: 'OK', style: 'destructive' },
                ]);
              }
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
    bookingLoading: bookingLoading,
    bookingError: bookingError,
    handleEmptyBookingPress: handleEmptyBookingPress,
    loadHall: loadHall,
    bookingPlaces: bookingPlaces,
    clearAllData: clearAllData,
  };
};
