import {Platform} from 'react-native';
import {validateEnv, type EnvConfig} from './env.schema';

// Import react-native-config
import Config from 'react-native-config';

class EnvironmentManager {
  private config: EnvConfig;
  
  constructor() {
    // Validate environment variables on app start
    this.config = validateEnv({
      APP_NAME: Config.APP_NAME,
      APP_SCHEME: Config.APP_SCHEME,
      APP_BUNDLE_ID: Config.APP_BUNDLE_ID,
      API_BASE_URL: Config.API_BASE_URL,
      API_TIMEOUT: Config.API_TIMEOUT,
      API_VERSION: Config.API_VERSION,
      ENABLE_ANALYTICS: Config.ENABLE_ANALYTICS,
      ENABLE_CRASH_REPORTING: Config.ENABLE_CRASH_REPORTING,
      ENABLE_DEBUG_MODE: Config.ENABLE_DEBUG_MODE,
      SENTRY_DSN: Config.SENTRY_DSN,
      AMPLITUDE_API_KEY: Config.AMPLITUDE_API_KEY,
      GOOGLE_WEB_CLIENT_ID: Config.GOOGLE_WEB_CLIENT_ID,
      ENCRYPTION_KEY: Config.ENCRYPTION_KEY,
      JWT_SECRET: Config.JWT_SECRET,
      LOG_LEVEL: Config.LOG_LEVEL,
      NODE_ENV: Config.NODE_ENV,
    });
    
    this.logEnvironment();
  }
  
  private logEnvironment(): void {
    if (this.isDev) {
      console.log('🔧 Environment Configuration:', {
        environment: this.environment,
        apiBaseUrl: this.config.API_BASE_URL,
        debugMode: this.config.ENABLE_DEBUG_MODE,
      });
    }
  }
  
  // Getters for easy access
  get environment(): string {
    return this.config.NODE_ENV;
  }
  
  get isDev(): boolean {
    return this.environment === 'development';
  }
  
  get isStaging(): boolean {
    return this.environment === 'staging';
  }
  
  get isProd(): boolean {
    return this.environment === 'production';
  }
  
  get isTest(): boolean {
    return this.environment === 'test';
  }
  
  // Platform helpers
  get isIOS(): boolean {
    return Platform.OS === 'ios';
  }
  
  get isAndroid(): boolean {
    return Platform.OS === 'android';
  }
  
  // Feature flags with runtime checks
  get shouldEnableAnalytics(): boolean {
    return this.config.ENABLE_ANALYTICS && !this.isTest;
  }
  
  get shouldEnableCrashReporting(): boolean {
    return this.config.ENABLE_CRASH_REPORTING && (this.isStaging || this.isProd);
  }
  
  get shouldShowDebugTools(): boolean {
    return this.config.ENABLE_DEBUG_MODE && this.isDev;
  }
  
  // API configuration
  get apiConfig() {
    return {
      baseURL: this.config.API_BASE_URL,
      timeout: this.config.API_TIMEOUT,
      version: this.config.API_VERSION,
      headers: {
        'X-APP-NAME': this.config.APP_NAME,
        'X-APP-VERSION': this.config.API_VERSION,
        'X-PLATFORM': Platform.OS,
      },
    };
  }
  
  // Get raw config (use sparingly)
  get rawConfig(): Readonly<EnvConfig> {
    return Object.freeze({...this.config});
  }
}

// Singleton instance
export const ENV = new EnvironmentManager();

// Type exports
export type {EnvConfig};