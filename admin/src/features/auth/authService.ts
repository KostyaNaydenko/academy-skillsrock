import { apiClient } from '../../utils/apiClient';

interface LoginCredentials {
  username?: string;
  email?: string;
  password?: string;
  [key:string]:string | undefined;
}

export const AuthService = {
    login: async (credentials: LoginCredentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    }
    throw new Error('Login failed');
  },
};