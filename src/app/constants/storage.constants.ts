// src/app/constants/storage.constants.ts
export const STORAGE_KEYS = {
  // Auth related
  AUTH_TOKEN: '@auth_token',
  REFRESH_TOKEN: '@refresh_token',
  USER_DATA: '@user_data',
  SESSION_EXPIRY: '@session_expiry',
  
  // App settings
  APP_THEME: '@app_theme',
  APP_LANGUAGE: '@app_language',
  APP_FIRST_LAUNCH: '@app_first_launch',
  NOTIFICATION_SETTINGS: '@notification_settings',
  
  // Feature flags and cache
  FEATURE_FLAGS: '@feature_flags',
  API_CACHE: '@api_cache',
  LAST_SYNC_TIMESTAMP: '@last_sync_timestamp',
  
  // User preferences
  USER_PREFERENCES: '@user_preferences',
  RECENT_SEARCHES: '@recent_searches',
  FAVORITE_ITEMS: '@favorite_items',
} as const;

export const STORAGE_CONFIG = {
  // Encryption
  SHOULD_ENCRYPT: true,
  ENCRYPTION_KEY: 'my-app-secure-key-256',
  
  // Backup
  SHOULD_BACKUP: false,
  EXCLUDE_FROM_BACKUP: [
    STORAGE_KEYS.AUTH_TOKEN,
    STORAGE_KEYS.USER_DATA,
  ],
} as const;

export type StorageKey = keyof typeof STORAGE_KEYS;