// src/app/config/appConfig.ts
import {ENV} from './env';
import Config from 'react-native-config';

export const APP_CONFIG = {
  // App metadata
  APP_NAME: 'MyBusinessApp',
  APP_VERSION: '1.0.0',
  BUILD_NUMBER: '1',

  // Features flags
  FEATURES: {
    DARK_MODE: true,
    OFFLINE_MODE: true,
    PUSH_NOTIFICATIONS: !ENV.isDev, // Disable in dev
    BIOMETRIC_AUTH: true,
    SOCIAL_LOGIN: true,
  },

  // API Configuration
  API: {
    BASE_URL: ENV.apiConfig.baseURL,
    TIMEOUT: ENV.apiConfig.timeout,
    RETRY_ATTEMPTS: 3,
    VERSION: 'v1',
  },

  // Storage
  STORAGE: {
    USER_DATA_KEY: '@UserData',
    AUTH_TOKEN_KEY: '@AuthToken',
    APP_SETTINGS_KEY: '@AppSettings',
    CACHE_EXPIRY: 24 * 60 * 60 * 1000, // 24 hours
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
  },

  // Cache
  CACHE: {
    ENABLED: true,
    DEFAULT_TTL: 5 * 60 * 1000, // 5 minutes
  },
} as const;

export type AppFeatures = keyof typeof APP_CONFIG.FEATURES;