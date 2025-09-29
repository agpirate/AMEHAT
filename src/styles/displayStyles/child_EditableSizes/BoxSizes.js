import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const boxSizes = StyleSheet.create({

  //fitting
  size_fit:{width:width, height:height },
  size_fitauto:{width:width, height:'auto' },
  size_fitfull:{width:width, height:'100%' },

  // full
  size_full:{width: '100%', height: '100%' },
  size_fullauto:{width: '100%', height: 'auto' },
  size_fullfit:{width: '100%', height:height },

  // auto 
  size_auto:{width: 'auto', height: 'auto' },
  size_autofit:{width: 'auto', height:height },
  size_autofull:{width: 'auto', height: '100%' },
})

  export const viewportStyles = StyleSheet.create({
  // Width percentages (vw equivalent)
  w_100: { width: '100%' },
  w_90: { width: '90%' },
  w_80: { width: '80%' },
  w_75: { width: '75%' },
  w_66: { width: '66%' },
  w_50: { width: '50%' },
  w_33: { width: '33%' },
  w_25: { width: '25%' },
  w_20: { width: '20%' },
  w_10: { width: '10%' },

  // Height percentages (vh equivalent)
  h_100: { height: '100%' },
  h_90: { height: '90%' },
  h_80: { height: '80%' },
  h_75: { height: '75%' },
  h_50: { height: '50%' },
  h_25: { height: '25%' },

  // Viewport width units (vw equivalent)
  vw_100: { width: width },
  vw_90: { width: width * 0.9 },
  vw_80: { width: width * 0.8 },
  vw_50: { width: width * 0.5 },
  vw_25: { width: width * 0.25 },

  // Viewport height units (vh equivalent)
  vh_100: { height: height },
  vh_90: { height: height * 0.9 },
  vh_80: { height: height * 0.8 },
  vh_50: { height: height * 0.5 },
  vh_25: { height: height * 0.25 }
});

export const percentageStyles = StyleSheet.create({
    // Width percentages (vw equivalent)
    w_100: { width: '100%' },
    w_90: { width: '90%' },
    w_80: { width: '80%' },
    w_75: { width: '75%' },
    w_66: { width: '66%' },
    w_50: { width: '50%' },
    w_33: { width: '33%' },
    w_25: { width: '25%' },
    w_20: { width: '20%' },
    w_10: { width: '10%' },
  
    // Height percentages (vh equivalent)
    h_100: { height: '100%' },
    h_90: { height: '90%' },
    h_80: { height: '80%' },
    h_75: { height: '75%' },
    h_50: { height: '50%' },
    h_25: { height: '25%' },

})

export const pixelStyles = StyleSheet.create({
    // Pixel widths
    w_px_1: { width: 1 },
    w_px_2: { width: 2 },
    w_px_4: { width: 4 },
    w_px_8: { width: 8 },
    w_px_16: { width: 16 },
    w_px_32: { width: 32 },
    w_px_64: { width: 64 },
    w_px_128: { width: 128 },
    w_px_256: { width: 256 },
  
    // Pixel heights
    h_px_1: { height: 1 },
    h_px_2: { height: 2 },
    h_px_4: { height: 4 },
    h_px_8: { height: 8 },
    h_px_16: { height: 16 },
    h_px_32: { height: 32 },
    h_px_64: { height: 64 },
    h_px_128: { height: 128 },
    h_px_256: { height: 256 }
  });

  export const ratioStyles = StyleSheet.create({
    // Square (1:1)
    ratio_1_1: { aspectRatio: 1 },
    
    // Landscape (16:9)
    ratio_16_9: { aspectRatio: 16/9 },
    
    // Portrait (9:16)
    ratio_9_16: { aspectRatio: 9/16 },
    
    // Common video ratios
    ratio_4_3: { aspectRatio: 4/3 },
    ratio_3_2: { aspectRatio: 3/2 }
  });

  export const flexSizes = StyleSheet.create({
    // flexGrow(grow if free space), flexShrink(if grow & space! needed by other ; shrink(1)/not(0)), and flexBasis( the actual size)
    
    // Container styles
    flexcont: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10 // Negative margin to compensate for gutters
    },

    // Column base styles
    col: {
        paddingHorizontal: 10 // Gutter spacing
    },

  // Column auto-sizing behaviors
  colauto: {
    flex: 0,   flexBasis: 'auto'
  },
  colshrink: {
    flexGrow: 1,  flexShrink: 1,  flexBasis: 'auto'
    // flex: 1,
  },
  colgrow: {
    flexGrow: 1, flexShrink: 0,  flexBasis: 'auto'
  },

  // 12-column grid system
  col1: {
    flex: 0,
    flexBasis: `${(100/12) * 1}%`,
    maxWidth: `${(100/12) * 1}%`
  },
  col2: {
    flex: 0,
    flexBasis: `${(100/12) * 2}%`,
    maxWidth: `${(100/12) * 2}%`
  },
  col3: {
    flex: 0,
    flexBasis: `${(100/12) * 3}%`,
    maxWidth: `${(100/12) * 3}%`
  },
  col4: {
    flex: 0,
    flexBasis: `${(100/12) * 4}%`,
    maxWidth: `${(100/12) * 4}%`
  },
  col5: {
    flex: 0,
    flexBasis: `${(100/12) * 5}%`,
    maxWidth: `${(100/12) * 5}%`
  },
  col6: {
    flex: 0,
    flexBasis: `${(100/12) * 6}%`,
    maxWidth: `${(100/12) * 6}%`
  },
  col7: {
    flex: 0,
    flexBasis: `${(100/12) * 7}%`,
    maxWidth: `${(100/12) * 7}%`
  },
  col8: {
    flex: 0,
    flexBasis: `${(100/12) * 8}%`,
    maxWidth: `${(100/12) * 8}%`
  },
  col9: {
    flex: 0,
    flexBasis: `${(100/12) * 9}%`,
    maxWidth: `${(100/12) * 9}%`
  },
  col10: {
    flex: 0,
    flexBasis: `${(100/12) * 10}%`,
    maxWidth: `${(100/12) * 10}%`
  },
  col11: {
    flex: 0,
    flexBasis: `${(100/12) * 11}%`,
    maxWidth: `${(100/12) * 11}%`
  },
  col12: {
    flex: 0,
    flexBasis: '100%',
    maxWidth: '100%'
  }
    
  });

  export const constraintStyles = StyleSheet.create({
    // Max width
    max_w_100: { maxWidth: '100%' },
    max_w_80: { maxWidth: '80%' },
    max_w_50: { maxWidth: '50%' },
    max_w_px_300: { maxWidth: 300 },
    
    // Min width
    min_w_100: { minWidth: '100%' },
    min_w_50: { minWidth: '50%' },
    min_w_px_100: { minWidth: 100 },
    
    // Max height
    max_h_100: { maxHeight: '100%' },
    max_h_80: { maxHeight: '80%' },
    max_h_px_500: { maxHeight: 500 },
    
    // Min height
    min_h_100: { minHeight: '100%' },
    min_h_px_50: { minHeight: 50 }
  });


  export const boxSize = (theme) => StyleSheet.create({
  // ================ Box Sizing ================
  box_border: { boxSizing: 'border-box' },
  box_content: { boxSizing: 'content-box' },
  
  // ================ Width Utilities ================
  // Fixed widths
  w_0: { width: 0 },
  w_px: { width: 1 }, // 1px equivalent in RN
  w_0_5: { width: theme.space[0.5] || 2 },
  w_1: { width: theme.space[1] || 4 },
  w_2: { width: theme.space[2] || 8 },
  w_3: { width: theme.space[3] || 12 },
  w_4: { width: theme.space[4] || 16 },
  w_5: { width: theme.space[5] || 20 },
  w_6: { width: theme.space[6] || 24 },
  w_7: { width: theme.space[7] || 28 },
  w_8: { width: theme.space[8] || 32 },
  w_9: { width: theme.space[9] || 36 },
  w_10: { width: theme.space[10] || 40 },
  w_11: { width: theme.space[11] || 44 },
  w_12: { width: theme.space[12] || 48 },
  w_14: { width: theme.space[14] || 56 },
  w_16: { width: theme.space[16] || 64 },
  w_20: { width: theme.space[20] || 80 },
  w_24: { width: theme.space[24] || 96 },
  w_28: { width: theme.space[28] || 112 },
  w_32: { width: theme.space[32] || 128 },
  w_36: { width: theme.space[36] || 144 },
  w_40: { width: theme.space[40] || 160 },
  w_44: { width: theme.space[44] || 176 },
  w_48: { width: theme.space[48] || 192 },
  w_52: { width: theme.space[52] || 208 },
  w_56: { width: theme.space[56] || 224 },
  w_60: { width: theme.space[60] || 240 },
  w_64: { width: theme.space[64] || 256 },
  w_72: { width: theme.space[72] || 288 },
  w_80: { width: theme.space[80] || 320 },
  w_96: { width: theme.space[96] || 384 },
  
  // Percentage widths
  w_full: { width: '100%' },
  w_screen: { width: '100vw' }, // React Native will use 100% as fallback
  w_1_2: { width: '50%' },
  w_1_3: { width: '33.333333%' },
  w_2_3: { width: '66.666667%' },
  w_1_4: { width: '25%' },
  w_2_4: { width: '50%' },
  w_3_4: { width: '75%' },
  w_1_5: { width: '20%' },
  w_2_5: { width: '40%' },
  w_3_5: { width: '60%' },
  w_4_5: { width: '80%' },
  w_1_6: { width: '16.666667%' },
  w_2_6: { width: '33.333333%' },
  w_3_6: { width: '50%' },
  w_4_6: { width: '66.666667%' },
  w_5_6: { width: '83.333333%' },
  
  // Min/max widths
  min_w_0: { minWidth: 0 },
  min_w_full: { minWidth: '100%' },
  max_w_0: { maxWidth: 0 },
  max_w_full: { maxWidth: '100%' },
  max_w_screen: { maxWidth: '100vw' },
  max_w_xs: { maxWidth: theme.breakpoints.xs || 320 },
  max_w_sm: { maxWidth: theme.breakpoints.sm || 384 },
  max_w_md: { maxWidth: theme.breakpoints.md || 448 },
  max_w_lg: { maxWidth: theme.breakpoints.lg || 512 },
  max_w_xl: { maxWidth: theme.breakpoints.xl || 576 },
  max_w_2xl: { maxWidth: theme.breakpoints['2xl'] || 672 },
  
  // ================ Height Utilities ================
  // Fixed heights
  h_0: { height: 0 },
  h_px: { height: 1 },
  h_0_5: { height: theme.space[0.5] || 2 },
  h_1: { height: theme.space[1] || 4 },
  h_2: { height: theme.space[2] || 8 },
  h_3: { height: theme.space[3] || 12 },
  h_4: { height: theme.space[4] || 16 },
  h_5: { height: theme.space[5] || 20 },
  h_6: { height: theme.space[6] || 24 },
  h_7: { height: theme.space[7] || 28 },
  h_8: { height: theme.space[8] || 32 },
  h_9: { height: theme.space[9] || 36 },
  h_10: { height: theme.space[10] || 40 },
  h_11: { height: theme.space[11] || 44 },
  h_12: { height: theme.space[12] || 48 },
  h_14: { height: theme.space[14] || 56 },
  h_16: { height: theme.space[16] || 64 },
  h_20: { height: theme.space[20] || 80 },
  h_24: { height: theme.space[24] || 96 },
  h_28: { height: theme.space[28] || 112 },
  h_32: { height: theme.space[32] || 128 },
  h_36: { height: theme.space[36] || 144 },
  h_40: { height: theme.space[40] || 160 },
  h_44: { height: theme.space[44] || 176 },
  h_48: { height: theme.space[48] || 192 },
  h_52: { height: theme.space[52] || 208 },
  h_56: { height: theme.space[56] || 224 },
  h_60: { height: theme.space[60] || 240 },
  h_64: { height: theme.space[64] || 256 },
  h_72: { height: theme.space[72] || 288 },
  h_80: { height: theme.space[80] || 320 },
  h_96: { height: theme.space[96] || 384 },
  
  // Percentage heights
  h_full: { height: '100%' },
  h_screen: { height: '100vh' }, // React Native will use 100% as fallback
  h_1_2: { height: '50%' },
  h_1_3: { height: '33.333333%' },
  h_2_3: { height: '66.666667%' },
  h_1_4: { height: '25%' },
  h_2_4: { height: '50%' },
  h_3_4: { height: '75%' },
  h_1_5: { height: '20%' },
  h_2_5: { height: '40%' },
  h_3_5: { height: '60%' },
  h_4_5: { height: '80%' },
  h_1_6: { height: '16.666667%' },
  h_2_6: { height: '33.333333%' },
  h_3_6: { height: '50%' },
  h_4_6: { height: '66.666667%' },
  h_5_6: { height: '83.333333%' },
  
  // Min/max heights
  min_h_0: { minHeight: 0 },
  min_h_full: { minHeight: '100%' },
  min_h_screen: { minHeight: '100vh' },
  max_h_0: { maxHeight: 0 },
  max_h_full: { maxHeight: '100%' },
  max_h_screen: { maxHeight: '100vh' },
  max_h_xs: { maxHeight: theme.breakpoints.xs || 320 },
  max_h_sm: { maxHeight: theme.breakpoints.sm || 384 },
  max_h_md: { maxHeight: theme.breakpoints.md || 448 },
  max_h_lg: { maxHeight: theme.breakpoints.lg || 512 },
  max_h_xl: { maxHeight: theme.breakpoints.xl || 576 },
  
  // ================ Aspect Ratio ================
  aspect_auto: { aspectRatio: undefined },
  aspect_square: { aspectRatio: 1 },
  aspect_video: { aspectRatio: 16/9 },
  aspect_4_3: { aspectRatio: 4/3 },
  aspect_3_2: { aspectRatio: 3/2 },
  aspect_5_4: { aspectRatio: 5/4 },
  aspect_9_16: { aspectRatio: 9/16 },
  
  // ================ Flexible Boxes ================
  flex_1: { flex: 1 },
  flex_auto: { flex: 1 }, // RN doesn't have auto like web
  flex_initial: { flex: 0 },
  flex_none: { flex: 0 },
  
  // ================ Dimension Shorthands ================
  size_0: { width: 0, height: 0 },
  size_px: { width: 1, height: 1 },
  size_1: { width: theme.space[1] || 4, height: theme.space[1] || 4 },
  size_2: { width: theme.space[2] || 8, height: theme.space[2] || 8 },
  size_3: { width: theme.space[3] || 12, height: theme.space[3] || 12 },
  size_4: { width: theme.space[4] || 16, height: theme.space[4] || 16 },
  size_5: { width: theme.space[5] || 20, height: theme.space[5] || 20 },
  size_6: { width: theme.space[6] || 24, height: theme.space[6] || 24 },
  size_8: { width: theme.space[8] || 32, height: theme.space[8] || 32 },
  size_10: { width: theme.space[10] || 40, height: theme.space[10] || 40 },
  size_12: { width: theme.space[12] || 48, height: theme.space[12] || 48 },
  size_16: { width: theme.space[16] || 64, height: theme.space[16] || 64 },
  size_20: { width: theme.space[20] || 80, height: theme.space[20] || 80 },
  size_24: { width: theme.space[24] || 96, height: theme.space[24] || 96 },
  size_32: { width: theme.space[32] || 128, height: theme.space[32] || 128 },
  size_40: { width: theme.space[40] || 160, height: theme.space[40] || 160 },
  size_48: { width: theme.space[48] || 192, height: theme.space[48] || 192 },
  size_56: { width: theme.space[56] || 224, height: theme.space[56] || 224 },
  size_64: { width: theme.space[64] || 256, height: theme.space[64] || 256 },
  size_full: { width: '100%', height: '100%' },
  
  // ================ Special Dimensions ================
  // Icon sizes
  icon_xs: { width: 12, height: 12 },
  icon_sm: { width: 16, height: 16 },
  icon_md: { width: 24, height: 24 },
  icon_lg: { width: 32, height: 32 },
  icon_xl: { width: 40, height: 40 },
  
  // Avatar sizes
  avatar_xs: { width: 24, height: 24, borderRadius: 12 },
  avatar_sm: { width: 32, height: 32, borderRadius: 16 },
  avatar_md: { width: 48, height: 48, borderRadius: 24 },
  avatar_lg: { width: 64, height: 64, borderRadius: 32 },
  avatar_xl: { width: 80, height: 80, borderRadius: 40 },
  
  // Button base sizes
  btn_height_xs: { height: 28, minWidth: 64 },
  btn_height_sm: { height: 36, minWidth: 72 },
  btn_height_md: { height: 44, minWidth: 80 },
  btn_height_lg: { height: 52, minWidth: 96 },
  btn_height_xl: { height: 60, minWidth: 112 },
  
  // Input base sizes
  input_height_xs: { height: 28 },
  input_height_sm: { height: 36 },
  input_height_md: { height: 44 },
  input_height_lg: { height: 52 },
  input_height_xl: { height: 60 },
  
  // ================ Responsive Containers ================
  container: {
    width: '100%',
    maxWidth: theme.containers?.default || 1200,
    marginHorizontal: 'auto'
  },
  container_xs: {
    width: '100%',
    maxWidth: theme.containers?.xs || 480,
    marginHorizontal: 'auto'
  },
  container_sm: {
    width: '100%',
    maxWidth: theme.containers?.sm || 640,
    marginHorizontal: 'auto'
  },
  container_md: {
    width: '100%',
    maxWidth: theme.containers?.md || 768,
    marginHorizontal: 'auto'
  },
  container_lg: {
    width: '100%',
    maxWidth: theme.containers?.lg || 1024,
    marginHorizontal: 'auto'
  },
  container_xl: {
    width: '100%',
    maxWidth: theme.containers?.xl || 1280,
    marginHorizontal: 'auto'
  },
  container_fluid: {
    width: '100%',
    marginHorizontal: 'auto'
  },
  
  // ================ Overflow Control ================
  overflow_visible: { overflow: 'visible' }, /* Default - content spills out */
  overflow_hidden: { overflow: 'hidden' },  /* Clips excess content */
  overflow_scroll: { overflow: 'scroll' }, /* Always shows scrollbars */
  overflow_x_auto: { overflowX: 'auto', overflowY: 'hidden' },  /* Shows scrollbars only when needed */
  overflow_y_auto: { overflowY: 'auto', overflowX: 'hidden' },
//   .ellipsis {
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   width: 200px;
// }

  // ================ Display Modes ================
  block: { display: 'flex' }, // RN uses flex by default
  inline_block: { display: 'flex', alignSelf: 'flex-start' }, // Approximation
  hidden: { display: 'none' }
});
