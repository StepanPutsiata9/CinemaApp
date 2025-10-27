import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GradientProgressBar } from './ProgressBar';

interface ITimeItemProps {
  colors: IColorsTheme;
}
export const TimeItem = ({ colors }: ITimeItemProps) => {
  const styles = useStyles(colors);
  return (
    <TouchableOpacity style={styles.itemCard}>
      <View style={styles.timeView}>
        <Text style={styles.timeText}>15:00</Text>
      </View>
      <View style={styles.placesView}>
        <Text style={styles.placeCount}>25</Text>
        <Text style={styles.placeText}>мест</Text>
      </View>
      <GradientProgressBar title={'1 зал'} colors={colors} progress={0.6} />
    </TouchableOpacity>
  );
};
function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    itemCard: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 20,
      width: '48%',
      height: 145,
      alignItems: 'center',
      flexDirection: 'column',
      paddingVertical: 12,
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    timeView: {
      borderBottomWidth: 1,
      borderBottomColor: '#4e4e4e',
      width: 105,
      alignItems: 'center',
      marginBottom: 5,
    },
    timeText: {
      fontSize: 32,
      fontFamily: 'MontserratBold',
      color: colors.primary.start,
    },
    placesView: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    placeCount: {
      fontSize: 18,
      fontFamily: 'Montserrat',
      color: colors.primary.start,
      marginRight: 5,
    },
    placeText: {
      fontSize: 18,
      fontFamily: 'Montserrat',
      color: colors.text.title,
    },
  });
}
