export const API = {
  BASE_URL: __DEV__ 
    ? 'https://dev.api.example.com' 
    : 'https://api.example.com',
  ENDPOINTS: {
    LOGIN: '/auth/login',
    PROFILE: '/user/profile',
  },
  HEADERS: {
    ACCEPT: 'application/json',
    CONTENT_TYPE: 'application/json',
  },
} as const;