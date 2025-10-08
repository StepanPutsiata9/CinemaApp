import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useRegistrationValidation = () => {
  const [loginText, setLoginText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const [repitPasswordText, setRepitPasswordText] = useState<string>('');
  const [registError, setRegistError] = useState<string | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (registError) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }, [registError, fadeAnim]);

  const setLogin = (text: string) => {
    if (loginText.trim().length === 1) {
      setRegistError(null);
    }
    setLoginText(text);
  };
  const setPassword = (text: string) => {
    if (passwordText.trim().length === 1) {
      setRegistError(null);
    }
    setPasswordText(text);
  };
  const setRepitPassword = (text: string) => {
    if (repitPasswordText.trim().length === 1) {
      setRegistError(null);
    }
    setRepitPasswordText(text);
  };

  const checkErrorInputs = () => {
    if (
      loginText.trim().length === 0 ||
      passwordText.trim().length === 0 ||
      repitPasswordText.trim().length === 0
    ) {
      setRegistError('Все поля должны быть заполненными');
      setLoginText('');
      setPasswordText('');
      setRepitPasswordText('');
      return false;
    }
    if (loginText.trim().length < 8 || passwordText.trim().length < 8) {
      setRegistError('Логин и пароль должны состоять минимум из 8 символов');
      setLoginText('');
      setPasswordText('');
      setRepitPasswordText('');
      return false;
    }
    if (passwordText.trim() !== repitPasswordText.trim()) {
      setRegistError('Пароли должны совпадать');
      setLoginText('');
      setPasswordText('');
      setRepitPasswordText('');
      return false;
    }
    return true;
  };
  const handleRegistration = async () => {
    setRegistError(null);
    if (!checkErrorInputs()) {
      return;
    }
    console.log(2);
  };

  return {
    loginText,
    passwordText,
    registError,
    setRegistError,
    setLogin,
    setPassword,
    repitPasswordText,
    setRepitPassword,
    handleRegistration,
    fadeAnim,
  };
};
