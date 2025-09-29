/* 
  if overflow [allow x/y/both scroll behaviourse ] or [ ignore overflow ]
              if overflow ok : scrollbar ( hide / manage size)

              -----------------------
   overflow enabled ;- x/y/xy direction ;- barStyle(flat-sizes) ;- OverflowStyle(.../null)
              -----------------------
*/

/* 
  Largesized(w,h,wxh) box  //Boxes...
  unwraped container boxs (flexwrap ability ? , ..... )

  largesized singleword  //Text..
  largesize  spaceignored words(space as letter _)

  make fixed containerSize w/c is smaller than the content could need.
  ....
  are possibilities contentSize > containerSize(fixed) ; create overflows
  ----------------------------------------------------------------
  to create overflows make one of the above cases :--- & wory  how to show the oveflows 
  -------------------
  Overflow Managments ( if oveflow to be occured - should i show it/ not)
  ==================
  is overflowed contents are to be accessible ?
      Yes ( when oveflow occured, scrollbar with (poped on mouse / sticky visibility) will tell
      there is oveflows.....  == auto,scroll,visible

      No ( can't know if oveflow were occured or not) == hidden
      ------------------------------------------------------------
      whatever the overflow managments is, if content text .. ( ... ellipse) could also added as oveflowed content indicator in
      additions to the scrollbar)

  Overflow Indicator ( if oveflow to be occured - whatever ? should i show it/ not  ; Text_ Indicators)
  ==================
*/

/* ---------  ITEM <-> Overflow   -------------- */

import { StyleSheet } from 'react-native';

export const scrollStyles = (theme) => StyleSheet.create({
  // Base scroll container
  scrollContainer: {
    flex: 1,
  },

  // Horizontal scrolling
  horizontalScroll: {
    flexGrow: 0, // Prevent vertical expansion
    flexDirection: 'row',
  },

  // Vertical scrolling (default)
  verticalScroll: {
    flex: 1,
  },

  // Scroll content container
  scrollContent: {
    padding: theme.md,
  },

  // Scrollbar visibility
  showScrollbars: {
    scrollEnabled: true,
    showsHorizontalScrollIndicator: true,
    showsVerticalScrollIndicator: true,
  },
  hideScrollbars: {
    scrollEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
  },
});

export const overflowStyles = (theme) => StyleSheet.create({
  // Scrollbar styles - Note: React Native has limited scrollbar customization

    // Scrollbar visibility
    bar_flat: {
      scrollEnabled: true,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
    },
    
    bar_show: {
      scrollEnabled: true,
      showsHorizontalScrollIndicator: true,
      showsVerticalScrollIndicator: true,
    },
  
  bar_thin_dark: {
    // Custom scrollbars require native components in React Native
  },
  
  bar_xxs_dark: {
    // See note above about scrollbar customization
  },
  
  bar_xs_dark: {
    // See note above about scrollbar customization
  },

  //snap Styles
    // Horizontal snap points
    snapX: {
      snapToAlignment: 'center',
      snapToInterval: theme.snapInterval || 300,
      decelerationRate: 'fast',
    },
  
    // Vertical snap points
    snapY: {
      snapToAlignment: 'start',
      snapToInterval: theme.snapInterval || 200,
      decelerationRate: 'normal',
    },
  
    // Pagination snap
    snapPagination: {
      snapToInterval: theme.windowWidth,
      snapToAlignment: 'center',
      pagingEnabled: true,
    },

  // Word breaking and whitespace
  create_wordSpace: {
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  
  create_wordSpace2: {
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  
  ignore_wordSpace: {
    whiteSpace: 'nowrap'
  },
  
  ignore_boxSpace: {
    flexWrap: 'nowrap'
  },

  // Overflow control
  noflow: {
    overflow: 'hidden'
  },
  
    // Auto overflow detection
    autoflow: {
      overflow: Platform.select({
        ios: 'scroll',
        android: 'auto',
      }),
    },

    xyoflow: {
      overflow: 'scroll',
    },

  xoflow: {
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
  
  yoflow: {
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  
  // Text overflow
  ellipsis: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },

  // Platform-specific overflow behaviors
  ...Platform.select({
    ios: {
      scroll_behavior_smooth: {
        // iOS specific scroll behavior
      }
    },
    android: {
      scroll_behavior_smooth: {
        // Android specific scroll behavior
      }
    },
    default: {
      // Default styles for other platforms
    }
  })
});

export const oflowStyles = (theme) => StyleSheet.create({
  // Visible overflow (content extends beyond container)
  oflowvisible: {
    overflow: 'visible',
  },

  // Hidden oflow (content clipped)
  oflowhidden: {
    overflow: 'hidden',
  },
  // Auto overflow detection
  oflowauto: {
    overflow: Platform.select({
      ios: 'scroll',
      android: 'auto',
    }),
  },
  // Scrollable overflow
  oflowscroll: {
    overflow: 'scroll',
  },

  // Horizontal overflow only
  xoflow: {
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
  // Vertical overflow only
  yoflow: {
    overflowY: 'scroll',
    overflowX: 'hidden',
  },


});




