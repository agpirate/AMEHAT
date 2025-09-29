import { StyleSheet } from 'react-native';

export const textStyles = (theme) => StyleSheet.create({
  // Note: React Native doesn't support CSS transitions natively
  // Color changes will be immediate unless you use Animated
  
  font_tr: {
    color: theme.primary,
  },
  font_primary: {
    color: theme.primary,
  },
  font_secondary: {
    color: theme.secondary,
  },
  font_system: {
    color: theme.system,
  },
    font_systemii: {
    color: theme.systemii,
  },
  font_system_secondary: {
    color: theme.system_secondary,
  },
  font_dark: {
    color: theme.dark,
  },
  font_grey50: {
    color: theme.grey50,
  },
  font_grey75: {
    color: theme.grey75,
  },
  font_grey100: {
    color: theme.grey100,
  },
  font_grey: {
    color: theme.grey,
  },
  font_grey150: {
    color: theme.grey150,
  },
  font_grey175: {
    color: theme.grey175,
  },
  font_grey200: {
    color: theme.grey200,
  },
  font_grey225: {
    color: theme.grey225,
  },
  font_light: {
    color: theme.light,
  },
  font_negative: {
    color: theme.negative,
  },
  font_warning: {
    color: theme.warning,
  },
  font_info: {
    color: theme.info,
  },
  font_positive: {
    color: theme.positive,
  },
  
  // Text shadow variants (React Native has limited shadow support)
  font_with_shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  font_with_light_shadow: {
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  }
});