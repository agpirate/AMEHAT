/**
 * Interface for authentication session
 */
export interface ActiveUserSession {
    id: string;
    deviceInfo: {
      os: string;
      browser?: string;
      device?: string;
      ipAddress: string;
      location?: string;
    };
    createdAt: Date;
    lastActive: Date;
    isCurrent: boolean;
  }