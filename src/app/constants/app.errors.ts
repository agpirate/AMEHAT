// src/app/constants/error.constants.ts
export const ERROR_CODES = {
  // Network errors
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  
  // Auth errors
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  
  // Validation errors
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  REQUIRED_FIELD: 'REQUIRED_FIELD',
  INVALID_EMAIL: 'INVALID_EMAIL',
  INVALID_PHONE: 'INVALID_PHONE',
  
  // Business errors
  INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS',
  ITEM_OUT_OF_STOCK: 'ITEM_OUT_OF_STOCK',
  ORDER_LIMIT_EXCEEDED: 'ORDER_LIMIT_EXCEEDED',
} as const;

export const ERROR_MESSAGES = {
  [ERROR_CODES.NETWORK_ERROR]: {
    title: 'Connection Error',
    message: 'Please check your internet connection and try again.',
  },
  [ERROR_CODES.UNAUTHORIZED]: {
    title: 'Session Expired',
    message: 'Please log in again to continue.',
  },
  [ERROR_CODES.INVALID_CREDENTIALS]: {
    title: 'Invalid Credentials',
    message: 'The email or password you entered is incorrect.',
  },
  [ERROR_CODES.SERVER_ERROR]: {
    title: 'Server Error',
    message: 'Something went wrong. Please try again later.',
  },
  DEFAULT: {
    title: 'Oops!',
    message: 'An unexpected error occurred. Please try again.',
  },
} as const;

export type ErrorCode = keyof typeof ERROR_CODES;