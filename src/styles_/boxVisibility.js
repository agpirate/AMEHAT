
/* Default
-------------------- 
display:block;

visibility:visible;
opacity:1;
--------------------

[ SpecificStyles or ___ ]
*/

import { StyleSheet } from 'react-native';

export const visibilityStyles = StyleSheet.create({
  // Complete removal from layout
  remove: {
    display: 'none',
    width: 0,
    height: 0
  },

  // Hide but maintain space in layout
  hide_vis: {
    visibility: 'hidden'
  },
  show_vis: {
    visibility: 'visible'
  },

  // Opacity-based visibility
  hide_opa: {
    opacity: 0
    // Note: Unlike CSS, in React Native setting opacity: 0 doesn't necessarily 
    // make the element untouchable. You may need additional pointerEvents: 'none'
  },
  semishow_opa: {
    opacity: 0.7
  },
  show_opa: {
    opacity: 1
  },

  // Additional React Native specific visibility controls
  pointer_events_none: {
    pointerEvents: 'none' // Makes element non-interactive
  },
  pointer_events_auto: {
    pointerEvents: 'auto' // Restores interactivity
  }
});

