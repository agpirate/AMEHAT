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


export const atWall_Break_Setting = (theme) => StyleSheet.create({
  // Scrollbar styles - Note: React Native has limited scrollbar customization

  // Word breaking and whitespace
  wrap_box: {overflowWrap: 'wrap'},//boxes@space
  noWrap_box: {overflowWrap: 'nowrap'},//boxes@space

  wrap_flexBox: {flexWrap: 'wrap'},//boxes@space
  nowrap_flexBox: {flexWrap: 'wrap'},//boxes@space
  
  wrap_word: {whiteSpace: 'wrap'},//words@space
  nowrap_word: {whiteSpace: 'nowrap'},//words@space

  wrap_letter: {wordBreak: 'wrap'},//letter@space
  nowrap_letter: {wordBreak: 'nowrap'},//letter@space

});


export default atWall_Break_Setting


