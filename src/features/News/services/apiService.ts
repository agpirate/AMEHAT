import { request } from '@services/api/apiClient';
import type { DataItem } from '../types/modelSchemaTypes';
import type { ApiQueryParams, ApiResponse,backendQueryParams } from '../types/queryTypes';
import { ApiError } from '../../../shared/types/errors';

// import { Service_News_CONFIG } from '@/app/config/featuresConfig';
import Config from 'react-native-config';

// Base URL from config
// const API_BASE_URL = Service_News_CONFIG.API.BASE_URL;
// const API_TIMEOUT = Service_News_CONFIG.API.TIMEOUT;

// Define a base request function with default settings
const API_BASE_PATH = '/latest-news';

export const apiService = {
  // Fetch all items with enhanced error handling
  fetchItems: async (params?: Partial<backendQueryParams>): Promise<ApiResponse<DataItem[]>> => {
    try {
      const response = await request<{
        data: DataItem[];
        pagination: { total: number; pages: number };
      }>({
        method: 'GET',
        url: API_BASE_PATH,
        params
      });
      return {
        data: response.data,
        pagination: response.pagination
      };
      
    } catch (error) {
      throw ApiError.from(error);
    }
  },

  createItem: async (item: Partial<DataItem>): Promise<DataItem> => {
    try {
      return await request<DataItem>({
        method: 'POST',
        url: API_BASE_PATH,
        data: item
      });
    } catch (error) {
      throw ApiError.from(error);
    }
  },

  updateItem: async (id: string = '', updates: Partial<DataItem>): Promise<DataItem> => {
    try {
      return await request<DataItem>({
        method: 'PUT',
        url: `${API_BASE_PATH}/${id}`,
        data: updates
      });
    } catch (error) {
      throw ApiError.from(error);
    }
  },

  deleteItem: async (id: string): Promise<void> => {
    try {
      await request<void>({
        method: 'DELETE',
        url: `${API_BASE_PATH}/${id}`
      });
    } catch (error) {
      throw ApiError.from(error);
    }
  },
};