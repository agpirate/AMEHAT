// store/index.ts
import { configureStore ,ThunkAction, Action} from '@reduxjs/toolkit';
import userStoreInstance, { AuthActions } from '../../features/auth/stores/slices/userComputor';
// Import other reducers if you have them

const store = configureStore({

  reducer: {
    authStore: userStoreInstance,
    // Add other reducers here
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ['payload.createdAt', 'payload.lastLoginAt', 'payload.verificationTokenExpires', 'payload.resetPasswordExpires'],
  //       // Ignore these paths in the state
  //       ignoredPaths: ['auth.currentUser.createdAt', 'auth.currentUser.lastLoginAt', 'auth.currentUser.verificationTokenExpires', 'auth.currentUser.resetPasswordExpires'],
  //     },
  //   }),
});

// Root state type
export type storesDataObj = ReturnType<typeof store.getState>;  
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch type
export type storesComputorProvider = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch;

// Root action type (combine all action types from different slices)
export type RootAction = AuthActions; // Add other slice actions here with union type


export default store;

// AppThunk type for thunks
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootAction
>;

