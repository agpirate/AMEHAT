import { request } from '../../../core/services/api/apiClient';
import type { DataItem,ApiQueryParams } from '../types/stateTypes';
import { ApiError } from '../../../shared/types/errors';

const API_BASE_PATH = '/items';

export const apiService = {
  // Fetch all items with enhanced error handling
  fetchItems: async (params?: ApiQueryParams): Promise<{
    data: DataItem[];
    total: number;
  }> => {
    try {
      const response = await request<{
        data: DataItem[];
        pagination: { total: number };
      }>({
        method: 'GET',
        url: '/items',
        params
      });
      return {
        data: response.data,
        total: response.pagination.total
      };
    } catch (error) {
      throw ApiError.from(error);
    }
  },

  // Create new item with enhanced error handling
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

  // Similar enhanced error handling for other methods
  updateItem: async (id: string, updates: Partial<DataItem>): Promise<DataItem> => {
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