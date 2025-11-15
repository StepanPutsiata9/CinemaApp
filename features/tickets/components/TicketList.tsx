import { IColorsTheme } from '@/features/theme';
import { ScrollView, StyleSheet } from 'react-native';

interface ITicketListProps {
  colors: IColorsTheme;
}
export const TicketList = ({ colors }: ITicketListProps) => {
  const styles = useStyles(colors);
  return <ScrollView style={styles.container}></ScrollView>;
};
function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {},
  });
}
