import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useAuthValidation = () => {
  const [loginText, setLoginText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);
  const setNullInputs = () => {
    setLoginText('');
    setPasswordText('');
  };
  const handleLogin = async () => {
    if (!checkErrorInputs()) {
      return;
    }
    console.log('1');
  };

  const setLogin = (text: string) => {
    if (text.length === 1) {
      setAuthError(null);
    }
    setLoginText(text);
  };
  const setPassword = (text: string) => {
    if (text.length === 1) {
      setAuthError(null);
    }
    setPasswordText(text);
  };

  const checkErrorInputs = () => {
    if (loginText.trim().length === 0 || passwordText.trim().length === 0) {
      setAuthError('Все поля должны быть заполненными');
      setNullInputs();
      return false;
    }
    if (loginText.trim().length < 8 || passwordText.trim().length < 8) {
      setAuthError('Логин и пароль должны состоять минимум из 8 символов');
      setNullInputs();
      return false;
    }
    return true;
  };

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
  return {
    loginText,
    passwordText,
    authError,
    setAuthError,
    setLogin,
    setPassword,
    handleLogin,
    fadeAnim,
  };
};
