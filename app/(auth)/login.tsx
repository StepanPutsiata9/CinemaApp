import { AuthBanner, Header, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const router = useRouter();
  const [loginText, setLoginText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');

  // const { authError } = useSelector((state: RootState) => state.auth);
  const authError = false;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (authError) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }, [fadeAnim, authError]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView>
          <Header />
          <View style={styles.content}>
            <Text style={styles.greetText}>Добро пожаловать!</Text>
            <View style={styles.bannerView}>
              <AuthBanner />
            </View>
            <View style={styles.inputsContainer}>
              <TextInput
                value={loginText}
                placeholder="Логин"
                style={[styles.loginInput, authError && styles.errorInput]}
                onChangeText={setLoginText}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#9E9B9B"
              />
              <TextInput
                value={passwordText}
                placeholder="Пароль"
                style={[styles.passwordInput, authError && styles.errorInput]}
                onChangeText={setPasswordText}
                placeholderTextColor="#9E9B9B"
                secureTextEntry={true}
              />
            </View>
            {authError ? (
              <Animated.View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  opacity: fadeAnim,
                }}
              >
                <Text style={styles.errorText}>{'Ошибка'}</Text>
              </Animated.View>
            ) : null}
            <TouchableOpacity
              onPress={() => router.push('/(auth)/registration')}
              style={styles.touchOpacity}
            >
              <Text style={styles.noAccountText}>Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity>
            <PrimaryButton title="Войти" onPress={() => {}} colors={colors} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    keyboardAvoidingView: {
      flex: 1,
      paddingHorizontal: 16,
    },
    content: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    inputsContainer: {
      width: '100%',
    },
    greetText: {
      color: colors.text.title,
      fontSize: 24,
      fontFamily: 'Montserrat',
      marginBottom: 22,
    },
    bannerView: {
      marginBottom: 35,
    },
    loginInput: {
      height: 50,
      borderRadius: 18,
      paddingHorizontal: 17,
      marginBottom: 25,
      fontSize: 16,
      backgroundColor: '#242424',
      fontFamily: 'Montserrat',
      color: '#ffffff',
      width: '100%',
    },
    passwordInput: {
      height: 50,
      borderRadius: 18,
      paddingHorizontal: 17,
      marginBottom: 12,
      fontSize: 16,
      backgroundColor: '#242424',
      fontFamily: 'Montserrat',
      color: '#ffffff',
      width: '100%',
    },
    errorInput: {
      borderColor: '#FF1B44',
      borderWidth: 2,
    },
    touchOpacity: {
      marginBottom: 25,
    },
    noAccountText: {
      color: colors.primary.start,
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'Montesserat',
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
