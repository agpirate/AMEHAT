import { StyleSheet } from 'react-native';

/* -------border (lrtb) [ size (flat-xl) ; color( main theme-color )-----[ no transition,effect,event]---- */


/* --allside border(btlr)- (size(xxs;xl) [ grey ; grey150 ; grey175 ] [ hovercolor ]*/

  /* -------- xxs -------- */
/* all-side */
export const borderStyles = (theme) => StyleSheet.create({

  // flat border with colors
  border_flat_dark: {
    borderWidth: 0,
    borderColor: theme.dark,
    borderStyle: 'solid',
  },
  border_flat_grey15: {
    borderWidth: 0,
    borderColor: theme.grey15,
    borderStyle: 'solid',
  },
  border_flat_grey30: {
    borderWidth: 0,
    borderColor: theme.grey30,
    borderStyle: 'solid',
  },
  border_flat_grey45: {
    borderWidth: 0,
    borderColor: theme.grey45,
    borderStyle: 'solid',
  },
  border_flat_grey60: {
    borderWidth: 0,
    borderColor: theme.grey60,
    borderStyle: 'solid',
  },
  border_flat_grey75: {
    borderWidth: 0,
    borderColor: theme.grey75,
    borderStyle: 'solid',
  },
  border_flat_grey90: {
    borderWidth: 0,
    borderColor: theme.grey90,
    borderStyle: 'solid',
  },
  border_flat_grey105: {
    borderWidth: 0,
    borderColor: theme.grey105,
    borderStyle: 'solid',
  },
  border_flat_grey120: {
    borderWidth: 0,
    borderColor: theme.grey120,
    borderStyle: 'solid',
  },
    border_flat_grey: {
    borderWidth: 0,
    borderColor: theme.grey,
    borderStyle: 'solid',
  },
  border_flat_grey135: {
    borderWidth: 0,
    borderColor: theme.grey135,
    borderStyle: 'solid',
  },
    border_flat_grey150: {
    borderWidth: 0,
    borderColor: theme.grey150,
    borderStyle: 'solid',
  },
  border_flat_grey165: {
    borderWidth: 0,
    borderColor: theme.grey165,
    borderStyle: 'solid',
  },
      border_flat_grey180: {
    borderWidth: 0,
    borderColor: theme.grey190,
    borderStyle: 'solid',
  },
  border_flat_grey205: {
    borderWidth: 0,
    borderColor: theme.grey205,
    borderStyle: 'solid',
  },
      border_flat_grey220: {
    borderWidth: 0,
    borderColor: theme.grey220,
    borderStyle: 'solid',
  },
  border_flat_grey235: {
    borderWidth: 0,
    borderColor: theme.grey235,
    borderStyle: 'solid',
  },
        border_flat_grey250: {
    borderWidth: 0,
    borderColor: theme.grey250,
    borderStyle: 'solid',
  },

  border_flat_light: {
    borderWidth: 0,
    borderColor: theme.light,
    borderStyle: 'solid',
  },



  border_flat_negative: {
    borderWidth: 0,
    borderColor: theme.negative,
    borderStyle: 'solid',
  },
  border_flat_positive: {
    borderWidth: 0,
    borderColor: theme.positive,
    borderStyle: 'solid',
  },
  border_flat_system: {
    borderWidth: 0,
    borderColor: theme.system,
    borderStyle: 'solid',
  },
    border_flat_systemii: {
    borderWidth: 0,
    borderColor: theme.systemii,
    borderStyle: 'solid',
  },
  // All-side borders - xx-small
  border_xxs_dark: {
    borderWidth: theme.border_xxs,
    borderColor: theme.dark,
    borderStyle: 'solid',
  },
  border_xxs_grey25: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey25,
    borderStyle: 'solid',
  },
  border_xxs_grey50: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey50,
    borderStyle: 'solid',
  },
  border_xxs_grey75: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey75,
    borderStyle: 'solid',
  },
  border_xxs_grey100: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey100,
    borderStyle: 'solid',
  },
  border_xxs_grey150: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey150,
    borderStyle: 'solid',
  },
  border_xxs_grey175: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey175,
    borderStyle: 'solid',
  },
  border_xxs_grey200: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey200,
    borderStyle: 'solid',
  },
  border_xxs_grey225: {
    borderWidth: theme.border_xxs,
    borderColor: theme.grey225,
    borderStyle: 'solid',
  },
  border_xxs_light: {
    borderWidth: theme.border_xxs,
    borderColor: theme.light,
    borderStyle: 'solid',
  },



  border_xxs_negative: {
    borderWidth: theme.border_xxs,
    borderColor: theme.negative,
    borderStyle: 'solid',
  },
  border_xxs_positive: {
    borderWidth: theme.border_xxs,
    borderColor: theme.positive,
    borderStyle: 'solid',
  },
    border_xxs_system: {
    borderWidth: theme.border_xxs,
    borderColor: theme.system,
    borderStyle: 'solid',
  },
  border_xxs_systemii: {
    borderWidth: theme.border_xxs,
    borderColor: theme.systemii,
    borderStyle: 'solid',
  },

  // All-side borders - x-small
  border_xs_system: {
    borderWidth: theme.border_xs,
    borderColor: theme.system,
    borderStyle: 'solid',
  },
  
  border_xs_dark: {
    borderWidth: theme.border_xs,
    borderColor: theme.dark,
    borderStyle: 'solid',
  },
  border_xs_grey25: {
    borderWidth: theme.border_xs,
    borderColor: theme.grey25,
    borderStyle: 'solid',
  },
  // ... all xs variants

  // All-side borders - small
  border_sm_system: {
    borderWidth: theme.border_sm,
    borderColor: theme.system,
    borderStyle: 'solid',
  },
  border_sm_dark: {
    borderWidth: theme.border_sm,
    borderColor: theme.dark,
    borderStyle: 'solid',
  },
  // ... all sm variants

  // All-side borders - medium
  border_md_system: {
    borderWidth: theme.border_md,
    borderColor: theme.system,
    borderStyle: 'solid',
  },
  border_md_dark: {
    borderWidth: theme.border_md,
    borderColor: theme.dark,
    borderStyle: 'solid',
  },
  // ... all md variants

  // All-side borders - large
   // flat border with colors
  border_lg_dark: {
    borderWidth: theme.border_lg,
    borderColor: theme.dark,
    borderStyle: 'solid',
  },
  border_lg_grey15: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey15,
    borderStyle: 'solid',
  },
  border_lg_grey30: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey30,
    borderStyle: 'solid',
  },
  border_lg_grey45: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey45,
    borderStyle: 'solid',
  },
  border_lg_grey60: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey60,
    borderStyle: 'solid',
  },
  border_lg_grey75: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey75,
    borderStyle: 'solid',
  },
  border_lg_grey90: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey90,
    borderStyle: 'solid',
  },
  border_lg_grey105: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey105,
    borderStyle: 'solid',
  },
  border_lg_grey120: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey120,
    borderStyle: 'solid',
  },
    border_lg_grey: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey,
    borderStyle: 'solid',
  },
  border_lg_grey135: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey135,
    borderStyle: 'solid',
  },
    border_lg_grey150: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey150,
    borderStyle: 'solid',
  },
  border_lg_grey165: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey165,
    borderStyle: 'solid',
  },
      border_lg_grey180: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey190,
    borderStyle: 'solid',
  },
  border_lg_grey205: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey205,
    borderStyle: 'solid',
  },
      border_lg_grey220: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey220,
    borderStyle: 'solid',
  },
  border_lg_grey235: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey235,
    borderStyle: 'solid',
  },
        border_lg_grey250: {
    borderWidth: theme.border_lg,
    borderColor: theme.grey250,
    borderStyle: 'solid',
  },

  border_lg_light: {
    borderWidth: theme.border_lg,
    borderColor: theme.light,
    borderStyle: 'solid',
  },

  border_lg_system: {
    borderWidth: theme.border_lg,
    borderColor: theme.system,
    borderStyle: 'solid',
  },
  // ... all lg variants

  // All-side borders - x-large
  border_xl_system: {
    borderWidth: theme.border_xl,
    borderColor: theme.system,
    borderStyle: 'solid',
  },
  border_xl_dark: {
    borderWidth: theme.border_xl,
    borderColor: theme.dark,
    borderStyle: 'solid',
  },
  // ... all xl variants

  //for single side ; just select flat with color & pick sided border width
  // Single side borders - bottom
  border_bxxs: {
    borderBottomWidth: theme.border_xxs,
  },
  border_bxs: {
    borderBottomWidth: theme.border_xs,
  },
  border_bsm: {
    borderBottomWidth: theme.border_sm,
  },
  border_bmd: {
    borderBottomWidth: theme.border_md,
  },
  border_blg: {
    borderBottomWidth: theme.border_lg,
  },
  border_bxl: {
    borderBottomWidth: theme.border_xl,
  },
  // Single side borders - top
  border_txxs: {
    borderTopWidth: theme.border_xxs,
  },
  // ... other top variants

  // Single side borders - left
  border_lxxs: {
    borderLeftWidth: theme.border_xxs,
  },
  // ... other left variants

  // Single side borders - right
  border_rxxs: {
    borderRightWidth: theme.border_xxs,
  },
  // ... other right variants

  // Double side borders - left + right
  border_lrxs: {
    borderLeftWidth: theme.border_md,
    borderRightWidth: theme.border_md,
  },
  border_lrsm: {
    borderLeftWidth: theme.border_md,
    borderRightWidth: theme.border_md,
  },
  border_lrmd: {
    borderLeftWidth: theme.border_md,
    borderRightWidth: theme.border_md,
  },

  // Double side borders - top + bottom
  border_tbmd: {
    borderTopWidth: theme.border_md,
    borderBottomWidth: theme.border_md,
  },
  // ... other top-bottom variants
});