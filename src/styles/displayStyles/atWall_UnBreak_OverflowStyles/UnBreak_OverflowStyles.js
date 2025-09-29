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



export const unBreak_atWall_OverflowStyle = (theme) => StyleSheet.create({
  // Scrollbar styles - Note: React Native has limited scrollbar customization

  //---- overflow Styles
   //---Show Overflow Contents with Scrolls
    overflowScroll: {
      overflow: 'scroll',//show scroll onHover/always
    },
    overflowAuto: {
      overflow: 'auto',//show scroll onHover/always
    },
    //---Hide Overflow Contents
    overflowClip: {overflow: 'clip', //hide scroll bar
    },
    overflowHide:    {overflow: 'hidden', //hide scroll bar
    },

    //---Strech Box ( No Overflow&Scroll)
    overflowVisible: {overflow: 'visible', //no Scroll ; streching as autoSized Box
    },


    //IF Content Scrolled... ScrollBar Styles
    scrollBar_flat: {
      scrollEnabled: true,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
    },
    
    scrollBar_show: {
      scrollEnabled: true,
      showsHorizontalScrollIndicator: true,
      showsVerticalScrollIndicator: true,
    },

  //snap Styles
    // Horizontal snap points
    scrollBar_snapX: {
      snapToAlignment: 'center',
      snapToInterval: theme.snapInterval || 300,
      decelerationRate: 'fast',
    },
  
    // Vertical snap points
    scrollBar_snapY: {
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

  // Text overflow
  ellipsis: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },


});




export default unBreak_atWall_OverflowStyle
