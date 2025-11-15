import { LogoutButton } from '@/features/auth';
import { IColorsTheme, SwitchThemeButton, useTheme } from '@/features/theme';
import { TicketItem } from '@/features/tickets';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsTab() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Настройки</Text>
      <SwitchThemeButton colors={colors} />
      <LogoutButton colors={colors} />
      <TicketItem
        ticket={{
          movieTitle: 'Дюна: Часть вторая',
          date: '15 ноября, сб',
          time: '19:30',
          hall: 'IMAX 3D',
          row: 7,
          seat: 14,
        }}
      />
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
    title: {
      fontFamily: 'MontserratBold',
      color: colors.primary.start,
      fontSize: 24,
      marginBottom: 20,
    },
  });
}
