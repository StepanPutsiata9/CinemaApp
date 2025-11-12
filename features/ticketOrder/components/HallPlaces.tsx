import { IColorsTheme } from '@/features/theme';
import { StyleSheet, View } from 'react-native';
import { HallPlan } from './HallPlan';
import { PlacesInfo } from './PlacesInfo';

interface IHallPlacesProps {
  colors: IColorsTheme;
}
export const HallPlaces = ({ colors }: IHallPlacesProps) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HallPlan colors={colors} />
      <PlacesInfo colors={colors} />
    </View>
  );
};
function useStyles() {
  return StyleSheet.create({
    container: {
      marginBottom: 20,
    },
  });
}
