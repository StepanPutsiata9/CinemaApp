import { IColorsTheme, useTheme } from '@/features/theme';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsTab() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings Tab</Text>
    </SafeAreaView>
  );
}
function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    text: {
      fontFamily: 'Montserrat',
      color: colors.text.title,
      textAlign: 'center',
    },
  });
}
