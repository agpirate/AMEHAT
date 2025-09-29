

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// types
import { BaseUser,UserForms, EmailUser, GoogleUser, AnonymousUser,AppleUser } from '../../types/userForms.ts';
import { RegAuthForm} from '../../types/RegAuthForms.ts';

import { UserState } from '../../types/initUser';
import { ActiveUserSession} from '../../types/activeUserSession';
import { authSchemas } from '../../types/userSchema';

//initializing data
import { UserModel_Registered,UserModel_Google,UserModel_Apple,UserModel_Annonymouse } from '../../config/userModel';

import { initialState } from '../../types/initUser.ts'

//api services...

//chunks for auto syncing
import { loginWithEmail,register} from "../chunk/user.ts"

const authSlice = createSlice(
  {
  name: 'auth',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
    // ==============================================
    // CORE AUTHENTICATION REDUCERS
    // ==============================================
    resetAuthState: () => initialState,

    setAuthStatus: (state, action: PayloadAction<UserState['status']>) => {
      state.status = action.payload;
    },

    setAuthError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // ==============================================
    // EMAIL AUTHENTICATION (LOGIN/SIGNUP/RESET)
    // ==============================================
    // Login Flow
    startEmailLogin: (state) => {
      state.status = 'loading';
      state.error = null;
      state.currentAuthMethod = 'email';
      state.currentAuthFlow = 'login';
      state.regAuthForm.activeTab = 'login';
    },

    completeEmailLogin: (state, action: PayloadAction<EmailUser>) => {
      state.currentUser = action.payload;
      state.status = 'succeeded';
      state.currentAuthMethod = null;
      state.currentAuthFlow = null;
    },

    failEmailLogin: (state, action: PayloadAction<{ error: string; field?: 'email' | 'password' }>) => {
      state.status = 'failed';
      state.error = action.payload.error;
      if (action.payload.field) {
        state.regAuthForm.login.errors[action.payload.field] = action.payload.error;
      }
    },

    // Signup Flow
    startEmailSignup: (state) => {
      state.status = 'loading';
      state.error = null;
      state.currentAuthMethod = 'email';
      state.currentAuthFlow = 'signup';
    },

    completeEmailSignup: (state, action: PayloadAction<EmailUser>) => {
      state.currentUser = action.payload;
      state.status = 'succeeded';
      state.currentAuthMethod = null;
      state.currentAuthFlow = null;
    },

    failEmailSignup: (state, action: PayloadAction<{ error: string; field?: 'email' | 'username' | 'password' }>) => {
      state.status = 'failed';
      state.error = action.payload.error;
      if (action.payload.field) {
        state.regAuthForm.signup.errors[action.payload.field] = action.payload.error;
      }
    },

    // Password Reset Flow
    startPasswordReset: (state) => {
      state.status = 'loading';
      state.error = null;
      state.currentAuthFlow = 'reset';
    },

    completePasswordReset: (state) => {
      state.status = 'succeeded';
      state.currentAuthFlow = null;
      state.regAuthForm.reset.email = '';
    },

    failPasswordReset: (state, action: PayloadAction<{ error: string; field?: 'email' }>) => {
      state.status = 'failed';
      state.error = action.payload.error;
      if (action.payload.field) {
        state.regAuthForm.reset.errors[action.payload.field] = action.payload.error;
      }
    },

    // Email Verification
    startEmailVerification: (state) => {
      state.status = 'loading';
      state.error = null;
      state.currentAuthFlow = 'verification';
    },

    completeEmailVerification: (state) => {
      if (state.currentUser && 'emailVerified' in state.currentUser) {
        (state.currentUser as EmailUser).emailVerified = true;
      }
      state.status = 'succeeded';
      state.currentAuthFlow = null;
    },

    // ==============================================
    // GOOGLE AUTHENTICATION
    // ==============================================
    startGoogleAuth: (state) => {
      state.status = 'loading';
      state.error = null;
      state.currentAuthMethod = 'google';
      state.regAuthForm.googleAuth.isLoading = true;
    },

    completeGoogleAuth: (state, action: PayloadAction<Omit<GoogleUser, keyof BaseUser>>) => {
      state.currentUser = {
        ...initialState.currentUser as BaseUser,
        ...action.payload,
        authType: 'google',
        lastLoginAt: new Date().toISOString()
      };
      state.status = 'succeeded';
      state.regAuthForm.googleAuth.isLoading = false;
    },

    failGoogleAuth: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
      state.regAuthForm.googleAuth.isLoading = false;
    },

    // ==============================================
    // APPLE AUTHENTICATION
    // ==============================================
    startAppleAuth: (state) => {
      state.status = 'loading';
      state.error = null;
      state.currentAuthMethod = 'apple';
    },

    completeAppleAuth: (state, action: PayloadAction<Omit<AppleUser, keyof BaseUser>>) => {
      state.currentUser = {
        ...initialState.currentUser as BaseUser,
        ...action.payload,
        authType: 'apple',
        lastLoginAt: new Date().toISOString()
      };
      state.status = 'succeeded';
    },

    failAppleAuth: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },

    // ==============================================
    // ANONYMOUS AUTHENTICATION
    // ==============================================
    startAnonymousAuth: (state) => {
      state.status = 'loading';
      state.error = null;
      state.currentAuthMethod = 'anonymous';

      state.currentUser = UserModel_Annonymouse
    },
    
    completeAnonymousAuth: (state, action: PayloadAction<Omit<AnonymousUser, keyof BaseUser>>) => {
      state.currentUser = {
        ...initialState.currentUser as BaseUser,
        ...action.payload,
        authType: 'anonymous',
        lastLoginAt: new Date().toISOString()
      };
      state.status = 'succeeded';
    },

    failAnonymousAuth: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },

    // ==============================================
    // FORM MANAGEMENT
    // ==============================================
    setActiveAuthTab: (state, action: PayloadAction<'login' | 'signup' | 'reset'>) => {
      state.regAuthForm.activeTab = action.payload;
      state.error = null;
    },

    updateLoginForm: (state, action: PayloadAction<Partial<RegAuthForm['login']>>) => {
      const formUpdates = action.payload;
      const updatedForm = { ...state.regAuthForm.login, ...formUpdates };
      const newErrors = { ...state.regAuthForm.login.errors };

      // Validate each updated field
      Object.keys(formUpdates).forEach((field) => {
        const key = field as keyof typeof updatedForm;
        const value = formUpdates[key];

        const schema = authSchemas.login[key as keyof typeof authSchemas.login];

        if (schema && typeof value === 'string') {
          // Clear previous error
            newErrors[key as keyof typeof newErrors] = undefined;
          // Run validation
          if (schema.required && !value) {
            newErrors[key as keyof typeof newErrors] = `${field} is required`;
          } else if (schema.pattern && !schema.pattern.test(value)) {
            newErrors[key as keyof typeof newErrors] = `Invalid ${field} format`;
          } else if (schema.validate) {
            const error = schema.validate(value);
            if (error) newErrors[key as keyof typeof newErrors] = error;
          }
        }
      });


      state.regAuthForm.login = {
        ...updatedForm,
        errors: newErrors
      };
      state.status = 'idle';  
      state.error = null;
      
    },

    updateSignupForm: (state, action: PayloadAction<Partial<RegAuthForm['signup']>>) => {


      const formUpdates = action.payload;
      const updatedForm = { ...state.regAuthForm.signup, ...formUpdates };
      const newErrors = { ...state.regAuthForm.signup.errors };

      // Validate each updated field
      Object.keys(formUpdates).forEach((field) => {
        const key = field as keyof typeof updatedForm;
        const value = formUpdates[key];

        const schema = authSchemas.signup[key as keyof typeof authSchemas.signup];

        if (schema && typeof value === 'string') {
          // Clear previous error
            newErrors[key as keyof typeof newErrors] = undefined;
          // Run validation
          if (schema.required && !value) {
            newErrors[key as keyof typeof newErrors] = `${field} is required`;
          } else if (schema.pattern && !schema.pattern.test(value)) {
            newErrors[key as keyof typeof newErrors] = `Invalid ${field} format`;
          } else if (schema.validate) {
            const error = schema.validate(value);
            if (error) newErrors[key as keyof typeof newErrors] = error;
          }
        }
      });


      state.regAuthForm.signup = {
        ...updatedForm,
        errors: newErrors
      };
      state.status = 'idle';  
      state.error = null;
    },

    updateResetForm: (state, action: PayloadAction<Partial<RegAuthForm['reset']>>) => {
      state.regAuthForm.reset = { 
        ...state.regAuthForm.reset, 
        ...action.payload 
      };
    },
    togglePasswordVisibility: (state, action: PayloadAction<'password' | 'confirmPassword'>) => {
      // const field = `show${action.payload.charAt(0).toUpperCase() + action.payload.slice(1)}`;
      // state.regAuthForm.common['showPassword'] = false;
      state.regAuthForm.common = { 
        ...state.regAuthForm.common, 
        showPassword: state.regAuthForm.common.showPassword ? false : true
      };
    },
    toggleTermAggrement: (state) => {
      state.regAuthForm.signup = { 
        ...state.regAuthForm.signup, 
        acceptTerms:state.regAuthForm.signup.acceptTerms ? false : true
      };
    },
    // ==============================================
    // SESSION MANAGEMENT
    // ==============================================
    addSession: (state, action: PayloadAction<ActiveUserSession>) => {
      state.sessions = state.sessions.map(s => ({ ...s, isCurrent: false }));
      state.sessions.push({ ...action.payload, isCurrent: true });
    },

    updateSession: (state, action: PayloadAction<{ id: string; updates: Partial<ActiveUserSession> }>) => {
      state.sessions = state.sessions.map(session => 
        session.id === action.payload.id 
          ? { ...session, ...action.payload.updates } 
          : session
      );
    },

    removeSession: (state, action: PayloadAction<string>) => {
      state.sessions = state.sessions.filter(session => session.id !== action.payload);
    },

    // ==============================================
    // ACCOUNT LINKING
    // ==============================================
    startAccountLinking: (state, action: PayloadAction<'google' | 'apple'>) => {
      // state.accountLinking = {
      //   method: action.payload,
      //   status: 'loading',
      //   error: null
      // };
    },

    completeAccountLinking: (state, action: PayloadAction<Partial<GoogleUser> | Partial<AppleUser>>) => {
      // if (state.currentUser) {
      //   state.currentUser = { ...state.currentUser, ...action.payload };
      // }
      // state.accountLinking = {
      //   method: null,
      //   status: 'succeeded',
      //   error: null
      // };
    },

    failAccountLinking: (state, action: PayloadAction<string>) => {
      // state.accountLinking = {
      //   ...state.accountLinking!,
      //   status: 'failed',
      //   error: action.payload
      // };
    },

    // ==============================================
    // PASSWORD MANAGEMENT
    // ==============================================
    startPasswordChange: (state) => {
      // state.passwordChange = {
      //   status: 'loading',
      //   error: null
      // };
    },

    completePasswordChange: (state) => {
      // state.passwordChange = {
      //   status: 'succeeded',
      //   error: null
      // };
    },

    failPasswordChange: (state, action: PayloadAction<string>) => {
      // state.passwordChange = {
      //   status: 'failed',
      //   error: action.payload
      // };
    }
  },
  extraReducers: (builder) => {
    builder
    // Login with Email
      .addCase(loginWithEmail.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = UserModel_Registered//action.payload;
        state.error = null;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string || 'Login failed';
      })
      // Register with Email
      .addCase(register.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string || 'Registeration failed';
      })
      //other service status
      // Register with Email

      
  }

});

export const {
  //chunks
  // Core
  resetAuthState,
  setAuthStatus,
  setAuthError,

  // Email Auth
  startEmailLogin,
  completeEmailLogin,
  failEmailLogin,

  startEmailSignup,
  completeEmailSignup,
  failEmailSignup,
  
  startPasswordReset,
  completePasswordReset,
  failPasswordReset,

  startEmailVerification,
  completeEmailVerification,

  // Google Auth
  startGoogleAuth,
  completeGoogleAuth,
  failGoogleAuth,

  // Apple Auth
  startAppleAuth,
  completeAppleAuth,
  failAppleAuth,

  // Anonymous Auth
  startAnonymousAuth,
  completeAnonymousAuth,
  failAnonymousAuth,

  // Form Management
  setActiveAuthTab,
  updateLoginForm,
  updateSignupForm,
  updateResetForm,
  togglePasswordVisibility,
  toggleTermAggrement,
  // Session Management
  addSession,
  updateSession,
  removeSession,

  // Account Linking
  startAccountLinking,
  completeAccountLinking,
  failAccountLinking,

  // Password Management
  startPasswordChange,
  completePasswordChange,
  failPasswordChange
} = authSlice.actions;

// Export the reducer
export default authSlice.reducer;

// Export the action types
export type AuthActions = ReturnType<typeof authSlice.actions[keyof typeof authSlice.actions]>;
  
  // Helper functions
  function generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
  
  function getDeviceInfo() {
    // Implementation would use react-native-device-info
    return null
    // return {
    //   os: Platform.OS,
    //   ipAddress: 'unknown', // Would use a network info library
    //   location: 'unknown'   // Would use geolocation
    // };
  }

 
