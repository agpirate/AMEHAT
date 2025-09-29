import { StyleSheet } from 'react-native';

export const textStyles = (theme) => StyleSheet.create({
  // Note: React Native doesn't support CSS transitions natively
  // Color changes will be immediate unless you use Animated
  
    // Font families
    ffamily_system: {
      fontFamily: theme.fontFamilly_system
    },
    ffamily_a: {
      fontFamily: theme.font_familya
    },
    ffamily_b: {
      fontFamily: theme.font_familyb
    },
    ffamily_c: {
      fontFamily: theme.font_familyc
    },

  // Child element styles
  caption: {
    fontWeight: theme.fontWeight_normal
  },
  span: {
    fontWeight: theme.fontWeight_normal
  },
  fweight_light:{ fontWeight: theme.fontWeight_light },
  fweight_normal:{ fontWeight: theme.fontWeight_normal },
  fweight_bold:{ fontWeight: theme.fontWeight_bold },
  fweight_bolder:{ fontWeight: '900' },

  fweight_h1:{ fontWeight: theme.fontWeight_h1 },
  fweight_h2:{ fontWeight: theme.fontWeight_h2 },
  fweight_h3:{ fontWeight: theme.fontWeight_h3 },
  fweight_h4:{ fontWeight: theme.fontWeight_h4 },
  fweight_h5:{ fontWeight: theme.fontWeight_h5 },
  fweight_h6:{ fontWeight: theme.fontWeight_h6 },
  fweight_h7:{ fontWeight: theme.fontWeight_h7 },
  fweight_h8:{ fontWeight: theme.fontWeight_h8 },
  fweight_h9:{ fontWeight: theme.fontWeight_h9 },
  fweight_h10:{ fontWeight: theme.fontWeight_h10 },
  fweight_h11:{ fontWeight: theme.fontWeight_h11 },
  fweight_h12:{ fontWeight: theme.fontWeight_h12 },


  // Text transformations
  fcase_upper: {
    textTransform: 'uppercase'
  },
  fcase_lower: {
    textTransform: 'lowercase'
  },
  fcase_capitalize: {
    textTransform: 'capitalize'
  },



    // Font -  coloring 
    fcolor_tr: {
      color: theme.tr,
    },
    fcolor_primary: {
      color: theme.primary,
    },
    fcolor_secondary: {
      color: theme.secondary,
    },
    fcolor_system: {
      color: theme.system,
    },
    fcolor_content: {
      color: theme.content_text,
    },
    fcolor_systemii: {
      color: theme.systemii,
    },
    fcolor_system_secondary: {
      color: theme.system_secondary,
    },
    
    fcolor_dark: {
      color: theme.dark,
    },

    fcolor_grey15: {
      color: theme.grey15,
    },
    fcolor_grey30: {
      color: theme.grey30,
    },
    fcolor_grey45: {
      color: theme.grey45,
    },
    fcolor_grey60: {
      color: theme.grey60,
    },
    fcolor_grey75: {
      color: theme.grey75,
    },
    fcolor_grey90: {
      color: theme.grey90,
    },
    fcolor_grey105: {
      color: theme.grey105,
    },
    fcolor_grey: {
      color: theme.grey,
    },
    fcolor_grey100: {
      color: theme.grey120,
    },

    fcolor_grey135: {
      color: theme.grey135,
    },
    fcolor_grey150: {
      color: theme.grey150,
    },
    fcolor_grey165: {
      color: theme.grey165,
    },
    fcolor_grey180: {
      color: theme.grey180,
    },
    fcolor_grey195: {
      color: theme.grey195,
    },
    fcolor_grey210: {
      color: theme.grey210,
    },
    fcolor_grey225: {
      color: theme.grey225,
    },
    fcolor_grey240: {
      color: theme.grey240,
    },

    fcolor_light: {
      color: theme.light,
    },

    fcolor_negative: {
      color: theme.negative,
    },
    fcolor_warning: {
      color: theme.warning,
    },
    fcolor_info: {
      color: theme.info,
    },
    fcolor_positive: {
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

export default textStyles