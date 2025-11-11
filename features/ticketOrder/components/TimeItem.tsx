import { IColorsTheme } from '@/features/theme';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ITime } from '../types';
import { GradientProgressBar } from './ProgressBar';

interface ITimeItemProps {
  colors: IColorsTheme;
  item: ITime;
  id: number;
}
export const TimeItem = ({ colors, item, id }: ITimeItemProps) => {
  const styles = useStyles(colors);
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() =>
        router.push({
          pathname: '/(root)/(ticketOrder)/hall',
          params: { id: id, time: item.time, bookedPlaces: item.bookedPlaces },
        })
      }
    >
      <View style={styles.timeView}>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      <View style={styles.placesView}>
        <Text style={styles.placeCount}>{25 - item.bookedPlaces}</Text>
        <Text style={styles.placeText}>мест</Text>
      </View>
      <GradientProgressBar
        title={`${item.hall} зал`}
        colors={colors}
        progress={item.bookedPlaces === 0 ? 0 : item.bookedPlaces / 25}
      />
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
