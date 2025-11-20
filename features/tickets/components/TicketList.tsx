import { IColorsTheme } from '@/features/theme';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTicketsList } from '../hooks';
import { TicketItem } from './TicketItem';
interface ITicketListProps {
  colors: IColorsTheme;
}

export const TicketList = ({ colors }: ITicketListProps) => {
  const styles = useStyles();
  const { ticketsList } = useTicketsList();

  const EmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>🎫</Text>
      <Text style={styles.emptyText}>Билетов пока нет</Text>
      <Text style={styles.emptySubtext}>
        Здесь будут отображаться ваши билеты после бронирования
      </Text>
    </View>
  );

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <FlatList
          data={ticketsList}
          renderItem={({ item }) => <TicketItem ticket={item} colors={colors} />}
          keyExtractor={(item, index) => item.id?.toString() || index.toString()}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            ticketsList?.length === 0 ? styles.emptyContent : styles.scrollContent
          }
          ListEmptyComponent={EmptyList}
        />
      </View>
    </GestureHandlerRootView>
  );
};

function useStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
    },
    emptyContent: {
      flexGrow: 1,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
    },
    emptyIcon: {
      fontSize: 64,
      marginBottom: 16,
    },
    emptyText: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 8,
      color: '#666',
    },
    emptySubtext: {
      fontSize: 14,
      textAlign: 'center',
      color: '#999',
      lineHeight: 20,
    },
  });
}
