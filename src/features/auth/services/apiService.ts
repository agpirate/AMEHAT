import { request } from '../../../shared/services/api/apiClient';
import {DataItemType} from '../types/[input]Item_Schema/SchemaInputItemTypes';
import {ApiQueringType} from '../types/quering/apiQuering/ApiQueringTypes';
import ApiResponseTypes from '../types/quering/apiResponse/ApiResponseTypes';
import { ApiError } from '../../../shared/types/errors';

const API_BASE_PATH = '/api/auth/login';

export const apiService = {
  // Fetch all items with enhanced error handling
  fetchItems: async (params?: Partial<ApiQueringType>): Promise<ApiResponseTypes<DataItemType[]>> => {
    try {
      const response = await request<{
        data: DataItemType[];
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

  fetchPostItem: async (item: Partial<DataItemType>): Promise<DataItemType> => {
    try {
      return await request<DataItemType>({
        method: 'POST',
        url: API_BASE_PATH,
        data: item
      });
    } catch (error) {
      throw ApiError.from(error);
    }
  },

  createItem: async (item: Partial<DataItemType>): Promise<DataItemType> => {
    try {
      return await request<DataItemType>({
        method: 'POST',
        url: API_BASE_PATH,
        data: item
      });
    } catch (error) {
      throw ApiError.from(error);
    }
  },

  updateItem: async (id: string = '', updates: Partial<DataItemType>): Promise<DataItemType> => {
    try {
      return await request<DataItemType>({
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