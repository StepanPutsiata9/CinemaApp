import { useAuth, useAuthValidation } from '@/features/auth';
import { Header, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const router = useRouter();
  const [loginText, setLoginText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');

  const { authError, fadeAnim, clearError } = useAuthValidation();
  const { handleLogin } = useAuth();

  const handleInputChange = () => {
    if (authError) {
      clearError();
    }
  };

  const handleLoginPress = () => {
    handleLogin(loginText, passwordText);
  };

  const navigateToRegistration = () => {
    router.push('/(auth)/registration');
    clearError();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        bottomOffset={65}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Header />
        </View>

        <View style={styles.content}>
          <Text style={styles.greetText}>Добро пожаловать!</Text>

          <View style={styles.bannerContainer}>
            <LottieView
              source={require('@/assets/animations/Auth.json')}
              autoPlay
              loop
              style={styles.animation}
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputsContainer}>
              <TextInput
                value={loginText}
                placeholder="Логин"
                style={[styles.textInput, styles.loginInput, authError && styles.errorInput]}
                onChangeText={(text: string) => {
                  setLoginText(text);
                  handleInputChange();
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={'#9E9B9B'}
                returnKeyType="next"
              />

              <TextInput
                value={passwordText}
                placeholder="Пароль"
                style={[styles.textInput, styles.passwordInput, authError && styles.errorInput]}
                onChangeText={(text: string) => {
                  setPasswordText(text);
                  handleInputChange();
                }}
                placeholderTextColor={'#9E9B9B'}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleLoginPress}
              />
            </View>

            {authError && (
              <Animated.View style={[styles.errorContainer, { opacity: fadeAnim }]}>
                <Text style={styles.errorText}>{authError}</Text>
              </Animated.View>
            )}

            <TouchableOpacity onPress={navigateToRegistration} style={styles.registrationLink}>
              <Text style={styles.registrationText}>Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity>

            <View>
              <PrimaryButton title="Войти" onPress={handleLoginPress} colors={colors} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
    },
    headerContainer: {
      paddingHorizontal: 16,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      alignItems: 'center',
    },
    formContainer: {
      width: '100%',
      alignItems: 'center',
    },
    greetText: {
      color: colors.text.title,
      fontSize: 24,
      fontFamily: 'Montserrat',
      textAlign: 'center',
      marginTop: 8,
      marginBottom: 16,
    },
    bannerContainer: {
      alignItems: 'center',
      marginBottom: 32,
    },
    animation: {
      width: 300,
      height: 300,
    },
    inputsContainer: {
      width: '100%',
      marginBottom: 8,
    },
    textInput: {
      height: 56,
      borderRadius: 16,
      paddingHorizontal: 20,
      fontSize: 16,
      backgroundColor: colors.secondaryBackground,
      fontFamily: 'Montserrat',
      color: colors.text.title,
      borderWidth: 1,
      borderColor: 'transparent',
    },
    loginInput: {
      marginBottom: 16,
    },
    passwordInput: {
      marginBottom: 0,
    },
    errorInput: {
      borderColor: '#FF1B44',
      borderWidth: 1,
    },
    errorContainer: {
      width: '100%',
      alignSelf: 'flex-start',
      marginBottom: 8,
    },
    errorText: {
      color: '#FF1B44',
      fontSize: 14,
      fontFamily: 'Montserrat',
      textAlign: 'left',
    },
    registrationLink: {
      marginBottom: 24,
      paddingVertical: 8,
    },
    registrationText: {
      color: colors.primary.start,
      fontSize: 14,
      fontFamily: 'Montserrat-Regular',
      textDecorationLine: 'underline',
    },
  });
}
