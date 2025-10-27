import { ErrorContainer, LoadingContainer } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { DateList, TimeList } from '@/features/ticketOrder';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const DateScreen = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {false && <LoadingContainer colors={colors} />}
      {false && <ErrorContainer error={'error'} colors={colors} />}
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
        <DateList colors={colors} />
        <TimeList colors={colors} />
      </ScrollView>
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
