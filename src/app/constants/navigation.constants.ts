// src/app/constants/navigation.constants.ts
import {Platform} from 'react-native';

export const NAVIGATION_CONSTANTS = {
  // Animation constants
  ANIMATION: {
    DURATION: 300,
    SPRING_DAMPING: 0.8,
    SPRING_STIFFNESS: 100,
  },
  
  // Header constants
  HEADER: {
    HEIGHT: Platform.select({
      ios: 44,
      android: 56,
      default: 64,
    }),
    BACK_BUTTON_TITLE: 'Back',
  },
  
  // Tab bar constants
  TAB_BAR: {
    HEIGHT: Platform.select({
      ios: 83,
      android: 56,
      default: 60,
    }),
    ICON_SIZE: 24,
    LABEL_SIZE: 12,
  },
  
  // Transition presets
  TRANSITION_PRESETS: {
    MODAL: 'modal',
    SLIDE: 'slide',
    FADE: 'fade',
    NONE: 'none',
  },
} as const;