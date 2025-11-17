import { IColorsTheme } from '@/features/theme';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTicketsList } from '../hooks';
import { TicketItem } from './TicketItem';

interface ITicketListProps {
  colors: IColorsTheme;
}

export const TicketList = ({ colors }: ITicketListProps) => {
  const styles = useStyles();
  const { ticketsList } = useTicketsList();

  return (
    <View style={styles.container}>
      <FlatList
        data={ticketsList}
        renderItem={({ item }) => <TicketItem ticket={item} colors={colors} />}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      />
    </View>
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
  });
}
