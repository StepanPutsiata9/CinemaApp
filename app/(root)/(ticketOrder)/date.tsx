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
          <View style={styles.titleView}>
            <Text style={styles.title}>Выбор даты</Text>
            <AntDesign
              name="close"
              size={24}
              color={colors.primary.start}
              onPress={() => router.back()}
            />
          </View>
          <DateList colors={colors} dateList={dateList || []} />
          <TimeList colors={colors} timesList={pickedDate?.time || []} />
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
      paddingHorizontal: 16,
    },
  });
}
export default DateScreen;
