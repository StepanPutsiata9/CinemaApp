import { IColorsTheme } from '@/features/theme';
import { Key } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDateList } from '../hooks';
import { ITimeItem } from '../types';
import { DateItem } from './DateItem';

interface IDateListProps {
  colors: IColorsTheme;
  dateList: ITimeItem[];
}
export const DateList = ({ colors, dateList }: IDateListProps) => {
  const styles = useStyles();
  const { selectedCategory, handleCategoryPress } = useDateList();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.dateScrollView}
      style={styles.container}
    >
      {dateList.map((c: ITimeItem, index: Key) => {
        const isSelected = selectedCategory === c.id;
        return (
          <DateItem
            colors={colors}
            active={isSelected}
            key={index}
            onPress={() => handleCategoryPress(c.id)}
            item={c}
          />
        );
      })}
    </ScrollView>
  );
};

function useStyles() {
  return StyleSheet.create({
    dateScrollView: {
      gap: 12,
    },
    container: {
      marginBottom: 30,
      paddingHorizontal: 16,
    },
  });
}
