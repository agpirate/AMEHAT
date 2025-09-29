// src/app/constants/api.constants.ts
export const API_CONSTANTS = {
  // HTTP Methods
  METHODS: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  } as const,
  
  // Status Codes
  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    SERVER_ERROR: 500,
  },
  
  // Headers
  HEADERS: {
    CONTENT_TYPE: 'Content-Type',
    AUTHORIZATION: 'Authorization',
    ACCEPT: 'Accept',
    USER_AGENT: 'User-Agent',
  },
  
  // Content Types
  CONTENT_TYPES: {
    JSON: 'application/json',
    FORM_DATA: 'multipart/form-data',
    FORM_URLENCODED: 'application/x-www-form-urlencoded',
  },
  
  // API Endpoints (base paths)
  ENDPOINTS: {
    AUTH: '/auth',
    USERS: '/users',
    PRODUCTS: '/products',
    ORDERS: '/orders',
    UPLOADS: '/uploads',
  },
  
  // Query parameters
  QUERY_KEYS: {
    PAGE: 'page',
    LIMIT: 'limit',
    SEARCH: 'search',
    SORT: 'sort',
    FILTER: 'filter',
  },
} as const;