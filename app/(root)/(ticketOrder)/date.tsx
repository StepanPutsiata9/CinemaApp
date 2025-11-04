import { ErrorContainer, LoadingContainer } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { DateList, OrderHeader, TimeList, useDateList } from '@/features/ticketOrder';

import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const DateScreen = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const { id } = useLocalSearchParams();
  const numericMovieId = Number(id);
  const { loadDateList, dateError, dateLoading, dateList, pickedDate } = useDateList();
  useEffect(() => {
    loadDateList(numericMovieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {dateLoading && <LoadingContainer colors={colors} />}
      {dateError && <ErrorContainer error={'error'} colors={colors} />}
      {!dateError && !dateLoading && (
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <OrderHeader colors={colors} title="Выбор даты" />
          {dateList?.length === 0 ? (
            <ErrorContainer error="На данный момент свободных билетов нет!" colors={colors} />
          ) : (
            <>
              <DateList colors={colors} dateList={dateList || []} />
              <TimeList colors={colors} timesList={pickedDate?.time || []} />
            </>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
    },
  });
}
export default DateScreen;
