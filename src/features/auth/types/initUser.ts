import {UserForms } from './userForms';
import { RegAuthForm } from './RegAuthForms';
import { ActiveUserSession } from './activeUserSession';

import { UserModel_Registered,UserModel_Google,UserModel_Apple,UserModel_Annonymouse } from '../config/userModel';
import { RegLoginForm,RegSignupForm,RegResetForm } from '../config/userRegistration';


/**
 * Main auth state interface
 */
export interface UserState {
    currentUser: UserForms | null;     // Currently logged in user

    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    sessions: ActiveUserSession[];
    
    // Authentication method tracking
    currentAuthMethod: null | 'email' | 'google' | 'apple' | 'anonymous';
    currentAuthFlow: null | 'login' | 'signup' | 'reset' | 'verification';
  
    // Account linking state
    accountLinking: {
      method: null | 'google' | 'apple';
      status: 'idle' | 'loading' | 'succeeded' | 'failed';
      error: string | null;
    } | null;
  
    // Password change state
    passwordChange: {
      status: 'idle' | 'loading' | 'succeeded' | 'failed';
      error: string | null;
    };

    regAuthForm: RegAuthForm;      // Form state 

    isAuthenticated: boolean;
    // isInitialized: boolean; // To check if auth state has been loaded
    // isVerificationEmailSent: boolean;
    // isPasswordResetEmailSent: boolean;
  }

  /**
 * Initial state for auth slice
 */
export const initialState: UserState = {
    currentUser:UserModel_Registered,
    
    status: 'idle',
    error: null,
    
    // schemaUser:defaultUser,
    currentAuthMethod: 'email',
    currentAuthFlow:'login',

    accountLinking: null,
    passwordChange: {
      status: 'idle',
      error: null
    },

    sessions: [],
    isAuthenticated:false,

    regAuthForm: {
      activeTab: 'login',

      login:RegLoginForm,
      signup:RegSignupForm,
      reset: RegResetForm,


      googleAuth: {
        isLoading: false,
        error: null
      },

      common: {
        // isLoading: false,
        showPassword: false,
        showConfirmPassword: false
      }
    },

  };


