import { IColorsTheme } from '@/features/theme';
import { ScrollView, StyleSheet, View } from 'react-native';

interface IHallPlanProps {
  colors: IColorsTheme;
}
type TLine = { id: number; mode: string };

interface ILineViewProps {
  line: TLine[];
}

const LineView = ({ line }: ILineViewProps) => {
  return (
    <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center' }}>
      {line.map((el, index) => {
        return (
          <View
            style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 4 }}
            key={index}
          >
            {/* <Text>{el.mode}</Text> */}
          </View>
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
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
      { id: 25, mode: 'selected' },
      { id: 26, mode: 'selected' },
      { id: 27, mode: 'selected' },
      { id: 28, mode: 'selected' },
      { id: 29, mode: 'selected' },
    ],
    [
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
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
      { id: 25, mode: 'selected' },
      { id: 26, mode: 'selected' },
      { id: 27, mode: 'selected' },
      { id: 28, mode: 'selected' },
      { id: 29, mode: 'selected' },
    ],
    [
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
      { id: 22, mode: 'selected' },
      { id: 23, mode: 'selected' },
      { id: 24, mode: 'selected' },
      { id: 25, mode: 'selected' },
      { id: 26, mode: 'selected' },
      { id: 27, mode: 'selected' },
      { id: 28, mode: 'selected' },
      { id: 29, mode: 'selected' },
    ],
  ];

  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      contentContainerStyle={styles.wrapper}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((line, index) => {
        return <LineView line={line} key={index} />;
      })}
    </ScrollView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    scrollView: {
      marginHorizontal: 'auto',
    },
    wrapper: {
      flexDirection: 'column',
      gap: 10,
    },
  });
}
