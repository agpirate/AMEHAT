


/**
 * Interface for authentication form state
 */
export interface RegAuthForm {
    activeTab: 'login' | 'signup' | 'reset';  // Current active form
    login: {
      email: string;
      password: string;
      rememberMe: boolean;
      errors: {
        email?: string;
        password?: string;
        general?: string;
      };
    };
    signup: {
      email: string;
      username: string;
      password: string;
      confirmPassword: string;
      acceptTerms: boolean;
      errors: {
        email?: string;
        username?: string;
        password?: string;
        confirmPassword?: string;
        general?: string;
      };
    };
    reset: {
      email: string;
      errors: {
        email?: string;
        general?: string;
      };
    };
    
    googleAuth: {
      isLoading: boolean;
      error?: string | null;
    };


    //status of all email/password(&3 sub),google,apple,annoymouse....
    common: {
      // isLoading: boolean;
      showPassword: boolean;
      showConfirmPassword: boolean;
    };
  }