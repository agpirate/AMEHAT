/* static is default */
/* 
     position:relative    (4 screen corners) 
     position:fixed    (4 screen corners) 
     position:sticky   (4 screen corners) 
     position:absolute (4 screen corners) 

     Position possibles:__
     4 corners ( topleft,topright,bottomleft,bottomright.... )
     4 sides ( top_2Left,top/2Right,bottom/2Left,bottom/2Right) 
     
     */   
     import { StyleSheet } from 'react-native';

export const positionStyles = (theme) => StyleSheet.create({

  // Base position types
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  fixed: { position: 'fixed' }, // React Native uses absolute for fixed positioning
  
  // Position utilities
  inset_0:   { top: 0, right: 0, bottom: 0, left: 0 },
  inset_x_0: { left: 0, right: 0 },
  inset_y_0: { top: 0, bottom: 0 },
  
  // Edge positioning - theme-based spacing 
  top_xxs: { top: theme.xxs },
  top_xs: { top: theme.xs },
  top_sm: { top: theme.sm || theme.xs * 2 },
  top_md: { top: theme.md || theme.xs * 3 },
  top_lg: { top: theme.lg || theme.xs * 4 },
  top_xl: { top: theme.xl || theme.xs * 5 },
  
  bottom_xxs: { bottom: theme.xxs },
  bottom_xs: { bottom: theme.xs },
  bottom_sm: { bottom: theme.sm || theme.xs * 2 },
  bottom_md: { bottom: theme.md || theme.xs * 3 },
  bottom_lg: { bottom: theme.lg || theme.xs * 4 },
  bottom_xl: { bottom: theme.xl || theme.xs * 5 },
  
  left_xxs: { left: theme.xxs },
  left_xs: { left: theme.xs },
  left_sm: { left: theme.sm || theme.xs * 2 },
  left_md: { left: theme.md || theme.xs * 3 },
  left_lg: { left: theme.lg || theme.xs * 4 },
  left_xl: { left: theme.xl || theme.xs * 5 },
  
  right_xxs: { right: theme.xxs },
  right_xs: { right: theme.xs },
  right_sm: { right: theme.sm || theme.xs * 2 },
  right_md: { right: theme.md || theme.xs * 3 },
  right_lg: { right: theme.lg || theme.xs * 4 },
  right_xl: { right: theme.xl || theme.xs * 5 },
  
  // Percentage-based positioning
  top_Pr0: { top: '0%' },
  top_Pr5: { top: '5%' },
  top_Pr10: { top: '10%' },
  top_Pr15: { top: '15%' },
  top_Pr20: { top: '20%' },
  top_Pr25: { top: '25%' },
  top_Pr50: { top: '50%' },
  top_Pr75: { top: '75%' },
  top_Pr100: { top: '100%' },

  bottom_Pr0: { bottom: '0%' },
  bottom_Pr5: { bottom: '5%' },
  bottom_Pr10: { bottom: '10%' },
  bottom_Pr15: { bottom: '15%' },
  bottom_Pr20: { bottom: '20%' },
  bottom_Pr25: { bottom: '25%' },
  bottom_Pr50: { bottom: '50%' },
  bottom_Pr75: { bottom: '75%' },
  bottom_Pr100: { bottom: '100%' },

  left_Pr0: { left: '0%' },
  left_Pr5: { left: '5%' },
  left_Pr10: { left: '10%' },
  left_Pr15: { left: '15%' },
  left_Pr20: { left: '20%' },
  left_Pr25: { left: '25%' },
  left_Pr50: { left: '50%' },
  left_Pr75: { left: '75%' },
  left_Pr100: { left: '100%' },
  
  right_Pr0: { right: '0%' },
  right_Pr5: { right: '5%' },
  right_Pr10: { right: '10%' },
  right_Pr15: { right: '15%' },
  right_Pr20: { right: '20%' },
  right_Pr25: { right: '25%' },
  right_Pr50: { right: '50%' },
  right_Pr75: { right: '75%' },
  right_Pr100: { right: '100%' },
  
    // Z-index system
  z_0: { zIndex: 0 },
  z_1: { zIndex: 1 },
  z_2: { zIndex: 2 },
  z_3: { zIndex: 3 },
  z_4: { zIndex: 4 },
  z_5: { zIndex: 5 },
  z_10: { zIndex: 10 },
  z_20: { zIndex: 20 },
  z_30: { zIndex: 30 },
  z_40: { zIndex: 40 },
  z_50: { zIndex: 50 },
  z_auto: { zIndex: 'auto' },
  z_max: { zIndex: 9999 },
  

  // Center positioning
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }]
  },
  center_x: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }]
  },
  center_y: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -50 }]
  },
  
  // Full coverage
  full_cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  

});

  export default positionStyles