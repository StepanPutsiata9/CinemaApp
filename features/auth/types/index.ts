import { JwtPayload } from 'jwt-decode';

export interface AuthState {
  user: JwtPayload | null;
  isLoading: boolean;
  isFirstLaunch: boolean;
  authError: string | null;
}
export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
