// store/authThunks.ts
import { storesComputorProvider, storesDataObj } from '../index';
import {
  initializeStart,
  initializeSuccess,
  initializeFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  googleLoginStart,
  googleLoginSuccess,
  googleLoginFailure,
  anonymousLoginStart,
  anonymousLoginSuccess,
  anonymousLoginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  sendVerificationEmailStart,
  sendVerificationEmailSuccess,
  sendVerificationEmailFailure,
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailFailure,
  sendPasswordResetEmailStart,
  sendPasswordResetEmailSuccess,
  sendPasswordResetEmailFailure,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from '../slices/userSlice';

import { User, EmailPasswordUser, GoogleUser, AnonymousUser } from '../../types/userTypes';

// Mock API calls - replace with your actual API calls
const authAPI = {
  initialize: async (): Promise<User | null> => {
    // Check local storage/token and validate with backend
    return null;
  },
  loginWithEmailPassword: async (email: string, password: string): Promise<EmailPasswordUser> => {
    // API call to login
    return {} as EmailPasswordUser;
  },
  loginWithGoogle: async (googleToken: string): Promise<GoogleUser> => {
    // API call to login with Google
    return {} as GoogleUser;
  },
  loginAnonymously: async (): Promise<AnonymousUser> => {
    // API call to login anonymously
    return {} as AnonymousUser;
  },
  register: async (email: string, username: string, password: string): Promise<EmailPasswordUser> => {
    // API call to register
    return {} as EmailPasswordUser;
  },
  sendVerificationEmail: async (userId: string): Promise<void> => {
    // API call to send verification email
  },
  verifyEmail: async (userId: string, code: string): Promise<EmailPasswordUser> => {
    // API call to verify email
    return {} as EmailPasswordUser;
  },
  sendPasswordResetEmail: async (email: string): Promise<void> => {
    // API call to send password reset email
  },
  resetPassword: async (token: string, newPassword: string): Promise<void> => {
    // API call to reset password
  },
  logout: async (): Promise<void> => {
    // API call to logout
  },
};

// Thunk to initialize auth state
export const initializeAuth = () => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(initializeStart());
    const user = await authAPI.initialize();
    dispatch(initializeSuccess(user));
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(initializeFailure(errorMessage));
  }
};

// Thunk for email/password login
export const loginWithEmailPassword = (email: string, password: string, rememberMe: boolean) => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(loginStart({ email, password, rememberMe }));
    const user = await authAPI.loginWithEmailPassword(email, password);
    dispatch(loginSuccess(user));
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(loginFailure(errorMessage ));
  }
};

// Thunk for Google login
export const loginWithGoogle = (googleToken: string) => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(googleLoginStart());
    const user = await authAPI.loginWithGoogle(googleToken);
    dispatch(googleLoginSuccess(user));
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(googleLoginFailure(errorMessage ));
  }
};

// Thunk for anonymous login
export const loginAnonymously = () => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(anonymousLoginStart());
    const user = await authAPI.loginAnonymously();
    dispatch(anonymousLoginSuccess(user));
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(anonymousLoginFailure(errorMessage ));
  }
};

// Thunk for registration
export const register = (email: string, username: string, password: string) => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(registerStart({ email, username, password }));
    const user = await authAPI.register(email, username, password);
    dispatch(registerSuccess(user));
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(registerFailure(errorMessage ));
  }
};

// Thunk for sending verification email
export const sendVerificationEmail = () => async (dispatch: storesComputorProvider, getState: () => storesDataObj) => {
  try {
    const { currentUser } = getState().auth;
    if (!currentUser || currentUser.authMethod !== 'email-password') {
      throw new Error('User not authenticated with email/password');
    }
    
    dispatch(sendVerificationEmailStart());
    await authAPI.sendVerificationEmail(currentUser.id);
    dispatch(sendVerificationEmailSuccess());
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(sendVerificationEmailFailure(errorMessage ));
  }
};

// Thunk for verifying email
export const verifyEmail = (code: string) => async (dispatch: storesComputorProvider, getState: () => storesDataObj) => {
  try {
    const { currentUser } = getState().auth;
    if (!currentUser || currentUser.authMethod !== 'email-password') {
      throw new Error('User not authenticated with email/password');
    }
    
    dispatch(verifyEmailStart(code));
    const updatedUser = await authAPI.verifyEmail(currentUser.id, code);
    dispatch(verifyEmailSuccess(updatedUser));
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(verifyEmailFailure(errorMessage ));
  }
};

// Thunk for sending password reset email
export const sendPasswordResetEmail = (email: string) => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(sendPasswordResetEmailStart(email));
    await authAPI.sendPasswordResetEmail(email);
    dispatch(sendPasswordResetEmailSuccess());
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(sendPasswordResetEmailFailure(errorMessage ));
  }
};

// Thunk for resetting password
export const resetPassword = (token: string, newPassword: string) => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(resetPasswordStart({ token, newPassword }));
    await authAPI.resetPassword(token, newPassword);
    dispatch(resetPasswordSuccess());
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(resetPasswordFailure(errorMessage ));
  }
};

// Thunk for logout
export const logout = () => async (dispatch: storesComputorProvider) => {
  try {
    dispatch(logoutStart());
    await authAPI.logout();
    dispatch(logoutSuccess());
  } catch (error) { const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
    dispatch(logoutFailure(errorMessage ));
  }
};