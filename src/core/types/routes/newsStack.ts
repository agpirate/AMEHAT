type StackScreenType = {
    latest: undefined;
    newsDetails: { referralCode?: string };
  };
  
  export type newsStackType =  
    undefined | {   
        screen: 'news' | 'newsDetails';
        params?: StackScreenType[keyof StackScreenType];
      };