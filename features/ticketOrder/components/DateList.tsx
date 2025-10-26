import { IColorsTheme } from '@/features/theme';
import { ScrollView, StyleSheet } from 'react-native';
import { DateItem } from './DateItem';

interface IDateList {
  colors: IColorsTheme;
}
export const DateList = ({ colors }: IDateList) => {
  const styles = useStyles(colors);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.dateScrollView}
    >
      <DateItem colors={colors} active={true} />
      <DateItem colors={colors} active={false} />
      <DateItem colors={colors} active={false} />
      <DateItem colors={colors} active={false} />
      <DateItem colors={colors} active={false} />
      <DateItem colors={colors} active={false} />
    </ScrollView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    dateScrollView: {
      gap: 12,
    },
  });
}
