import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IDateItem {
  colors: IColorsTheme;
  active: boolean;
}
export const DateItem = ({ colors, active }: IDateItem) => {
  const styles = useStyles(colors);
  return (
    <TouchableOpacity style={active ? styles.activeContainer : styles.inActiveContainer}>
      <Text style={active ? styles.weekActive : styles.weekInactive}>ПН</Text>
      <Text style={active ? styles.dayActive : styles.dayInactive}>28</Text>
      <Text style={active ? styles.monthActive : styles.monthInactive}>ОКТ</Text>
    </TouchableOpacity>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    activeContainer: {
      backgroundColor: colors.primary.start,
      width: 70,
      height: 90,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    weekInactive: {
      fontSize: 14,
      fontFamily: 'Montserrat',
      color: colors.text.title,
    },
    dayInactive: {
      fontSize: 20,
      fontFamily: 'MontserratBold',
      color: colors.primary.start,
    },
    monthInactive: {
      fontSize: 14,
      color: colors.text.title,
      fontFamily: 'Montserrat',
    },
    inActiveContainer: {
      backgroundColor: colors.secondaryBackground,
      width: 70,
      height: 90,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    weekActive: {
      fontSize: 14,
      fontFamily: 'Montserrat',
    },
    dayActive: {
      fontSize: 20,
      fontFamily: 'MontserratBold',
    },
    monthActive: {
      fontSize: 14,
      fontFamily: 'Montserrat',
    },
  });
}
