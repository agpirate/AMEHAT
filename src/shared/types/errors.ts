// src/types/errors.ts
import { AxiosError } from 'axios';

export interface ApiErrorResponse {
  code?: string;
  message?: string;
  details?: any;
}

export function isAxiosError(error: unknown): error is AxiosError<ApiErrorResponse> {
  return (error as AxiosError).isAxiosError === true;
}
// src/types/errors.ts
export class ApiError extends Error {
    constructor(
      public readonly status: number,
      public readonly code: string,
      message: string,
      public readonly details?: unknown
    ) {
      super(message);
      this.name = 'ApiError';
    }
  
    static from(error: unknown): ApiError {
      if (isAxiosError(error)) {
        return new ApiError(
          error.response?.status || 500,
          error.response?.data?.code || 'UNKNOWN_ERROR',
          error.response?.data?.message || error.message,
          error.response?.data?.details
        );
      }
  
      if (error instanceof Error) {
        return new ApiError(500, 'INTERNAL_ERROR', error.message);
      }
  
      return new ApiError(500, 'UNKNOWN_ERROR', 'An unknown error occurred');
    }
  }