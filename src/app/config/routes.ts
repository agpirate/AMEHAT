// config/routes.ts

/* ========================
 * SCHEME & DOMAIN CONFIG
 * ======================== */
export const APP_SCHEME = 'myapp://'; // For deep linking
export const WEB_URL = 'https://myapp.com'; // For web fallbacks

/* ========================
 * ROUTE NAME CONSTANTS
 * ======================== */
export const ROUTES = {
  // ===== AUTHENTICATION STACK =====
  AUTH: {
    NAV_SCREEN:'Auth',
    NAV:{
          LOGIN: 'SignInScreen',
          SIGNUP: 'SignUpScreen',
          FORGOT_PASSWORD: 'AuthForgotPassword',
          RESET_PASSWORD: 'AuthResetPassword',
    },
  },
  
  // ===== CORE SCREENS =====
  CORE: {
    NAV_SCREEN:'core',
    NAV:{
          WELCOME: 'Welcome',
          ERROR: 'Error',
    },
  },

  // ===== MAIN TAB NAVIGATION =====
  MAIN_TAB: {
    NAV_SCREEN:'MainTab',
    NAV:{
 NEWS: {
      NAV_SCREEN:'News',
      NAV:{
      LIST: {
        NAV_SCREEN:'News',
        NAV:{
        LATEST: 'FeaturedScreen',
        DETAIL: 'NewsDetail',
        GROUP_CATEGORY: 'CategoryScreen',
        }
      },
      DETAIL: 'DetailsScreen',
      },

    },
    TV: {
      NAV_SCREEN:'TV',
      NAV:{
      LIST: {
        NAV_SCREEN:'TV',
        NAV:{
        LATEST: 'TvFeaturedScreen',
        // DETAIL: 'TvDetail',
        GROUP_CATEGORY: 'TvCategoryScreen',
        },
      },
      DETAIL: 'TvDetailsScreen',
      }

    },
    LIVE: 'Live',
    RADIO: {
      NAV_SCREEN:'Radio',
      NAV:{
          LIST: {
            NAV_SCREEN:'Radio',
            NAV:{
            LATEST: 'RadioFeaturedtScreen',
            GROUP_CATEGORY: 'RadioCategoryScreen',
            }
          },
          DETAIL: 'RadioDetailsScreen',
      },

    },
    MORE: {
     NAV_SCREEN:'More',
     NAV:{
      OPTIONS: 'MoreOptions',
     },
    },
    },

    GATEWAY:'MainTab',
    NEWS: {
      GATEWAY:'News',
      LIST: {
        GATEWAY:'Gateway',
        LATEST: 'FeaturedScreen',
        DETAIL: 'NewsDetail',
        GROUP_CATEGORY: 'CategoryScreen',
      },
      DETAIL: 'DetailsScreen',
    },
    TV: {
      GATEWAY:'TV',
      LIST: {
        GATEWAY:'tvGateway',
        LATEST: 'TvFeaturedScreen',
        // DETAIL: 'TvDetail',
        GROUP_CATEGORY: 'TvCategoryScreen',
      },
      DETAIL: 'TvDetailsScreen',
    },
    LIVE: 'Live',
    RADIO: {
      
    GATEWAY:'Radio',
      LIST: {
        GATEWAY:'radioGateway',
        LATEST: 'RadioFeaturedtScreen',
        GROUP_CATEGORY: 'RadioCategoryScreen',
      },
      DETAIL: 'RadioDetailsScreen',
    },
    MORE: {
     GATEWAY:'More',
      OPTIONS: 'MoreOptions',
    },
  },

  // ===== USER PROFILE =====
  USER: {
    GATEWAY:'user',
    PROFILE: 'UserProfile',
    SETTINGS: 'UserSettings',
  },

  // ===== SYSTEM SCREENS =====
  SYSTEM: {
    GATEWAY:'system',
    ABOUT_US: 'AboutUs',
    SETTINGS: 'SystemSettings',
  },

  // ===== SHARED MODALS =====
  SHARED: {
    GATEWAY:'shared',
    MODAL: 'SharedModal',
    WEB_VIEW: 'WebView',
  },
} as const; // 'as const' preserves literal types

/* ========================
 * TYPE DEFINITIONS
 * ======================== */

// 1. Base parameter list type
export type RootStackParamList = {
  // Auth Stack
 // ===== AUTH STACK =====
  [ROUTES.AUTH.NAV_SCREEN]:undefined;
  [ROUTES.AUTH.NAV.LOGIN]: undefined;
  [ROUTES.AUTH.NAV.SIGNUP]: { 
    email?: string;  // Optional pre-filled email
    referralCode?: string; // Optional referral code
  };
  [ROUTES.AUTH.NAV.FORGOT_PASSWORD]: {
    email?: string; // Optional pre-filled email
  };
  [ROUTES.AUTH.NAV.RESET_PASSWORD]: { 
    token: string; // Required reset token
    email?: string; // Optional email for verification
  };

  // ===== CORE SCREENS =====
  [ROUTES.CORE.NAV_SCREEN]:undefined;
  [ROUTES.CORE.NAV.WELCOME]: undefined;
  [ROUTES.CORE.NAV.ERROR]: { 
    message?: string;
    errorCode?: number;
    retryUrl?: string; // Optional URL to retry action
  };

  // ===== NEWS =====
  [ROUTES.MAIN_TAB.NAV_SCREEN]:undefined;


  [ROUTES.MAIN_TAB.NAV.NEWS.NAV_SCREEN]:undefined;
  
  [ROUTES.MAIN_TAB.NAV.NEWS.NAV.LIST.NAV_SCREEN]:undefined;
  [ROUTES.MAIN_TAB.NAV.NEWS.NAV.LIST.NAV.LATEST]: {
    refresh?: boolean; // Optional force refresh flag
  };
  [ROUTES.MAIN_TAB.NAV.NEWS.NAV.LIST.NAV.GROUP_CATEGORY]: {
    categoryId: string;
    categoryName?: string; // Optional display name
    title?:string,
  };

  [ROUTES.MAIN_TAB.NAV.NEWS.NAV.DETAIL]: { 
    id: string;
    source?: string; // Optional tracking source
    highlight?: boolean; // Optional highlight flag
    title?:string,
  };


  [ROUTES.MAIN_TAB.GATEWAY]:undefined;

  [ROUTES.MAIN_TAB.NEWS.GATEWAY]:undefined;
  [ROUTES.MAIN_TAB.NEWS.LIST.LATEST]: {
    refresh?: boolean; // Optional force refresh flag
  };
  [ROUTES.MAIN_TAB.NEWS.LIST.GROUP_CATEGORY]: {
    categoryId: string;
    categoryName?: string; // Optional display name
    title?:string,
  };
  [ROUTES.MAIN_TAB.NEWS.LIST.GATEWAY]:undefined;

  [ROUTES.MAIN_TAB.NEWS.DETAIL]: { 
    id: string;
    source?: string; // Optional tracking source
    highlight?: boolean; // Optional highlight flag
    title?:string,
  };

  // ===== VIDEOS =====


  [ROUTES.MAIN_TAB.TV.GATEWAY]:undefined;
  [ROUTES.MAIN_TAB.TV.LIST.LATEST]: {
    refresh?: boolean; // Optional force refresh flag
  };
  [ROUTES.MAIN_TAB.TV.LIST.GROUP_CATEGORY]: {
    categoryId: string;
    categoryName?: string; // Optional display name
    title?:string,
  };
  [ROUTES.MAIN_TAB.TV.LIST.GATEWAY]:undefined;

  [ROUTES.MAIN_TAB.TV.DETAIL]: { 
    id: string;
    source?: string; // Optional tracking source
    highlight?: boolean; // Optional highlight flag
    title?:string,
  };

  // ===== RADIO =====
  [ROUTES.MAIN_TAB.RADIO.GATEWAY]:undefined;
  [ROUTES.MAIN_TAB.RADIO.LIST.LATEST]: {
    refresh?: boolean; // Optional force refresh flag
  };
  [ROUTES.MAIN_TAB.RADIO.LIST.GROUP_CATEGORY]: {
    categoryId: string;
    categoryName?: string; // Optional display name
    title?:string,
  };
  [ROUTES.MAIN_TAB.RADIO.LIST.GATEWAY]:undefined;

  [ROUTES.MAIN_TAB.RADIO.DETAIL]: { 
    id: string;
    source?: string; // Optional tracking source
    highlight?: boolean; // Optional highlight flag
    title?:string,
  };

  // ===== LIVE STREAM =====
//   [ROUTES.MAIN_TAB.LIVE.GATEWAY]:undefined;
  [ROUTES.MAIN_TAB.LIVE]: {
    channel?: string; // Optional default channel
  };

  // ===== MORE OPTIONS =====
  [ROUTES.MAIN_TAB.MORE.GATEWAY]:undefined;
  [ROUTES.MAIN_TAB.MORE.OPTIONS]: undefined;

  // ===== USER PROFILE =====
  [ROUTES.USER.GATEWAY]:undefined;
  [ROUTES.USER.PROFILE]: { 
    userId: string;
    tab?: 'posts' | 'photos' | 'friends'; // Optional default tab
    highlightId?: string; // Optional post to highlight
  };
  [ROUTES.USER.SETTINGS]: {
    scrollTo?: 'notifications' | 'account' | 'privacy'; // Optional section
  };

  // ===== SYSTEM SCREENS =====
  [ROUTES.SYSTEM.GATEWAY]:undefined;
  [ROUTES.SYSTEM.ABOUT_US]: undefined;
  [ROUTES.SYSTEM.SETTINGS]: {
    forceDarkMode?: boolean; // Optional theme override
  };

  // ===== SHARED MODALS =====
  [ROUTES.SHARED.GATEWAY]:undefined;
  [ROUTES.SHARED.MODAL]: {
    component: string; // Which component to render
    props?: Record<string, any>; // Dynamic props for modal
  };
  [ROUTES.SHARED.WEB_VIEW]: { 
    url: string;
    title?: string; // Optional custom title
    injectJS?: string; // Optional JS to inject
  };
};

// 2. Helper types
export type AppRoute = keyof RootStackParamList;
export type RouteParams<T extends AppRoute> = RootStackParamList[T];

/* ========================
 * DEEP LINKING CONFIG
 * ======================== */
export const LINKING_CONFIG = {
  prefixes: [APP_SCHEME, WEB_URL],
  config: {
    screens: {
      // Auth Stack
      [ROUTES.AUTH.NAV.LOGIN]: 'auth/login',
      [ROUTES.AUTH.NAV.SIGNUP]: 'auth/signup',
      [ROUTES.AUTH.NAV.FORGOT_PASSWORD]: 'auth/forgot-password',
      [ROUTES.AUTH.NAV.RESET_PASSWORD]: {
        path: 'auth/reset-password/:token',
        parse: {
          token: (token: string) => token,
        },
      },

      // News
      [ROUTES.MAIN_TAB.NEWS.LIST.LATEST]: 'news/latest',
      [ROUTES.MAIN_TAB.NEWS.LIST.GROUP_CATEGORY]: {
        path: 'news/category/:categoryId',
        parse: {
          categoryId: (id: string) => id,
        },
      },
      [ROUTES.MAIN_TAB.NEWS.DETAIL]: {
        path: 'news/:id',
        parse: {
          id: (id: string) => id,
        },
      },

      [ROUTES.MAIN_TAB.TV.LIST.LATEST]: 'tv/latest',
      [ROUTES.MAIN_TAB.TV.LIST.GROUP_CATEGORY]: {
        path: 'tv/category/:categoryId',
        parse: {
          categoryId: (id: string) => id,
        },
      },
      [ROUTES.MAIN_TAB.TV.DETAIL]: {
        path: 'tv/:id',
        parse: {
          id: (id: string) => id,
        },
      },
      // User Profile
      [ROUTES.USER.PROFILE]: {
        path: 'user/:userId/:tab?', // Optional tab parameter
        parse: {
          userId: (id: string) => id,
          tab: (tab: string) => tab as 'posts' | 'photos' | 'about',
        },
      },

      // Web View
      [ROUTES.SHARED.WEB_VIEW]: {
        path: 'web-view',
        parse: {
          url: (url: string) => decodeURIComponent(url),
          title: (title: string) => title,
        },
      },
    },
  },
};