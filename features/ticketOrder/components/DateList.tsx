import { IColorsTheme } from '@/features/theme';
import { Key, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { IDateItem } from '../types';
import { DateItem } from './DateItem';

interface IDateListProps {
  colors: IColorsTheme;
  dateList: IDateItem[];
}
export const DateList = ({ colors, dateList }: IDateListProps) => {
  const styles = useStyles(colors);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
  const handleCategoryPress = (index: number) => {
    const newSelectedCategory = index;
    setSelectedCategory(newSelectedCategory);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.dateScrollView}
      style={styles.container}
    >
      {dateList.map(
        (c: { date: string; month: string; day: string; index: number }, index: Key) => {
          const isSelected = selectedCategory === c.index;
          return (
            <DateItem
              colors={colors}
              active={isSelected}
              key={index}
              onPress={() => handleCategoryPress(c.index)}
              item={c}
            />
          );
        }
      )}
    </ScrollView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    dateScrollView: {
      gap: 12,
    },
    container: {
      marginBottom: 30,
    },
  });
}
