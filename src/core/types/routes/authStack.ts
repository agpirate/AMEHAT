type StackScreenType = {
    SignIn: undefined;
    SignUp: { referralCode?: string };
    OAuth: { token?: string,provider: 'google' | 'apple'; } | undefined;
  };
  
  export type authStackType =  undefined | {    
      screen: keyof StackScreenType;
      params?: StackScreenType[keyof StackScreenType];
    }