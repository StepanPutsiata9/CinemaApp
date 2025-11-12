import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';

interface IplacesInfoProps {
  colors: IColorsTheme;
}
export const PlacesInfo = ({ colors }: IplacesInfoProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.placesInfo}>
      <View style={styles.placeInfo}>
        <View style={styles.free}></View>
        <Text style={styles.infoText}>Свободно</Text>
      </View>
      <View style={styles.placeInfo}>
        <View style={styles.taken}></View>
        <Text style={styles.infoText}>Занято</Text>
      </View>
      <View style={styles.placeInfo}>
        <View style={styles.selected}></View>
        <Text style={styles.infoText}>Выбрано</Text>
      </View>
    </View>
  );
};
function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    placesInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    placeInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    infoText: {
      color: colors.text.title,
      fontSize: 14,
      fontFamily: 'Montserrat',
    },
    free: {
      borderRadius: 5,
      width: 20,
      height: 20,
      backgroundColor: colors.text.title,
    },
    taken: {
      borderRadius: 5,
      width: 20,
      height: 20,
      backgroundColor: colors.takedPlace,
    },
    selected: {
      borderRadius: 5,
      width: 20,
      height: 20,
      backgroundColor: colors.primary.start,
    },
  });
}
