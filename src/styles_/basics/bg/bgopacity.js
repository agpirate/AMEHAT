import { StyleSheet } from 'react-native';

export const backgroundBlurStyles = (theme) => StyleSheet.create({
  // Note: React Native doesn't support backdrop-filter natively
  // These are fallbacks that approximate the effect
  
  bgo_flat: {
    backgroundColor: 'transparent',
    // No blur effect in React Native
    opacity: 1
  },
  
  bgo_xxs: {
    backgroundColor: 'transparent',
    // Simulate slight blur with opacity (Android only)
    opacity: Platform.OS === 'android' ? 0.95 : 1,
    // iOS alternative using visualEffectView would need a native component
  },
  
  bgo_xs: {
    backgroundColor: 'transparent',
    opacity: Platform.OS === 'android' ? 0.9 : 1
  },
  
  bgo_sm: {
    backgroundColor: 'transparent',
    opacity: Platform.OS === 'android' ? 0.85 : 1
  },
  
  bgo_md: {
    backgroundColor: 'transparent',
    opacity: Platform.OS === 'android' ? 0.8 : 1
  },
  
  bgo_lg: {
    backgroundColor: 'transparent',
    opacity: Platform.OS === 'android' ? 0.7 : 1
  },
  
  bgo_xl: {
    backgroundColor: 'transparent',
    opacity: Platform.OS === 'android' ? 0.6 : 1
  }
});