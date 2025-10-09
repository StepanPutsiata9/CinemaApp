import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { setAuthError } from '../store/auth.slice';

export const useRegistrationValidation = () => {
  const [loginText, setLoginText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const [repitPasswordText, setRepitPasswordText] = useState<string>('');
  const { authError } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
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
  }, [authError, fadeAnim]);

  const setNullInputs = () => {
    setLoginText('');
    setPasswordText('');
    setRepitPasswordText('');
  };
  const setLogin = (text: string) => {
    if (loginText.trim().length === 1) {
      dispatch(setAuthError(null));
    }
    setLoginText(text);
  };
  const setPassword = (text: string) => {
    if (passwordText.trim().length === 1) {
      dispatch(setAuthError(null));
    }
    setPasswordText(text);
  };
  const setRepitPassword = (text: string) => {
    if (repitPasswordText.trim().length === 1) {
      dispatch(setAuthError(null));
    }
    setRepitPasswordText(text);
  };

  const checkErrorInputs = () => {
    if (
      loginText.trim().length === 0 ||
      passwordText.trim().length === 0 ||
      repitPasswordText.trim().length === 0
    ) {
      dispatch(setAuthError('Все поля должны быть заполненными'));
      setNullInputs();
      return false;
    }
    if (loginText.trim().length < 8 || passwordText.trim().length < 8) {
      dispatch(setAuthError('Логин и пароль должны состоять минимум из 8 символов'));
      setNullInputs();
      return false;
    }
    if (passwordText.trim() !== repitPasswordText.trim()) {
      dispatch(setAuthError('Пароли должны совпадать'));
      setNullInputs();
      return false;
    }
    return true;
  };
  const handleRegistration = async () => {
    dispatch(setAuthError(null));

    if (!checkErrorInputs()) {
      return;
    }
    console.log(2);
  };
  const setNullError = () => dispatch(setAuthError(null));
  return {
    loginText,
    passwordText,
    authError,
    setLogin,
    setPassword,
    repitPasswordText,
    setRepitPassword,
    handleRegistration,
    fadeAnim,
    setNullInputs,
    setNullError,
    checkErrorInputs,
  };
};
