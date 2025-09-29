// types/userTypes.ts
interface BaseUser {
    id: string;
    isAnonymous: boolean;
    isVerified: boolean;
    createdAt: Date;
    lastLoginAt: Date;
  }
  
  export interface EmailPasswordUser extends BaseUser {
    authMethod: 'email-password';
    email: string;
    username?: string;
    passwordHash?: string; // Never store plain passwords!
    verificationToken?: string;
    verificationTokenExpires?: Date;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
  }
  
  export interface GoogleUser extends BaseUser {
    authMethod: 'google';
    googleId: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
    picture?: string;
    locale?: string;
  }
  
  export interface AnonymousUser extends BaseUser {
    authMethod: 'anonymous';
    sessionToken: string;
  }
  
  export type User = EmailPasswordUser | GoogleUser | AnonymousUser;


// types/authTypes.ts
export interface AuthState {
    currentUser: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    isInitialized: boolean; // To check if auth state has been loaded
    isVerificationEmailSent: boolean;
    isPasswordResetEmailSent: boolean;
  }
  
  export interface AuthUIState {
    activeAuthMethod: 'email-password' | 'google' | 'anonymous';
    loginForm: {
      email: string;
      password: string;
      rememberMe: boolean;
    };
    registrationForm: {
      email: string;
      username: string;
      password: string;
      confirmPassword: string;
      acceptTerms: boolean;
    };
    passwordResetForm: {
      email: string;
    };
    verificationForm: {
      code: string;
    };
    showPassword: boolean;
    showConfirmPassword: boolean;
  }


  