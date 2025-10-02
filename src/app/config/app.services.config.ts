// src/Service/config/ServiceConfig.ts
import {ENV} from './env';

export const Service_News_CONFIG = {
  // Service metadata
  Service_NAME: 'MyBusinessService',

  // API Configuration
  API: {
    GATE_ONE_URL: ENV.apiConfig.systemURL+'/latest-news',
    TIMEOUT: ENV.apiConfig.timeout,
    RETRY_ATTEMPTS: 3,
    VERSION: 'v1',
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
  },
}  as const;

export const Service_User_CONFIG = {
  // Service metadata
  Service_NAME: 'MyBusinessService',

  // API Configuration
  API: {
    GATE_ONE_URL: ENV.apiConfig.systemURL+'/api',
    TIMEOUT: ENV.apiConfig.timeout,
    RETRY_ATTEMPTS: 3,
    VERSION: 'v1',
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
  },
} as const;

export const Service_Auth_CONFIG = {
  // Service metadata
  Service_NAME: 'Authentication',

  // API Configuration
  API: {
    GATE_ONE_URL: ENV.apiConfig.systemURL+'/api',
    TIMEOUT: ENV.apiConfig.timeout,
    RETRY_ATTEMPTS: 3,
    VERSION: 'v1',
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 1,
    MAX_PAGE_SIZE: 1,
  },
} as const;