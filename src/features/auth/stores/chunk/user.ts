  import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
  import { UserForms, EmailUser, GoogleUser, AnonymousUser } from '../../types/userForms.ts';
  import { RegAuthForm } from '../../types/RegAuthForms.ts';


  
  import {UserService} from '../../services/index.ts';

    /**
   * Async thunk for email/password login
   */
  export const loginWithEmail = createAsyncThunk<
  EmailUser | null, // Return type
  Partial<RegAuthForm['login']>, // Argument type
  { rejectValue: string } // Reject type
>(
  'auth/loginWithEmail',
  async (credentials:Partial<RegAuthForm['login']>, { rejectWithValue }) => {
    try {

      console.log(credentials,'')
      const user =  null
      // request<any>({
      //   method: 'POST',
      //   url: '/login',
      //   data: credentials,
      // });

      return user; // Must match EmailUser type
    } catch (error) {
      return rejectWithValue('');
    }
  }
);

  /**
   * Async thunk for user registration
   */
  export const register = createAsyncThunk <
  UserForms, // Return type
  RegAuthForm['signup'], // Argument type
  { rejectValue: string | null } // Reject type
>(
    'auth/register',
    async (userData: RegAuthForm['signup'], { rejectWithValue }) => {
      try {
        const user = await UserService.create(userData);
        return user;
      } catch (error) {
        return rejectWithValue('');
      }
    }
  );
  
  /**
   * Async thunk for Google authentication
   */
  // export const loginWithGoogle = createAsyncThunk(
  //   'auth/loginWithGoogle',
  //   async (googleToken: string, { rejectWithValue }) => {
  //     try {
  //       const user = await authAPI.loginWithGoogle(googleToken);
  //       return user;
  //     } catch (error) {
  //       return rejectWithValue('');
  //     }
  //   }
  // );