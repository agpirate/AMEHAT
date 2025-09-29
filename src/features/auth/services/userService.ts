// src/services/userService.ts
import { request } from '../../../shared/services/api/apiClient';
import { UserForms,EmailUser } from '../types/userForms';

const UserService = {
  // Get all users
  getAll: async (): Promise<UserForms[]> => {
    return request<UserForms[]>({
      method: 'GET',
      url: '/users',
    });
  },

  // Get single user
  getById: async (id: string): Promise<UserForms> => {
    return request<UserForms>({
      method: 'GET',
      url: `/users/${id}`,
    });
  },


    // Auth user
    login: async (userData: any): Promise<EmailUser> => {
      return request<EmailUser>({
        method: 'POST',
        url: '/login',
        data: userData,
      });
    },

  
  // Create user
  create: async (userData: any): Promise<any> => {
    return request<any>({
      method: 'POST',
      url: '/users',
      data: userData,
    });
  },

  // Update user
  update: async (id: string, updates: any): Promise<any> => {
    return request<any>({
      method: 'PATCH',
      url: `/users/${id}`,
      data: updates,
    });
  },

  // Delete user
  delete: async (id: string): Promise<void> => {
    return request<void>({
      method: 'DELETE',
      url: `/users/${id}`,
    });
  },

  // Custom endpoints
  search: async (query: string): Promise<UserForms[]> => {
    return request<UserForms[]>({
      method: 'GET',
      url: '/users/search',
      params: { q: query },
    });
  },
};

export default UserService;