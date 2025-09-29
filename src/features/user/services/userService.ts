// src/services/userService.ts
import { request } from '../../../core/services/api/apiClient';
import { User, CreateUserDto, UpdateUserDto } from '../types/user';

const UserService = {
  // Get all users
  getAll: async (): Promise<User[]> => {
    return request<User[]>({
      method: 'GET',
      url: '/users',
    });
  },

  // Get single user
  getById: async (id: string): Promise<User> => {
    return request<User>({
      method: 'GET',
      url: `/users/${id}`,
    });
  },

  // Create user
  create: async (userData: CreateUserDto): Promise<User> => {
    return request<User>({
      method: 'POST',
      url: '/users',
      data: userData,
    });
  },

  // Update user
  update: async (id: string, updates: UpdateUserDto): Promise<User> => {
    return request<User>({
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
  search: async (query: string): Promise<User[]> => {
    return request<User[]>({
      method: 'GET',
      url: '/users/search',
      params: { q: query },
    });
  },
};

export default UserService;