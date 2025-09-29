// src/app/constants/app.constants.ts
export const APP_CONSTANTS = {
  // App identifiers
  APP_ID: 'com.mycompany.myapp',
  APP_SCHEME: 'myapp',
  
  // Supported languages
  LANGUAGES: {
    EN: 'en',
    ES: 'es',
    FR: 'fr',
    DE: 'de',
  } as const,
  
  // Date formats
  DATE_FORMATS: {
    DISPLAY: 'MMM DD, YYYY',
    API: 'YYYY-MM-DD',
    TIME: 'HH:mm',
    DATETIME: 'MMM DD, YYYY HH:mm',
  },
  
  // File constants
  FILE: {
    MAX_UPLOAD_SIZE: 10 * 1024 * 1024, // 10MB
    SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
    SUPPORTED_DOC_TYPES: ['application/pdf', 'application/msword'],
  },
  
  // Validation constants
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^\+?[\d\s-()]{10,}$/,
    PASSWORD_MIN_LENGTH: 8,
    USERNAME_REGEX: /^[a-zA-Z0-9_]{3,20}$/,
  },
  
  // Business rules
  BUSINESS: {
    MAX_ITEMS_PER_ORDER: 50,
    MAX_ORDER_AMOUNT: 10000,
    MIN_ORDER_AMOUNT: 10,
    REFUND_PERIOD_DAYS: 30,
  },
} as const;

export type LanguageCode = keyof typeof APP_CONSTANTS.LANGUAGES;