// src/app/config/theme.ts
import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 999,
} as const;

export const LAYOUT = {
  screenWidth: width,
  screenHeight: height,
  isSmallDevice: width < 375,
  isLargeDevice: width > 768,
} as const;

// Light Theme
export const LIGHT_THEME = {
  colors: {
    primary: '#0066FF',
    primaryDark: '#0052CC',
    primaryLight: '#4D94FF',
    
    secondary: '#6C757D',
    secondaryDark: '#545B62',
    secondaryLight: '#8A9399',
    
    background: '#FFFFFF',
    surface: '#F8F9FA',
    card: '#FFFFFF',
    
    text: {
      primary: '#212529',
      secondary: '#6C757D',
      disabled: '#ADB5BD',
      inverse: '#FFFFFF',
    },
    
    status: {
      success: '#28A745',
      warning: '#FFC107',
      error: '#DC3545',
      info: '#17A2B8',
    },
    
    border: '#DEE2E6',
    divider: '#E9ECEF',
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  layout: LAYOUT,
} as const;

// Dark Theme
export const DARK_THEME = {
  ...LIGHT_THEME,
  colors: {
    ...LIGHT_THEME.colors,
    background: '#121212',
    surface: '#1E1E1E',
    card: '#2D2D2D',
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#666666',
      inverse: '#121212',
    },
    border: '#333333',
    divider: '#2A2A2A',
  },
} as const;

export type Theme = typeof LIGHT_THEME;
export type ThemeColors = keyof typeof LIGHT_THEME.colors;