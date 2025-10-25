import { IColorsTheme, useTheme } from '@/features/theme';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DateScreen = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Date Picker Screen</Text>
    </SafeAreaView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    title: {
      textAlign: 'center',
      fontSize: 16,
      color: colors.text.title,
    },
  });
}
export default DateScreen;
