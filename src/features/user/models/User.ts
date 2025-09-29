// models/User.ts
export type UserStatus = 
  | 'idle'
  | 'loading'
  | 'error'
  | 'success';

export type UserActiveSubStatus = 
  | 'none'
  | 'creating'
  | 'updating'
  | 'viewing_details'
  | 'deleting';

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserState {
  users: User[];
  currentUser: User | null;
  status: UserStatus;
  error: string | null;
  active: {
    subStatus: UserActiveSubStatus;
    progress?: number; // For tracking progress of operations
    context?: any; // Additional context for the current operation
  };
}