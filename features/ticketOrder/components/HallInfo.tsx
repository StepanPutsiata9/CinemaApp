import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';

interface IHallInfoProps {
  colors: IColorsTheme;
  reservedPlaceCount: number;
  reservedPlaceCost: number;
}
export const HallInfo = ({ colors, reservedPlaceCount, reservedPlaceCost }: IHallInfoProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.line}>
          <Text style={styles.placeholder}>Всего выбрано: </Text>
          <Text style={styles.info}>{reservedPlaceCount}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.placeholder}>Стоимость: </Text>
          <Text style={styles.info}>{reservedPlaceCost} BYN</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.placeholder}>Время сеанса: </Text>
        <Text style={styles.info}>22:00</Text>
      </View>
    </View>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      borderTopWidth: 2,
      borderTopColor: colors.secondaryBackground,
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 32,
      paddingHorizontal: 16,
    },
    leftSide: {
      flexDirection: 'column',
      gap: 6,
    },
    rightSide: {
      flexDirection: 'column',
      gap: 6,
    },
    line: {
      flexDirection: 'row',
    },
    placeholder: {
      color: colors.text.title,
      fontSize: 16,
      fontFamily: 'Montserrat',
    },
    info: {
      color: colors.primary.finish,
      fontSize: 16,
      fontFamily: 'MontserratBold',
    },
  });
}
