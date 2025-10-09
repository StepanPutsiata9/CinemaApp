import { useAppDispatch, useAppSelector } from '@/store/hooks';
import api from '../services/authApi';
import { login, setAuthError, setLoading } from '../store/auth.slice';
import { useAuthValidation } from './useAuthValidation';
import { useRegistrationValidation } from './useRegistrationValidation';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const {
    checkErrorInputs: checkErrorAuthInputs,
    loginText,
    passwordText,
    setNullInputs: setNullAuthError,
    checkError: checkAuthError,
  } = useAuthValidation();
  const { checkErrorInputs: checkErrorRegistInputs, setNullInputs: setNullRegistInputs } =
    useRegistrationValidation();
  const handleLogin = async () => {
    dispatch(setLoading(true));
    dispatch(setAuthError(null));
    if (!checkErrorAuthInputs()) {
      return;
    }
    try {
      const response = await api.post('auth/login', {
        login: loginText,
        password: passwordText,
      });
      if (response.data === null) {
        dispatch(setLoading(false));
        dispatch(setAuthError('Неверный login или пароль'));
        return;
      }
      const { accessToken, refreshToken } = response.data;
      if (accessToken && refreshToken) {
        await dispatch(login({ accessToken, refreshToken }));
        setNullAuthError();
      }
    } catch (err: unknown) {
      dispatch(setLoading(false));
      checkAuthError(err);
      setNullAuthError();
    }
  };
  const handleRegistration = async () => {
    dispatch(setLoading(true));
    dispatch(setAuthError(null));
    if (!checkErrorRegistInputs()) {
      return;
    }
    try {
      const response = await api.post('auth/registration', {
        login: loginText,
        password: passwordText,
      });
      const { accessToken, refreshToken } = response.data;
      await dispatch(login({ accessToken, refreshToken }));
      setNullRegistInputs();
    } catch (err: unknown) {
      dispatch(setLoading(false));
      checkAuthError(err);
      setNullRegistInputs();
    }
  };
  return {
    user,
    handleLogin,
    handleRegistration,
  };
};
