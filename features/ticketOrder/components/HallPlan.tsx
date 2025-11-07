import { IColorsTheme } from '@/features/theme';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useHall } from '../hooks';
import { TLine } from '../types';

interface IHallPlanProps {
  colors: IColorsTheme;
}

interface ILineViewProps {
  line: TLine[];
  colors: IColorsTheme;
  onSeatPress: (lineIndex: number, seatIndex: number) => void;
  lineIndex: number;
}

const LineView = ({ line, colors, onSeatPress, lineIndex }: ILineViewProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.line}>
      {line.map((el, index) => {
        return (
          <TouchableOpacity
            hitSlop={{ top: 3, bottom: 3, left: 3, right: 3 }}
            onPress={() => onSeatPress(lineIndex, index)}
            style={[
              styles.placeItem,
              {
                backgroundColor:
                  el.mode === 'free'
                    ? colors.text.title
                    : el.mode === 'selected'
                      ? colors.primary.finish
                      : colors.takedPlace,
              },
            ]}
            key={index}
          />
        );
      })}
    </View>
  );
};

export const HallPlan = ({ colors }: IHallPlanProps) => {
  const styles = useStyles(colors);
  const { seatsData, handleSeatPress } = useHall();

  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      contentContainerStyle={styles.wrapper}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.contentContainer}>
        {seatsData.map((line, index) => {
          return (
            <LineView
              line={line}
              key={index}
              colors={colors}
              onSeatPress={handleSeatPress}
              lineIndex={index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    scrollView: {
      marginBottom: 30,
      paddingHorizontal: 16,
      flex: 1,
    },
    wrapper: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 12,
      alignItems: 'center',
    },
    line: {
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'center',
    },
    placeItem: {
      width: 20,
      height: 20,
      borderRadius: 4,
    },
  });
}
