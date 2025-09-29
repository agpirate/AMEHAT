/* Already Built Box + oflow - Box's Content ( subBox ) Layouting */
/* ALL,but 1 IN ONE CSS BOX */

    /* 5 prebuilt */
  /* BoxOveflow Managments */
  /* BoxPositioning Managments */
  /* BoxVisiblity Managments */
  /* Boxstyles */
  /* FontStyles  - dense*/

  /* 2 customizable -  */
  /* BoxSizing */
  /* SubBox Managments ( container Layouts) - Box Display */

/* display-flex layout method */

/* ----------------- */
/* 1D Flow Direction Row / Column */
/* .crow { flex-direction: row; }
.crow-reverse { flex-direction: row-reverse; }
.ccolumn { flex-direction: column; }
.ccolumn-reverse { flex-direction: column-reverse; } */

/* Listed Contents in that 1D ??? store is not enough in placing them all in 1D */
/* create newLine of that 1D  or create scroller(way out)*/
import { StyleSheet } from 'react-native';

export const flexStyles = (theme) => StyleSheet.create({
  // Flex wrap styles
  wrap: {
    flexWrap: 'wrap'
  },
  nowrap: {
    flexWrap: 'nowrap'
  },
  wrap_reverse: {
    flexWrap: 'wrap-reverse'
  },

  // Flex direction styles
  crow: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  crowwrap: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  ccolumn: {
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  ccolumnwrap: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },

  // Gap styles
  cgap_0: {
    gap: 0
  },
    cgap_xxs: {
    gap: theme.xxs
  },
  cgap_xs: {
    gap: theme.xs
  },
  cgap_sm: {
    gap: theme.sm
  },
  cgap_md: {
    gap: theme.md
  },
  cgap_lg: {
    gap: theme.lg
  },
  cgap_xl: {
    gap: theme.xl
  },

  // Justify content styles
  cj_start: {
    justifyContent: 'flex-start'
  },
  cj_end: {
    justifyContent: 'flex-end'
  },
  cj_center: {
    justifyContent: 'center'
  },
  cj_between: {
    justifyContent: 'space-between'
  },
  cj_around: {
    justifyContent: 'space-around'
  },
  cj_evenly: {
    justifyContent: 'space-evenly'
  },

    // Align content styles
    ca_start: {
      alignContent: 'flex-start'
    },
    ca_end: {
      alignContent: 'flex-end'
    },
    ca_center: {
      alignContent: 'center'
    },
    ca_between: {
      alignContent: 'space-between'
    },
    ca_around: {
      alignContent: 'space-around'
    },
    ca_evenly: {
      alignContent: 'space-evenly'
    },

  // Align items styles
  ia_start: {
    alignItems: 'flex-start'
  },
  ia_end: {
    alignItems: 'flex-end'
  },
  ia_center: {
    alignItems: 'center'
  },
  ia_baseline: {
    alignItems: 'baseline'
  },
  ia_stretch: {
    alignItems: 'stretch'
  },


  // Align self styles
  self_start: {
    alignSelf: 'flex-start'
  },
  self_end: {
    alignSelf: 'flex-end'
  },
  self_center: {
    alignSelf: 'center'
  },
  self_baseline: {
    alignSelf: 'baseline'
  },
  self_stretch: {
    alignSelf: 'stretch'
  }
});




