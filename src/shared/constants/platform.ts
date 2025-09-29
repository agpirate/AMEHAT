// constants/platform.ts
import {Platform} from 'react-native';

export const PLATFORM = {
  IS_IOS: Platform.OS === 'ios',
  IS_ANDROID: Platform.OS === 'android',
  OS_VERSION: Platform.Version,
  FONTS: {
    REGULAR: Platform.select({
      ios: 'SFProText-Regular',
      android: 'Roboto-Regular',
    }),
  },
} as const;