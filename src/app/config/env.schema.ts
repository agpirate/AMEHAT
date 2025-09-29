import {z} from 'zod';

// Environment variable schema validation
const envSchema = z.object({
  // App Config
  APP_NAME: z.string().min(1, "APP_NAME is required"),
  APP_SCHEME: z.string().min(1, "APP_SCHEME is required"),
  APP_BUNDLE_ID: z.string().min(1, "APP_BUNDLE_ID is required"),
  
  // API Config
  API_BASE_URL: z.string().url("API_BASE_URL must be a valid URL"),
  API_TIMEOUT: z.string().transform(Number).refine((n) => n > 0, "API_TIMEOUT must be positive"),
  API_VERSION: z.string().min(1, "API_VERSION is required"),
  
  // Features
  ENABLE_ANALYTICS: z.string().transform((val) => val === 'true'),
  ENABLE_CRASH_REPORTING: z.string().transform((val) => val === 'true'),
  ENABLE_DEBUG_MODE: z.string().transform((val) => val === 'true'),
  
  // Third-party Services (optional in dev)
  SENTRY_DSN: z.string().optional(),
  AMPLITUDE_API_KEY: z.string().min(1, "AMPLITUDE_API_KEY is required"),
  GOOGLE_WEB_CLIENT_ID: z.string().min(1, "GOOGLE_WEB_CLIENT_ID is required"),
  
  // Security
  ENCRYPTION_KEY: z.string().min(16, "ENCRYPTION_KEY must be at least 16 characters"),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  
  // Logging
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug', 'verbose']),
  
  // Platform-specific (will be set at runtime)
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

// Type for our validated environment
export type EnvConfig = z.infer<typeof envSchema>;

// Validation function
export const validateEnv = (envVars: Record<string, string | undefined>): EnvConfig => {
  try {
    return envSchema.parse(envVars);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = (error.issues as [any]).map(err => `${err.path[0]}: ${err.message}`);
      throw new Error(`Environment validation failed:\n${missingVars.join('\n')}`);
    }
    throw error;
  }
};