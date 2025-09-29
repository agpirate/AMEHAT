import { StyleSheet } from 'react-native';

/* -------border (lrtb) [ size (flat-xl) ; color( main theme-color )-----[ no transition,effect,event]---- */


/* --allside border(btlr)- (size(xxs;xl) [ grey ; grey150 ; grey175 ] [ hovercolor ]*/

  /* -------- xxs -------- */
/* all-side */
export const borderStyles = (theme) => StyleSheet.create({

  // flat border with colors
  border_flat: {
    borderWidth: 0,
    borderStyle: 'solid',
  },
  
  // All-side borders - xx-small
  border_xxs: {
    borderWidth: theme.border_xxs,
    borderStyle: 'solid',
  },
  

  // All-side borders - x-small
  border_xs: {
    borderWidth: theme.border_xs,
    borderStyle: 'solid',
  },
  
  // ... all xs variants

  // All-side borders - small
  border_sm: {
    borderWidth: theme.border_sm,
    borderStyle: 'solid',
  },
  // ... all sm variants

  // All-side borders - medium
  border_md: {
    borderWidth: theme.border_md,
    borderStyle: 'solid',
  },
  // ... all md variants

  // All-side borders - large
   // flat border with colors
  border_lg: {
    borderWidth: theme.border_lg,
    borderStyle: 'solid',
  },
  // ... all lg variants

  // All-side borders - x-large
  border_xl: {
    borderWidth: theme.border_xl,
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
  border_txs: {
    borderTopWidth: theme.border_xs,
  },
  border_tsm: {
    borderTopWidth: theme.border_sm,
  },
  border_tmd: {
    borderTopWidth: theme.border_md,
  },
  border_tlg: {
    borderTopWidth: theme.border_lg,
  },
  border_txl: {
    borderTopWidth: theme.border_xl,
  },

  // ... other top variants

  // Single side borders - left
 border_lxxs: {
    borderLeftWidth: theme.border_xxs,
  },
  border_lxs: {
    borderLeftWidth: theme.border_xs,
  },
  border_lsm: {
    borderLeftWidth: theme.border_sm,
  },
  border_lmd: {
    borderLeftWidth: theme.border_md,
  },
  border_llg: {
    borderLeftWidth: theme.border_lg,
  },
  border_lxl: {
    borderLeftWidth: theme.border_xl,
  },
  // ... other left variants

  // Single side borders - right
 border_rxxs: {
    borderRightWidth: theme.border_xxs,
  },
  border_rxs: {
    borderRightWidth: theme.border_xs,
  },
  border_rsm: {
    borderRightWidth: theme.border_sm,
  },
  border_rmd: {
    borderRightWidth: theme.border_md,
  },
  border_rlg: {
    borderRightWidth: theme.border_lg,
  },
  border_rxl: {
    borderRightWidth: theme.border_xl,
  },
  // ... other right variants

  // Double side borders - left + right
  border_horizontalxs: {
    borderLeftWidth: theme.border_md,
    borderRightWidth: theme.border_md,
  },
  border_horizontalsm: {
    borderLeftWidth: theme.border_md,
    borderRightWidth: theme.border_md,
  },
  border_horizontalmd: {
    borderLeftWidth: theme.border_md,
    borderRightWidth: theme.border_md,
  },

  // Double side borders - top + bottom
    border_verticalxxs: {
    borderTopWidth: theme.border_xxs,
    borderBottomWidth: theme.border_xxs,
  },
    border_verticalxs: {
    borderTopWidth: theme.border_xs,
    borderBottomWidth: theme.border_xs,
  },
  border_verticalmd: {
    borderTopWidth: theme.border_md,
    borderBottomWidth: theme.border_md,
  },
  // ... other top-bottom variants


  border_dark: {
    borderColor: theme.dark,
  },
  border_grey15: {
    borderColor: theme.grey15,
  },
  border_grey30: {
    borderColor: theme.grey30,
  },
  border_grey45: {
    borderColor: theme.grey45,
  },
  border_grey60: {
    borderColor: theme.grey60,
  },
  border_grey75: {
    borderColor: theme.grey75,
  },
  border_grey90: {
    borderColor: theme.grey90,
  },
  border_grey105: {
    borderColor: theme.grey105,
  },
  border_grey120: {
    borderColor: theme.grey120,
  },
    border_grey: {
    borderColor: theme.grey,
  },
  border_grey135: {
    borderColor: theme.grey135,
  },
    border_grey150: {
    borderColor: theme.grey150,
  },
  border_grey165: {
    borderColor: theme.grey165,
  },
      border_grey180: {
    borderColor: theme.grey190,
  },
  border_grey205: {
    borderColor: theme.grey205,
  },
      border_grey220: {
    borderColor: theme.grey220,
  },
  border_grey235: {
    borderColor: theme.grey235,
  },
        border_grey250: {
    borderColor: theme.grey250,
  },

  border_light: {
    borderColor: theme.light,
  },

  border_system: {
    borderColor: theme.system,
  },

    border_systemii: {
    borderColor: theme.border_systemii,
  },
});

export default borderStyles