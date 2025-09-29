

import {UserForms,EmailUser,GoogleUser,AppleUser,AnonymousUser } from '../types/userForms';

// Registerred User Model
export const UserModel_Registered:EmailUser = 
{
  id: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  lastLoginAt: new Date().toISOString(),
  isActive: true,
  isVerified: false,
  isBanned: false,
  banReason: '',
  role: null,
  preferences: {
    theme:'light',
    language: 'en',
    notifications: {
      email: true,
      push: true,
      sms: true
    }
  },

  authType: 'email',           // Authentication type discriminator
  email: 'saytotsegay@gmail.com',               // User email (unique)
  username: 'saytotsegay',             // Username (unique)
  passwordHash: '',         // Hashed password (never store plain text)
  emailVerified: false,       // Email verification status
  verificationToken: '',   // Email verification token
  verificationTokenExpiry: new Date().toISOString(), // Token expiry
  resetToken: '',       // Password reset token
  resetTokenExpiry: new Date().toISOString(),   // Reset token expiry
}

// Registerred User Model
export const UserModel_Google:GoogleUser = 
{
    id: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
    isActive: true,
    isVerified: false,
    isBanned: false,
    banReason: '',
    role: null,
    preferences: {
        theme: 'light',
        language: 'en',
        notifications: {
            email: true,
            push: true,
            sms: true
        }
    },

    authType: 'google', // Authentication type discriminator
    email: 'saytotsegay@gmail.com', // User email (unique)
    emailVerified: false, // Email verification status

    // Removed googleId as it is not part of AppleUser
    profile: {
        name: 'Saytotsegay',
        picture: 'https://example.com/profile.jpg',
        givenName: '',
        familyName: ''
    },
    googleId: ''
}


export const UserModel_Apple:AppleUser = 
{
  id: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  lastLoginAt: new Date().toISOString(),
  isActive: true,
  isVerified: false,
  isBanned: false,
  banReason: '',
  role: null,
  preferences: {
    theme:'light',
    language: 'en',
    notifications: {
      email: true,
      push: true,
      sms: true
    }
  },

  authType: 'apple',           // Authentication type discriminator
  email: 'saytotsegay@gmail.com',               // User email (unique)
  emailVerified: false,       // Email verification status
  appleId:''

}

export const UserModel_Annonymouse:AnonymousUser = 
{
    id: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
    isActive: true,
    isVerified: false,
    isBanned: false,
    banReason: '',
    role: null,
    preferences: {
        theme: 'light',
        language: 'en',
        notifications: {
            email: true,
            push: true,
            sms: true
        }
    },

    authType: 'anonymous',
    sessionToken: '',
    deviceId: ''
}