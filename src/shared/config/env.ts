import { Platform } from 'react-native';

export const ENV = {
  IS_DEV: __DEV__,
  IS_IOS: Platform.OS === 'ios',
  IS_ANDROID: Platform.OS === 'android',
};