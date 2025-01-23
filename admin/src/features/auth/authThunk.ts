import { AuthService } from './authService';
import { loginRequest, loginSuccess, loginFailure, logout } from './authSlice';
import { Dispatch } from '@reduxjs/toolkit';

interface LoginCredentials {
  username?: string;
  email?: string;
  password?: string;
  [key:string]: string | undefined;
}

export const login = (credentials: LoginCredentials) => async (dispatch: Dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await AuthService.login(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    if (error instanceof Error) {
        dispatch(loginFailure(error.message));
    } else {
      dispatch(loginFailure('An unknown error occurred'));
    }
  }
};

export const checkAuth = () => (dispatch: Dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Optionally verify token or fetch user data
    dispatch(loginSuccess({}));
  } else {
    dispatch(logout());
  }
};