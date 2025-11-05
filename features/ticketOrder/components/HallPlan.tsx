import { IColorsTheme } from '@/features/theme';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface IHallPlanProps {
  colors: IColorsTheme;
}
type TLine = { id: number; mode: 'free' | 'selected' | 'taken' };

interface ILineViewProps {
  line: TLine[];
  colors: IColorsTheme;
}

const LineView = ({ line, colors }: ILineViewProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.line}>
      {line.map((el, index) => {
        return (
          <TouchableOpacity
            onPress={() => {}}
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
          ></TouchableOpacity>
        );
      })}
    </View>
  );
};

export const HallPlan = ({ colors }: IHallPlanProps) => {
  const styles = useStyles(colors);
  const data = [
    [
      { id: 1, mode: 'free' },
      { id: 2, mode: 'free' },
      { id: 3, mode: 'free' },
      { id: 4, mode: 'free' },
      { id: 5, mode: 'free' },
      { id: 6, mode: 'free' },
      { id: 7, mode: 'free' },
      { id: 8, mode: 'free' },
      { id: 9, mode: 'free' },
      { id: 10, mode: 'free' },
      { id: 11, mode: 'selected' },
    ],
    [
      { id: 1, mode: 'taken' },
      { id: 2, mode: 'free' },
      { id: 3, mode: 'free' },
      { id: 4, mode: 'free' },
      { id: 5, mode: 'free' },
      { id: 6, mode: 'taken' },
      { id: 7, mode: 'free' },
      { id: 8, mode: 'free' },
      { id: 9, mode: 'free' },
      { id: 10, mode: 'free' },
      { id: 11, mode: 'selected' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 15, mode: 'taken' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'taken' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'taken' },
      { id: 19, mode: 'taken' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
    ],
    [
      { id: 12, mode: 'taken' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'taken' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'taken' },
      { id: 18, mode: 'taken' },
      { id: 19, mode: 'taken' },
      { id: 20, mode: 'taken' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
    ],
    [
      { id: 12, mode: 'taken' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'taken' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'taken' },
      { id: 19, mode: 'taken' },
      { id: 20, mode: 'taken' },
      { id: 21, mode: 'taken' },
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 22, mode: 'selected' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 24, mode: 'selected' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
      { id: 23, mode: 'selected' },
    ],
    [
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'free' },
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'free' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
    ],
    [
      { id: 12, mode: 'free' },
      { id: 13, mode: 'free' },
      { id: 14, mode: 'taken' },
      { id: 15, mode: 'free' },
      { id: 16, mode: 'taken' },
      { id: 17, mode: 'taken' },
      { id: 18, mode: 'free' },
      { id: 19, mode: 'free' },
      { id: 20, mode: 'free' },
      { id: 21, mode: 'free' },
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
    ],
  ];

  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      contentContainerStyle={styles.wrapper}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.contentContainer}>
        {data.map((line, index) => {
          return <LineView line={line as TLine[]} key={index} colors={colors} />;
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
      gap: 10,
      alignItems: 'center',
    },
    line: {
      flexDirection: 'row',
      gap: 7,
      justifyContent: 'center',
    },
    placeItem: {
      width: 20,
      height: 20,
      borderRadius: 4,
    },
  });
}
