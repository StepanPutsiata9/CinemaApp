import { useAppDispatch, useAppSelector } from '@/store/hooks';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { setAuthError } from '../store/auth.slice';

export const useAuthValidation = () => {
  const [loginText, setLoginText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const { authError } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const setNullInputs = () => {
    setLoginText('');
    setPasswordText('');
  };

  const setLogin = (text: string) => {
    if (text.length === 1) {
      dispatch(setAuthError(null));
    }
    setLoginText(text);
  };
  const setPassword = (text: string) => {
    if (text.length === 1) {
      dispatch(setAuthError(null));
    }
    setPasswordText(text);
  };

  const checkErrorInputs = () => {
    if (loginText.trim().length === 0 || passwordText.trim().length === 0) {
      dispatch(setAuthError('Все поля должны быть заполненными'));
      setNullInputs();
      return false;
    }
    if (loginText.trim().length < 8 || passwordText.trim().length < 8) {
      dispatch(setAuthError('Логин и пароль должны состоять минимум из 8 символов'));
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

  const checkError = (err: unknown) => {
    // eslint-disable-next-line import/no-named-as-default-member
    if (axios.isAxiosError(err)) {
      dispatch(
        setAuthError(err.response?.data?.message || err.message || 'Произошла ошибка при входе')
      );
    } else if (err instanceof Error) {
      dispatch(setAuthError(err.message || 'Произошла ошибка при входе'));
    } else {
      dispatch(setAuthError('Произошла неизвестная ошибка при входе'));
    }
  };

  const setNullError = () => dispatch(setAuthError(null));
  return {
    loginText,
    passwordText,
    authError,
    setAuthError,
    setLogin,
    setPassword,
    checkErrorInputs,
    fadeAnim,
    setNullInputs,
    checkError,
    setNullError,
  };
};
