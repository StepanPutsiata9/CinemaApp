import { GreetingBanner, GreetingLogo, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GrettingScreen() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerView}>
        <GreetingBanner />
      </View>
      <View style={styles.logoView}>
        <GreetingLogo />
      </View>
      <View style={styles.textView}>
        <Text style={styles.bannerText}>{`Окунитесь в магию\nбольшого экрана!`}</Text>
      </View>
      <PrimaryButton title="Начать" onPress={() => router.push('/(auth)/login')} />
    </SafeAreaView>
  );
}

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      paddingTop: 40,
    },
    bannerText: {
      color: colors.text.title,
      fontSize: 24,
      fontFamily: 'MontserratBold',
      textAlign: 'center',
    },
    logoView: {
      marginBottom: 20,
    },
    textView: {
      marginBottom: 60,
    },
    bannerView: {
      marginBottom: 40,
    },
  });
}
