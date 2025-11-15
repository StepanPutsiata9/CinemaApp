import { ErrorContainer, LoadingContainer } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { TicketItem } from '@/features/tickets';
import { useTicketsList } from '@/features/tickets/hooks';
import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TicketsTab() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const { ticketsError, ticketsLoading, loadTicketsList } = useTicketsList();
  useEffect(() => {
    loadTicketsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Билеты</Text>
      {ticketsLoading && <LoadingContainer colors={colors} />}
      {ticketsError && <ErrorContainer error={'ticketsError'} colors={colors} />}
      {!ticketsError && !ticketsLoading && (
        // <View>
        //   <Text>Tickets</Text>
        // </View>
        <TicketItem
          ticket={{
            movieTitle: 'Дюна: Часть вторая',
            date: '15 ноября, сб',
            time: '19:30',
            hall: 'IMAX 3D',
            row: 7,
            seat: 14,
          }}
        />
      )}
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
