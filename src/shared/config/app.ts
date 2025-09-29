type AppConfig = {
  API_BASE_URL: string;
  SENTRY_DSN: string;
  FEATURE_FLAGS: {
    enablePayments: boolean;
  };
};

const APP_CONFIG: AppConfig = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://api.yourservice.com/v1',
  SENTRY_DSN: process.env.SENTRY_DSN || '',
  FEATURE_FLAGS: {
    enablePayments: __DEV__ ? false : true, // Disable in dev
  }
};

export default APP_CONFIG;