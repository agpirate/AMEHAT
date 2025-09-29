// src/models/user.ts
export interface User {
    id: string;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // DTOs (Data Transfer Objects)
  export interface CreateUserDto {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }
  
  export interface UpdateUserDto {
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
  }
  
  // Response types
  export interface UserResponse {
    data: User;
    message?: string;
  }
  
  export interface UsersResponse {
    data: User[];
    count: number;
    page: number;
    limit: number;
  }