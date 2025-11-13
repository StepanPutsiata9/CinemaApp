import { ErrorContainer, LoadingContainer } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TicketsTab() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      {false && <LoadingContainer colors={colors} />}
      {false && <ErrorContainer error={'ticketsError'} colors={colors} />}
      {true && true && (
        <View>
          <Text> Tickets</Text>
        </View>
      )}
      <Text style={styles.title}>Билеты</Text>
    </SafeAreaView>
  );
}
function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    title: {
      fontFamily: 'MontserratBold',
      color: colors.primary.start,
      fontSize: 24,
      marginBottom: 20,
      paddingHorizontal: 16,
    },
  });
}
