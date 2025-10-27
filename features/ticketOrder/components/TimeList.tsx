import { IColorsTheme } from '@/features/theme';
import { StyleSheet, View } from 'react-native';
import { TimeItem } from './TimeItem';

interface ITimeListProps {
  colors: IColorsTheme;
}

export const TimeList = ({ colors }: ITimeListProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
      <TimeItem colors={colors} />
    </View>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
}
