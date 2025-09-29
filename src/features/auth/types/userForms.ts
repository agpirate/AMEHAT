// models/User.ts

/**
 * Base user interface with common properties for all auth types
 */

export interface BaseUser {
    id: string | null;                   // Unique user ID
    createdAt: Date | string;              // Account creation date
    updatedAt: Date | string;              // Last profile update
    lastLoginAt?: Date | string;           // Last successful login
    isActive: boolean;            // Account active status
    isVerified: boolean;          // Email verification status
    isBanned: boolean;            // Account banned status
    banReason?: string;           // Reason for ban if applicable
    role: 'user' | 'admin' | 'moderator' |  null;  // User role
    preferences: {                // User preferences
      theme: 'light' | 'dark';    // UI theme preference
      language: string;           // Preferred language
      notifications: {            // Notification settings
        email: boolean;
        push: boolean;
        sms: boolean;
      };
    };
  }
  
    // Default user creation schema
const defaultUserSchema = {
  id: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLoginAt: { type: Date },
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
  banReason: String,
  role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' },
  preferences: {
    theme: { type: String, enum: ['light', 'dark'], default: 'light' },
    language: { type: String, default: 'en' },
    notifications: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      sms: { type: Boolean, default: false }
    }
  }
};

  /**
   * Email/password authentication user
   */

  export interface EmailUser extends BaseUser {
    authType: 'email';            // Authentication type discriminator
    email: string;                // User email (unique)
    username: string;             // Username (unique)
    passwordHash: string;         // Hashed password (never store plain text)
    emailVerified: boolean;       // Email verification status
    verificationToken?: string;   // Email verification token
    verificationTokenExpiry?: Date | string; // Token expiry
    resetToken?: string;          // Password reset token
    resetTokenExpiry?: Date | string;      // Reset token expiry
  }
  const emailUserSchema = {
    ...defaultUserSchema,
    authType: { type: String, default: 'email' },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    verificationToken: String,
    verificationTokenExpiry: Date,
    resetToken: String,
    resetTokenExpiry: Date
  };


  /**
   * Google OAuth user
   */
  export interface GoogleUser extends BaseUser {
    authType: 'google';           // Authentication type discriminator
    googleId: string;             // Google user ID
    email: string;                // Google account email
    emailVerified: boolean;       // Verified by Google
    profile: {                    // Google profile data
      name: string;               // Full name
      givenName: string;          // First name
      familyName: string;         // Last name
      picture?: string;           // Profile picture URL
      locale?: string;            // Language/locale
    };
  }
  
  export interface AppleUser extends BaseUser {
    authType: 'apple';
    appleId: string;
    email: string;
    emailVerified: boolean;
    name?: {
      firstName: string;
      lastName: string;
    };
  }

  /**
   * Anonymous session user
   */
  export interface AnonymousUser extends BaseUser {
    authType: 'anonymous';        // Authentication type discriminator
    sessionToken: string;         // Anonymous session token
    deviceId: string;             // Device identifier
  }
  
  /**
   * Union type for all possible user types
   */
  export type UserForms = EmailUser | GoogleUser | AppleUser | AnonymousUser;
  
  /**
   * Type guard functions for checking user types
   */
  export function isEmailUser(user: UserForms): user is EmailUser {
    return user.authType === 'email';
  }
  
  export function isGoogleUser(user: UserForms): user is GoogleUser {
    return user.authType === 'google';
  }
  
  export function isAnonymousUser(user: UserForms): user is AnonymousUser {
    return user.authType === 'anonymous';
  }