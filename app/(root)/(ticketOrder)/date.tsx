import { ErrorContainer, LoadingContainer } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { DateList, TimeList, useDateList } from '@/features/ticketOrder';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const DateScreen = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const numericMovieId = Number(id);
  const { loadDateList, dateError, dateLoading, timesList, calendarList } = useDateList();
  useEffect(() => {
    loadDateList(numericMovieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data1 = [
    { date: '28', month: 'ОКТ', day: 'ПН', index: 0 },
    { date: '18', month: 'НОЯ', day: 'СР', index: 1 },
    { date: '28', month: 'ДЕК', day: 'ВТ', index: 2 },
    { date: '29', month: 'ДЕК', day: 'ВТ', index: 3 },
    { date: '30', month: 'ДЕК', day: 'ВТ', index: 4 },
  ];
  const data2 = [
    {
      time: '13:00',
      placeCount: 32,
      progress: 0.2,
      hallNumber: 3,
    },
    {
      time: '13:00',
      placeCount: 32,
      progress: 0.2,
      hallNumber: 3,
    },
    {
      time: '15:00',
      placeCount: 12,
      progress: 0.2,
      hallNumber: 3,
    },
    {
      time: '14:30',
      placeCount: 12,
      progress: 0.6,
      hallNumber: 1,
    },
    {
      time: '20:00',
      placeCount: 22,
      progress: 0.9,
      hallNumber: 2,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {dateLoading && <LoadingContainer colors={colors} />}
      {dateError && <ErrorContainer error={'error'} colors={colors} />}
      {!dateError && !dateLoading && (
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Выбор даты</Text>
            <AntDesign
              name="close"
              size={24}
              color={colors.primary.start}
              onPress={() => router.back()}
            />
          </View>
          <DateList colors={colors} dateList={data1} />
          <TimeList colors={colors} timesList={data2} />
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
      paddingHorizontal: 16,
    },
    title: {
      fontFamily: 'MontserratBold',
      color: colors.primary.start,
      fontSize: 24,
    },
    scrollContent: {},
    titleView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
  });
}
export default DateScreen;
