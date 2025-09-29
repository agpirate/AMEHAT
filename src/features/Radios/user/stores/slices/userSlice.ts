import { AuthState,AuthUIState,User,EmailPasswordUser,GoogleUser,AnonymousUser } from "../../types/userTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialAuthState: AuthState = {
    currentUser: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
    isInitialized: false,
    isVerificationEmailSent: false,
    isPasswordResetEmailSent: false,
  };
  
  const initialUIState: AuthUIState = {
    activeAuthMethod: 'email-password',
    loginForm: {
      email: '',
      password: '',
      rememberMe: false,
    },
    registrationForm: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    passwordResetForm: {
      email: '',
    },
    verificationForm: {
      code: '',
    },
    showPassword: false,
    showConfirmPassword: false,
  };
  
  const authSlice = createSlice({
    //name of store /slice
    name: 'authStore',

    //initialize the state
    initialState: {
      ...initialAuthState,
      ui: initialUIState,
    },

    //the state/data updator functions
    reducers: {
      // Initialization
      initializeStart(state) {
        state.isLoading = true;
      },
      initializeSuccess(state, action: PayloadAction<User | null>) {
        state.currentUser = action.payload;
        state.isAuthenticated = !!action.payload;
        state.isInitialized = true;
        state.isLoading = false;
      },
      initializeFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isInitialized = true;
        state.isLoading = false;
      },
  
      // Email/Password Authentication
      loginStart(state, action: PayloadAction<{ email: string; password: string; rememberMe: boolean }>) {
        state.isLoading = true;
        state.error = null;
        state.ui.loginForm = action.payload;
      },
      loginSuccess(state, action: PayloadAction<EmailPasswordUser>) {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      },
      loginFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // Google Authentication
      googleLoginStart(state) {
        state.isLoading = true;
        state.error = null;
        state.ui.activeAuthMethod = 'google';
      },
      googleLoginSuccess(state, action: PayloadAction<GoogleUser>) {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      },
      googleLoginFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // Anonymous Authentication
      anonymousLoginStart(state) {
        state.isLoading = true;
        state.error = null;
        state.ui.activeAuthMethod = 'anonymous';
      },
      anonymousLoginSuccess(state, action: PayloadAction<AnonymousUser>) {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      },
      anonymousLoginFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // Registration
      registerStart(state, action: PayloadAction<{ email: string; username: string; password: string }>) {
        state.isLoading = true;
        state.error = null;
        state.ui.registrationForm = {
          ...state.ui.registrationForm,
          ...action.payload,
          confirmPassword: action.payload.password,
        };
      },
      registerSuccess(state, action: PayloadAction<EmailPasswordUser>) {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.error = null;
      },
      registerFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // Email Verification
      sendVerificationEmailStart(state) {
        state.isLoading = true;
        state.error = null;
      },
      sendVerificationEmailSuccess(state) {
        state.isVerificationEmailSent = true;
        state.isLoading = false;
      },
      sendVerificationEmailFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
      verifyEmailStart(state, action: PayloadAction<string>) {
        state.isLoading = true;
        state.error = null;
        state.ui.verificationForm.code = action.payload;
      },
      verifyEmailSuccess(state, action: PayloadAction<EmailPasswordUser>) {
        state.currentUser = action.payload;
        state.isLoading = false;
      },
      verifyEmailFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // Password Reset
      sendPasswordResetEmailStart(state, action: PayloadAction<string>) {
        state.isLoading = true;
        state.error = null;
        state.ui.passwordResetForm.email = action.payload;
      },
      sendPasswordResetEmailSuccess(state) {
        state.isPasswordResetEmailSent = true;
        state.isLoading = false;
      },
      sendPasswordResetEmailFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
      resetPasswordStart(state, action: PayloadAction<{ token: string; newPassword: string }>) {
        state.isLoading = true;
        state.error = null;
      },
      resetPasswordSuccess(state) {
        state.isLoading = false;
        state.isPasswordResetEmailSent = false;
      },
      resetPasswordFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // Logout
      logoutStart(state) {
        state.isLoading = true;
        state.error = null;
      },
      logoutSuccess(state) {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        // Reset UI state but keep some form values
        state.ui = {
          ...initialUIState,
          loginForm: {
            ...initialUIState.loginForm,
            email: state.ui.loginForm.email,
            rememberMe: state.ui.loginForm.rememberMe,
          },
        };
      },
      logoutFailure(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.isLoading = false;
      },
  
      // UI Actions
      setActiveAuthMethod(state, action: PayloadAction<'email-password' | 'google' | 'anonymous'>) {
        state.ui.activeAuthMethod = action.payload;
      },
      updateLoginForm(state, action: PayloadAction<Partial<AuthUIState['loginForm']>>) {
        state.ui.loginForm = { ...state.ui.loginForm, ...action.payload };
      },
      updateRegistrationForm(state, action: PayloadAction<Partial<AuthUIState['registrationForm']>>) {
        state.ui.registrationForm = { ...state.ui.registrationForm, ...action.payload };
      },
      toggleShowPassword(state) {
        state.ui.showPassword = !state.ui.showPassword;
      },
      toggleShowConfirmPassword(state) {
        state.ui.showConfirmPassword = !state.ui.showConfirmPassword;
      },
      clearAuthError(state) {
        state.error = null;
      },
    },
  });
  
  export const {
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
    setActiveAuthMethod,
    updateLoginForm,
    updateRegistrationForm,
    toggleShowPassword,
    toggleShowConfirmPassword,
    clearAuthError,
  } = authSlice.actions;
  
  export default authSlice.reducer;