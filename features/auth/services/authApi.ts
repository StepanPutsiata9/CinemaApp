import { store } from '@/store/';
import axios from 'axios';
import { logout } from '../store/auth.slice';
import { clearTokens, getTokens, storeTokens } from './authStorage';
const api = axios.create({
  baseURL: 'backend',
});

api.interceptors.request.use(async config => {
  const tokens = await getTokens();
  if (tokens?.accessToken) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const tokens = await getTokens();
    if (error.response?.status === 403) {
      store.dispatch(logout());
      return Promise.reject('403');
    }
    if (error.response?.status === 401 && tokens?.refreshToken && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('backend/auth/refresh', {
          refreshToken: tokens.refreshToken,
        });
        const { accessToken, refreshToken } = response.data;
        await storeTokens({ accessToken, refreshToken });
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        await clearTokens();
        return Promise.reject(refreshError);
      }
    }
    if (error.response?.status === 404) {
      return { data: null };
    }
    return Promise.reject(error);
  }
);

export default api;
