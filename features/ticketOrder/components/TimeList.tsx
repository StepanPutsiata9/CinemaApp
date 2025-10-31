import { IColorsTheme } from '@/features/theme';
import { StyleSheet, View } from 'react-native';
import { ITime } from '../types';
import { TimeItem } from './TimeItem';

interface ITimeListProps {
  colors: IColorsTheme;
  timesList: ITime[];
}

export const TimeList = ({ colors, timesList }: ITimeListProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      {timesList.map((el, index) => {
        return <TimeItem item={el} key={index} colors={colors} />;
      })}
    </View>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 16,
    },
  });
}
