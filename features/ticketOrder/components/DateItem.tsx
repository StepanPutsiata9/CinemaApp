import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IDateItemProps {
  colors: IColorsTheme;
  active: boolean;
  onPress: () => void;
  item: { date: string; month: string; day: string; index: number };
}
export const DateItem = ({ colors, active, onPress, item }: IDateItemProps) => {
  const styles = useStyles(colors);
  return (
    <TouchableOpacity
      style={active ? styles.activeContainer : styles.inActiveContainer}
      onPress={onPress}
    >
      <Text style={active ? styles.weekActive : styles.weekInactive}>{item.day}</Text>
      <Text style={active ? styles.dayActive : styles.dayInactive}>{item.date}</Text>
      <Text style={active ? styles.monthActive : styles.monthInactive}>{item.month}</Text>
    </TouchableOpacity>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    activeContainer: {
      backgroundColor: colors.primary.start,
      width: 85,
      height: 100,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    weekInactive: {
      fontSize: 18,
      fontFamily: 'Montserrat',
      color: colors.text.title,
    },
    dayInactive: {
      fontSize: 26,
      fontFamily: 'MontserratBold',
      color: colors.primary.start,
    },
    monthInactive: {
      fontSize: 18,
      color: colors.text.title,
      fontFamily: 'Montserrat',
    },
    inActiveContainer: {
      backgroundColor: colors.secondaryBackground,
      width: 85,
      height: 100,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    weekActive: {
      fontSize: 18,
      fontFamily: 'Montserrat',
    },
    dayActive: {
      fontSize: 26,
      fontFamily: 'MontserratBold',
    },
    monthActive: {
      fontSize: 18,
      fontFamily: 'Montserrat',
    },
  });
}
