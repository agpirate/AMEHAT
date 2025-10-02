// src/services/apiClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { Service_Auth_CONFIG } from '@/app/config/app.services.config';
import { API_CONSTANTS } from "@/app/constants/api.constants"

// Configure base API client
const apiClient: AxiosInstance = axios.create({
baseURL:Service_Auth_CONFIG.API.GATE_ONE_URL,
  timeout: Service_Auth_CONFIG.API.TIMEOUT,
  headers: {
    'Content-Type': API_CONSTANTS.CONTENT_TYPES.JSON,
  },
});
 
// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = ''; // Get from your auth store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else {
      console.error('API Request Failed:', error.message);
    }
    return Promise.reject(error);
  }
);

// Generic request function
const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
   

    const response: AxiosResponse<T> = await apiClient(config);

    return response.data;
  } catch (error) {
    // You can transform errors here if needed
    throw error;
  }
};

export { request }

export default apiClient