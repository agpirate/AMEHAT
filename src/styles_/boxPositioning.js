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
  fixed: { position: 'absolute' }, // React Native uses absolute for fixed positioning
  
  // Position utilities
  inset_0: { top: 0, right: 0, bottom: 0, left: 0 },
  inset_x_0: { left: 0, right: 0 },
  inset_y_0: { top: 0, bottom: 0 },
  
  // Edge positioning - theme-based spacing
  top_xs: { top: theme.xs },
  top_sm: { top: theme.sm || theme.xs * 2 },
  top_md: { top: theme.md || theme.xs * 3 },
  top_lg: { top: theme.lg || theme.xs * 4 },
  top_xl: { top: theme.xl || theme.xs * 5 },
  
  bottom_xs: { bottom: theme.xs },
  bottom_sm: { bottom: theme.sm || theme.xs * 2 },
  bottom_md: { bottom: theme.md || theme.xs * 3 },
  bottom_lg: { bottom: theme.lg || theme.xs * 4 },
  bottom_xl: { bottom: theme.xl || theme.xs * 5 },
  
  left_xs: { left: theme.xs },
  left_sm: { left: theme.sm || theme.xs * 2 },
  left_md: { left: theme.md || theme.xs * 3 },
  left_lg: { left: theme.lg || theme.xs * 4 },
  left_xl: { left: theme.xl || theme.xs * 5 },
  
  right_xs: { right: theme.xs },
  right_sm: { right: theme.sm || theme.xs * 2 },
  right_md: { right: theme.md || theme.xs * 3 },
  right_lg: { right: theme.lg || theme.xs * 4 },
  right_xl: { right: theme.xl || theme.xs * 5 },
  
  // Percentage-based positioning
  top_25: { top: '25%' },
  top_50: { top: '50%' },
  top_75: { top: '75%' },
  top_100: { top: '100%' },
  
  bottom_25: { bottom: '25%' },
  bottom_50: { bottom: '50%' },
  bottom_75: { bottom: '75%' },
  bottom_100: { bottom: '100%' },
  
  left_25: { left: '25%' },
  left_50: { left: '50%' },
  left_75: { left: '75%' },
  left_100: { left: '100%' },
  
  right_25: { right: '25%' },
  right_50: { right: '50%' },
  right_75: { right: '75%' },
  right_100: { right: '100%' },
  
  // Corner combinations (relative)
  relative_tl: {
    position: 'relative',
    top: theme.xs,
    left: theme.xs
  },
  relative_tr: {
    position: 'relative',
    top: theme.xs,
    right: theme.xs
  },
  relative_bl: {
    position: 'relative',
    bottom: theme.xs,
    left: theme.xs
  },
  relative_br: {
    position: 'relative',
    bottom: theme.xs,
    right: theme.xs
  },
  
  // Corner combinations (absolute)
  absolute_tl: {
    position: 'absolute',
    top: theme.xs,
    left: theme.xs
  },
  absolute_tr: {
    position: 'absolute',
    top: theme.xs,
    right: theme.xs
  },
  absolute_bl: {
    position: 'absolute',
    bottom: theme.xs,
    left: theme.xs
  },
  absolute_br: {
    position: 'absolute',
    bottom: theme.xs,
    right: theme.xs
  },
  
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
  
  // Flex-based centering (useful for fixed/full-cover elements)
  flex_center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex_center_x: {
    alignItems: 'center'
  },
  flex_center_y: {
    justifyContent: 'center'
  },
  
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
  
  // Fixed position presets
  fixed_top: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  fixed_bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  fixed_left: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
  fixed_right: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0
  },
  
  // Sticky position fallbacks
  sticky_top: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  sticky_bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  
  // Special cases
  absolute_center_cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  // Responsive width/height combinations
  absolute_full_width: {
    position: 'absolute',
    width: '100%'
  },
  absolute_full_height: {
    position: 'absolute',
    height: '100%'
  },
  absolute_auto_height: {
    position: 'absolute',
    height: 'auto'
  }
});