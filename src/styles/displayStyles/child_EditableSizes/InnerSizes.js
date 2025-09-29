import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');



  export const innerSizes = (theme) => StyleSheet.create({
  
    //fitting
  innerfit:{width:width, height:height },
  innerfitauto:{width:width, height:'auto' },
  innerfitfull:{width:width, height:'100%' },

  // full
  innerfull:{width: '100%', height: '100%' },
  innerfullauto:{width: '100%', height: 'auto' },
  innerfullfit:{width: '100%', height:height },

  // auto 
  innerauto:{width: 'auto', height: 'auto' },
  innerautofit:{width: 'auto', height:height },
  innerautofull:{width: 'auto', height: '100%' },


  // ================ Aspect Ratio ================
  //give [Height or Width] & calculate [Width or Height]
  ARauto: { aspectRatio: undefined },
  ARSquare: { aspectRatio: 1 },
  ARVideo: { aspectRatio: 16/9 },
  AR4_3: { aspectRatio: 4/3 },
  AR3_2: { aspectRatio: 3/2 },
  AR5_4: { aspectRatio: 5/4 },
  AR9_16: { aspectRatio: 9/16 },
  

  //12-column Flex-Specific Child Inner Sizing ( 100Sections of Parent)

  //=========Flex-Colonizer Size

  innerFlexshrink: { //...be first to shrink(release required basic size)
    flexGrow: 1,  flexShrink: 1,
    // flex: 1,
  }, 
  innerFlexgrow: { //...be last to shrink(release required basic size)
    flexGrow: 1, flexShrink: 0,
  },

  //=========Flex-Inner Size 
  
  innerFlexauto: {//just take needed
    flex: 0,   flexBasis: 'auto'
  },
  innerFlex1: {
    flex: 0,
    flexBasis: `${(100/10) * 1}%`,
  },
  innerFlex2: {
    flex: 0,
    flexBasis: `${(100/10) * 2}%`,
  },
  innerFlex3: {
    flex: 0,
    flexBasis: `${(100/10) * 3}%`,
  },
  innerFlex4: {
    flex: 0,
    flexBasis: `${(100/10) * 4}%`,
  },
  innerFlex5: {
    flex: 0,
    flexBasis: `${(100/10) * 5}%`,
  },
  innerFlex6: {
    flex: 0,
    flexBasis: `${(100/10) * 6}%`,
  },
  innerFlex7: {
    flex: 0,
    flexBasis: `${(100/10) * 7}%`,
  },
  innerFlex8: {
    flex: 0,
    flexBasis: `${(100/10) * 8}%`,
  },
  innerFlex9: {
    flex: 0,
    flexBasis: `${(100/10) * 9}%`,
  },
  innerFlex10: {
    flex: 0,
    flexBasis: `${(100/10) * 10}%`,
  },
  // innerFlex11: {
  //   flex: 0,
  //   flexBasis: `${(100/10) * 11}%`,
  // },
  // innerFlex12: {
  //   flex: 0,
  //   flexBasis: '100%',
  // }
  
  // ================ Width Utilities ================
  // Fixed widths
  innerWPx05: { width:.5 },
  innerWPx1: { width: theme.space[1] || 4 },
  innerWPx2: { width: theme.space[2] || 8 },
  innerWPx3: { width: theme.space[3] || 12 },
  innerWPx4: { width: theme.space[4] || 16 },
  innerWPx5: { width: theme.space[5] || 20 },
  innerWPx6: { width: theme.space[6] || 24 },
  innerWPx7: { width: theme.space[7] || 28 },
  innerWPx8: { width: theme.space[8] || 32 },
  innerWPx9: { width: theme.space[9] || 36 },
  innerWPx10: { width: theme.space[10] || 40 },
  innerWPx11: { width: theme.space[11] || 44 },
  innerWPx12: { width: theme.space[12] || 48 },
  innerWPx14: { width: theme.space[14] || 56 },
  innerWPx16: { width: theme.space[16] || 64 },
  innerWPx20: { width: theme.space[20] || 80 },
  innerWPx24: { width: theme.space[24] || 96 },
  innerWPx28: { width: theme.space[28] || 112 },
  innerWPx32: { width: theme.space[32] || 128 },
  innerWPx36: { width: theme.space[36] || 144 },
  innerWPx40: { width: theme.space[40] || 160 },
  innerWPx44: { width: theme.space[44] || 176 },
  innerWPx48: { width: theme.space[48] || 192 },
  innerWPx52: { width: theme.space[52] || 208 },
  innerWPx56: { width: theme.space[56] || 224 },
  innerWPx60: { width: theme.space[60] || 240 },
  innerWPx64: { width: theme.space[64] || 256 },
  innerWPx72: { width: theme.space[72] || 288 },
  innerWPx80: { width: theme.space[80] || 320 },
  innerWPx96: { width: theme.space[96] || 384 },
  
    // Fixed heights
  innerHPx05: { height: .5 },
  innerHPx1: { height: theme.space[1] || 4 },
  innerHPx2: { height: theme.space[2] || 8 },
  innerHPx3: { height: theme.space[3] || 12 },
  innerHPx4: { height: theme.space[4] || 16 },
  innerHPx5: { height: theme.space[5] || 20 },
  innerHPx6: { height: theme.space[6] || 24 },
  innerHPx7: { height: theme.space[7] || 28 },
  innerHPx8: { height: theme.space[8] || 32 },
  innerHPx9: { height: theme.space[9] || 36 },
  innerHPx10: { height: theme.space[10] || 40 },
  innerHPx11: { height: theme.space[11] || 44 },
  innerHPx12: { height: theme.space[12] || 48 },
  innerHPx14: { height: theme.space[14] || 56 },
  innerHPx16: { height: theme.space[16] || 64 },
  innerHPx20: { height: theme.space[20] || 80 },
  innerHPx24: { height: theme.space[24] || 96 },
  innerHPx28: { height: theme.space[28] || 112 },
  innerHPx32: { height: theme.space[32] || 128 },
  innerHPx36: { height: theme.space[36] || 144 },
  innerHPx40: { height: theme.space[40] || 160 },
  innerHPx44: { height: theme.space[44] || 176 },
  innerHPx48: { height: theme.space[48] || 192 },
  innerHPx52: { height: theme.space[52] || 208 },
  innerHPx56: { height: theme.space[56] || 224 },
  innerHPx60: { height: theme.space[60] || 240 },
  innerHPx64: { height: theme.space[64] || 256 },
  innerHPx72: { height: theme.space[72] || 288 },
  innerHPx80: { height: theme.space[80] || 320 },
  innerHPx96: { height: theme.space[96] || 384 },


    //100Sections of Parent()
    
  // percent
    innerWPr100: { width: '100%' },
    innerWPr95: { width: '95%' },
    innerWPr90: { width: '90%' },
    innerWPr85: { width: '85%' },
    innerWPr80: { width: '80%' },
    innerWPr75: { width: '75%' },
    innerWPr70: { width: '70%' },
    innerWPr65: { width: '65%' },
    innerWPr60: { width: '60%' },
    innerWPr55: { width: '55%' },
    innerWPr50: { width: '550%' },
    innerWPr45: { width: '45%' },
    innerWPr40: { width: '40%' },
    innerWPr35: { width: '35%' },
    innerWPr30: { width: '30%' },
    innerWPr25: { width: '25%' },
    innerWPr20: { width: '20%' },
    innerWPr15: { width: '15%' },
    innerWPr10: { width: '10%' },
    innerWPr5: { width: '5%' },
    innerWPr1: { width: '1%' },

    innerHPr100: { height: '100%' },
    innerHPr95: { height: '95%' },
    innerHPr90: { height: '90%' },
    innerHPr85: { height: '85%' },
    innerHPr80: { height: '80%' },
    innerHPr75: { height: '75%' },
    innerHPr70: { height: '70%' },
    innerHPr65: { height: '65%' },
    innerHPr60: { height: '60%' },
    innerHPr55: { height: '55%' },
    innerHPr50: { height: '550%' },
    innerHPr45: { height: '45%' },
    innerHPr40: { height: '40%' },
    innerHPr35: { height: '35%' },
    innerHPr30: { height: '30%' },
    innerHPr25: { height: '25%' },
    innerHPr20: { height: '20%' },
    innerHPr15: { height: '15%' },
    innerHPr10: { height: '10%' },
    innerHPr5: { height: '5%' },
    innerHPr1: { height: '1%' },
  
    //100Sections of Screen(Windows)
      // percent
    innerWVp100: { width: '100vw' },
    innerWVp95: { width: '95vw' },
    innerWVp90: { width: '90vw' },
    innerWVp85: { width: '85vw' },
    innerWVp80: { width: '80vw' },
    innerWVp75: { width: '75vw' },
    innerWVp70: { width: '70vw' },
    innerWVp65: { width: '65vw' },
    innerWVp60: { width: '60vw' },
    innerWVp55: { width: '55vw' },
    innerWVp50: { width: '550vw' },
    innerWVp45: { width: '45vw' },
    innerWVp40: { width: '40vw' },
    innerWVp35: { width: '35vw' },
    innerWVp30: { width: '30vw' },
    innerWVp25: { width: '25vw' },
    innerWVp20: { width: '20vw' },
    innerWVp15: { width: '15vw' },
    innerWVp10: { width: '10vw' },
    innerWVp5: { width: '5vw' },
    innerWVp1: { width: '1vw' },


    innerHVp100: { height: '100vh' },
    innerHVp95: { height: '95vh' },
    innerHVp90: { height: '90vh' },
    innerHVp85: { height: '85vh' },
    innerHVp80: { height: '80vh' },
    innerHVp75: { height: '75vh' },
    innerHVp70: { height: '70vh' },
    innerHVp65: { height: '65vh' },
    innerHVp60: { height: '60vh' },
    innerHVp55: { height: '55vh' },
    innerHVp50: { height: '550vh' },
    innerHVp45: { height: '45vh' },
    innerHVp40: { height: '40vh' },
    innerHVp35: { height: '35vh' },
    innerHVp30: { height: '30vh' },
    innerHVp25: { height: '25vh' },
    innerHVp20: { height: '20vh' },
    innerHVp15: { height: '15vh' },
    innerHVP10: { height: '10vh' },
    innerHVp5: { height: '5vh' },
    innerHVp1: { height: '1vh' },

});


export default innerSizes