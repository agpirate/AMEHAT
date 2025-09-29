import { StyleSheet } from 'react-native';

export const textDisplay = (theme) => StyleSheet.create({
  // Note: React Native doesn't support CSS transitions natively
  // Color changes will be immediate unless you use Animated
  
  // Text alignment utilities
  fj_start: {
    textAlign: 'left'
  },
  fj_center: {
    textAlign: 'center'
  },
  fj_end: {
    textAlign: 'right'
  },

  // Vertical alignment (React Native alternative)
  fa_start: {
    textAlignVertical: 'top'
  },
  fa_center: {
    textAlignVertical: 'center'
  },
  fa_end: {
    textAlignVertical: 'bottom'
  },

  // Margin alignment
  fj_auto: {
    marginHorizontal: 'auto'
  },
  fa_auto: {
    marginVertical: 'auto'
  },
  fja_auto: {
    marginHorizontal: 'auto',
    marginVertical: 'auto'
  },
      // Line heights
  flineHeight_xxs: {
    lineHeight: theme.fontLine_xxs
  },
  flineHeight_xs: {
    lineHeight: theme.fontLine_xs
  },
  flineHeight_sm: {
    lineHeight: theme.fontLine_sm
  },
  flineHeight_md: {
    lineHeight: theme.fontLine_md
  },

});

export default textDisplay