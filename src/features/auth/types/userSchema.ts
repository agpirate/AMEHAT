// features/auth/authSchemas.ts
interface FieldSchema {
    type: string;
    required?: boolean;
    unique?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    validate?: (value: string, allValues?: Record<string, any>) => string | undefined;
  }
  
  export interface AuthSchemas {
    login: {
      email: FieldSchema;
      password: FieldSchema;
    };
    signup: {
      email: FieldSchema;
      username: FieldSchema;
      password: FieldSchema;
      confirmPassword: FieldSchema;
    };
  }
  
  export const authSchemas: AuthSchemas = {
    login: {
      email: {
        type: 'string',
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        validate: (value) => {
          if (!value) return 'Email is required';
          if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            return 'Invalid email format';
          }
          return undefined;
        }
      },
      password: {
        type: 'string',
        required: true,
        minLength: 8,
        validate: (value) => {
          if (!value) return 'Password is required';
          if (value.length < 8) return 'Password must be at least 8 characters';
          if (!/[A-Z]/.test(value)) return 'Must contain at least one uppercase letter';
          if (!/[a-z]/.test(value)) return 'Must contain at least one lowercase letter';
          if (!/[0-9]/.test(value)) return 'Must contain at least one number';
          return undefined;
        }
      }
    },
    signup: {
      email: {
        type: 'string',
        required: true,
        unique: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      },
      username: {
        type: 'string',
        required: true,
        unique: true,
        pattern: /^[a-zA-Z0-9._-]{3,}$/,
        validate: (value) => {
          if (!value) return 'Username is required';
          if (value.length < 3) return 'Username must be at least 3 characters';
          if (!/^[a-zA-Z0-9._-]+$/.test(value)) {
            return 'Only letters, numbers, ., - and _ allowed';
          }
          return undefined;
        }
      },
      password: {
        type: 'string',
        required: true,
        minLength: 8,
        validate: (value) => {
          if (!value) return 'Password is required';
          if (value.length < 8) return 'Password must be at least 8 characters';
          if (!/[A-Z]/.test(value)) return 'Must contain at least one uppercase letter';
          if (!/[a-z]/.test(value)) return 'Must contain at least one lowercase letter';
          if (!/[0-9]/.test(value)) return 'Must contain at least one number';
          if (!/[^A-Za-z0-9]/.test(value)) return 'Must contain at least one special character';
          return undefined;
        }
      },
      confirmPassword: {
        type: 'string',
        required: true,
        validate: (value, allValues) => {
          if (!value) return 'Please confirm your password';
          if (value !== allValues?.password) return 'Passwords do not match';
          return undefined;
        }
      }
    }
  };