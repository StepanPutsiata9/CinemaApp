import { useAuth, useRegistrationValidation } from '@/features/auth';
import { Header, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegistrationScreen() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const router = useRouter();
  const [loginText, setLoginText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const [repeatPasswordText, setRepeatPasswordText] = useState<string>('');

  const { authError, fadeAnim, clearError } = useRegistrationValidation();
  const { handleRegistration } = useAuth();

  const handleInputChange = () => {
    if (authError) {
      clearError();
    }
  };

  const handleRegisterPress = () => {
    handleRegistration(loginText, passwordText, repeatPasswordText);
  };

  const navigateToLogin = () => {
    router.push('/(auth)/login');
    clearError();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        bottomOffset={65}
      >
        <View style={styles.headerContainer}>
          <Header />
        </View>

        <View style={styles.content}>
          <Text style={styles.greetText}>Создайте аккаунт!</Text>

          <View style={styles.bannerContainer}>
            <LottieView
              source={require('@/assets/animations/Registration.json')}
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
                placeholderTextColor="#9E9B9B"
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
                placeholderTextColor="#9E9B9B"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />

              <TextInput
                value={repeatPasswordText}
                placeholder="Повторите пароль"
                style={[
                  styles.textInput,
                  styles.repeatPasswordInput,
                  authError && styles.errorInput,
                ]}
                onChangeText={(text: string) => {
                  setRepeatPasswordText(text);
                  handleInputChange();
                }}
                placeholderTextColor="#9E9B9B"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleRegisterPress}
              />
            </View>

            {authError && (
              <Animated.View style={[styles.errorContainer, { opacity: fadeAnim }]}>
                <Text style={styles.errorText}>{authError}</Text>
              </Animated.View>
            )}

            <TouchableOpacity onPress={navigateToLogin} style={styles.loginLink}>
              <Text style={styles.loginText}>Есть аккаунт? Войти</Text>
            </TouchableOpacity>

            <PrimaryButton
              title="Зарегистрироваться"
              onPress={handleRegisterPress}
              colors={colors}
            />
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
      paddingHorizontal: 16,
    },
    scrollContent: {
      flexGrow: 1,
    },
    headerContainer: {
      width: '100%',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
    },
    formContainer: {
      width: '100%',
      alignItems: 'center',
    },
    greetText: {
      color: colors.text.title,
      fontSize: 24,
      fontFamily: 'Montserrat',
      marginBottom: 22,
      textAlign: 'center',
    },
    bannerContainer: {
      marginBottom: 35,
      alignItems: 'center',
    },
    animation: {
      width: 250,
      height: 250,
    },
    inputsContainer: {
      width: '100%',
    },
    textInput: {
      height: 50,
      borderRadius: 18,
      paddingHorizontal: 17,
      fontSize: 16,
      backgroundColor: '#242424',
      fontFamily: 'Montserrat',
      color: '#ffffff',
      width: '100%',
    },
    loginInput: {
      marginBottom: 25,
    },
    passwordInput: {
      marginBottom: 25,
    },
    repeatPasswordInput: {
      marginBottom: 12,
    },
    errorInput: {
      borderColor: '#FF1B44',
      borderWidth: 2,
    },
    errorContainer: {
      width: '100%',
      alignSelf: 'flex-start',
      marginBottom: 8,
    },
    loginLink: {
      marginBottom: 25,
      paddingVertical: 8,
    },
    loginText: {
      color: colors.primary.start,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'Montserrat',
      textDecorationLine: 'underline',
    },
    errorText: {
      color: '#FF1B44',
      fontSize: 14,
      textAlign: 'left',
      marginBottom: 5,
      paddingVertical: 3,
      fontFamily: 'Montserrat',
      width: '100%',
    },
  });
}
