// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import computorFunc from './slices/userSlice';
// Import other reducers if you have them


const store = configureStore({

  reducer: {
    auth: computorFunc,
    // Add other reducers here
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.createdAt', 'payload.lastLoginAt', 'payload.verificationTokenExpires', 'payload.resetPasswordExpires'],
        // Ignore these paths in the state
        ignoredPaths: ['auth.currentUser.createdAt', 'auth.currentUser.lastLoginAt', 'auth.currentUser.verificationTokenExpires', 'auth.currentUser.resetPasswordExpires'],
      },
    }),
});

export type storesDataObj = ReturnType<typeof store.getState>;  //for all
export type storesComputorProvider = typeof store.dispatch;

export default store;