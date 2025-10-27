import { IColorsTheme } from '@/features/theme';
import { Key, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { DateItem } from './DateItem';

interface IDateListProps {
  colors: IColorsTheme;
}
export const DateList = ({ colors }: IDateListProps) => {
  const styles = useStyles(colors);
  const data = [
    { date: '28', month: 'ОКТ', day: 'ПН', index: 0 },
    { date: '18', month: 'НОЯ', day: 'СР', index: 1 },
    { date: '28', month: 'ДЕК', day: 'ВТ', index: 2 },
    { date: '29', month: 'ДЕК', day: 'ВТ', index: 3 },
    { date: '30', month: 'ДЕК', day: 'ВТ', index: 4 },
  ];
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
    >
      {data.map((c: { date: string; month: string; day: string; index: number }, index: Key) => {
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
      })}
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
