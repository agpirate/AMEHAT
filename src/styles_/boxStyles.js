/* Box Building Managments */
/* 
Background Image: Use when the image is decorative, and the content inside the container is more important.
<img> Tag: Use when the image is part of the content or needs to be described.

      border  : 
      border-radius : 
      box-shadow : 5px 5px 15px rgba(0, 0, 0, 0.5);

      background-color: 
      background: var(--bg-gradient);
      background-backdrops : 
      filter: grayscale(100%); // brightness(90%);
      background-images : (image it's boxSizing)
            background-size: cover; //cover the container,fit inside the container,auto(imgResolution?)
                //if image is auto and it's size < boxSize ( 2 additional setting)
                background-position: center; // center, top, bottom, left, right to position the image.
                background-repeat: no-repeat; Prevents tiling 
            background-attachment: fixed; //the background scrolls with the page or stays fixed. 

      padding:  shrink box sizes
      margin:   //don't shrink(no-resizing) sizes only, push parent boxes  

      text-align: center; /* Center-align content */


                        /* Box Border */
/* ----------------------------------------------------------- */
/*  */


import { StyleSheet } from 'react-native';

export const boxStyles = (theme) => StyleSheet.create({

/* ----------- padding styles [ direction:size ] [Noevent(xtransition;xeffect] */
// Margin utilities
m_flat: {
  padding: theme.null || 0
},
m_xxs: {
    margin: theme.m_xxs
  },
  m_xs: {
    margin: theme.m_xs
  },
  m_sm: {
    margin: theme.m_sm
  },
  m_md: {
    margin: theme.m_md
  },
  m_lg: {
    margin: theme.m_lg
  },
  m_xl: {
    margin: theme.m_xl
  },

  m_tbsm:{
    marginVertical: theme.m_sm
  },
  m_tbmd:{
    marginVertical: theme.m_md
  },
  m_tblg:{
    marginVertical: theme.m_lg
  },

  m_bsm:{
    marginBottom: theme.m_sm
  },
  m_bmd:{
    marginBottom: theme.m_md
  },
  m_blg:{
    marginBottom: theme.m_lg
  },
  m_bxl:{
    marginBottom: theme.m_xl
  },


  m_lrsm:{
    margineHorizontal: theme.m_sm
  },
  m_lrmd:{
    margineHorizontal: theme.m_md
  },
  m_lrlg:{
    margineHorizontal: theme.m_lg
  },
  // Padding utilities
  p_flat: {
    padding: theme.null || 0
  },
  p_xxs: {
    padding: theme.p_xxs
  },
  p_xs: {
    padding: theme.p_xs
  },
  p_sm: {
    padding: theme.p_sm
  },
  p_md: {
    padding: theme.p_md
  },
  p_lg: {
    padding: theme.p_lg
  },
  p_xl: {
    padding: theme.p_xl
  },

  // Horizontal padding (left + right)
  p_lrxxs: {
    // paddingLeft: theme.p_xxs,
    // paddingRight: theme.p_xxs
    paddingHorizontal: theme.p_xss
  },
  p_lrxs: {
    // paddingLeft: theme.p_xs,
    // paddingRight: theme.p_xs
    paddingHorizontal: theme.p_xs
  },
  p_lrsm: {
    // paddingLeft: theme.p_sm,
    // paddingRight: theme.p_sm
    paddingHorizontal: theme.p_sm

  },
  p_lrmd: {
    // paddingLeft: theme.p_md,
    // paddingRight: theme.p_md
    paddingHorizontal: theme.p_md

  },
  p_lrlg: {
    // paddingLeft: theme.p_lg,
    // paddingRight: theme.p_lg
    paddingHorizontal: theme.p_lg
  },
  p_lrxl: {
    // paddingLeft: theme.p_xl,
    // paddingRight: theme.p_xl
    paddingHorizontal: theme.p_xl
  },

  // Vertical padding (top + bottom)
  p_tbxxs: {
    // paddingTop: theme.p_xxs,
    // paddingBottom: theme.p_xxs
    paddingVertical: theme.p_xxs
  },
  p_tbxs: {
    // paddingTop: theme.p_xs,
    // paddingBottom: theme.p_xs
    paddingVertical: theme.p_xs
  },
  p_tbsm: {
    // paddingTop: theme.p_sm,
    // paddingBottom: theme.p_sm
    paddingVertical: theme.p_sm
  },
  p_tbmd: {
    // paddingTop: theme.p_md,
    // paddingBottom: theme.p_md
    paddingVertical: theme.p_md
  },
  p_tblg: {
    // paddingTop: theme.p_lg,
    // paddingBottom: theme.p_lg
    paddingVertical: theme.p_lg
  },
  p_tbxl: {
    // paddingTop: theme.p_xl,
    // paddingBottom: theme.p_xl
    paddingVertical: theme.p_xl
  },


  //Top padding only
  p_txxs: {
    paddingTop: theme.p_xxs
  },
  p_txs: {
    paddingTop: theme.p_xs
  },
  p_tsm: {
    paddingTop: theme.p_sm
  },
  p_tmd: {
    paddingTop: theme.p_md
  },
  p_tlg: {
    paddingTop: theme.p_lg
  },
  p_txl: {
    paddingTop: theme.p_xl
  },

  //Bottom padding only
  p_bxxs: {
    paddingBottom: theme.p_xxs
  },
  p_bxs: {
    paddingBottom: theme.p_xs
  },
  p_bsm: {
    paddingBottom: theme.p_sm
  },
  p_bmd: {
    paddingBottom: theme.p_md
  },
  p_blg: {
    paddingBottom: theme.p_lg
  },
  p_bxl: {
    paddingBottom: theme.p_xl
  },

  // Left padding only
  p_lxxs: {
    paddingLeft: theme.p_xxs
  },
  p_lxs: {
    paddingLeft: theme.p_xs
  },
  p_lsm: {
    paddingLeft: theme.p_sm
  },
  p_lmd: {
    paddingLeft: theme.p_md
  },
  p_llg: {
    paddingLeft: theme.p_lg
  },
  p_lxl: {
    paddingLeft: theme.p_xl
  },

  // Right padding only
  p_rxxs: {
    paddingRight: theme.p_xxs
  },
  p_rxs: {
    paddingRight: theme.p_xs
  },
  p_rsm: {
    paddingRight: theme.p_sm
  },
  p_rmd: {
    paddingRight: theme.p_md
  },
  p_rlg: {
    paddingRight: theme.p_lg
  },
  p_rxl: {
    paddingRight: theme.p_xl
  },

/* BoxStyle - allSide - (flat;-xl) [ no transition,effect,event] */
boxStyle_flat:{
    // Reset styles (React Native doesn't have exact equivalents for unset)
    
    // Box model
    margin:  0, // Using theme parameter with fallback
    padding:  0, // Using theme parameter with fallback
    boxSizing: 'border-box', // Note: React Native uses 'boxSizing' instead of 'box-sizing'
    
    // Background
    backgroundColor: 'rgba(0, 0, 0, 0)',
    
    // Border
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    
    // Shadow (React Native uses different shadow properties)
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // For Android
    
    // Border radius
    borderRadius: 0,
    
    // Additional React Native specific resets
    overflow: 'hidden', // Common reset in React Native
},

boxStyle_xxs : {
      // Reset styles (React Native doesn't have exact equivalents for unset)
      
      // Box model
      margin: theme.m_xxs || 0, // Using theme parameter with fallback
      padding: theme.p_xxs || 0, // Using theme parameter with fallback
      boxSizing: 'border-box', // Note: React Native uses 'boxSizing' instead of 'box-sizing'
      
      // Background
      backgroundColor: 'rgba(0, 0, 0, 0)',
      
      // Border
      borderWidth: 0,
      borderColor: 'rgba(0, 0, 0, 0)',
      
      // Shadow (React Native uses different shadow properties)
      shadowColor: 'rgba(0, 0, 0, 0)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0, // For Android
      
      // Border radius
      borderRadius: 0,
      
      // Additional React Native specific resets
      overflow: 'hidden', // Common reset in React Native
},
boxStyle_xs : {
  
    // Reset styles (React Native doesn't have exact equivalents for unset)
    
    margin: theme.m_xs || 0, // Using theme parameter with fallback
    
    // Box model
    padding: theme.p_xs || 0, // Using theme parameter with fallback
    boxSizing: 'border-box', // Note: React Native uses 'boxSizing' instead of 'box-sizing'
    
    // Background
    backgroundColor: 'rgba(0, 0, 0, 0)',
    
    // Border
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    
    // Shadow (React Native uses different shadow properties)
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // For Android
    
    // Border radius
    borderRadius: 0,
    
    // Additional React Native specific resets
    overflow: 'hidden', // Common reset in React Native
  
},
boxStyle_sm :{
   
      // Reset styles (React Native doesn't have exact equivalents for unset)
      
      // Box model
      margin: theme.m_sm || 0, // Using theme parameter with fallback
      padding: theme.p_sm || 0, // Using theme parameter with fallback
      boxSizing: 'border-box', // Note: React Native uses 'boxSizing' instead of 'box-sizing'
      
      // Background
      backgroundColor: 'rgba(0, 0, 0, 0)',
      
      // Border
      borderWidth: 0,
      borderColor: 'rgba(0, 0, 0, 0)',
      
      // Shadow (React Native uses different shadow properties)
      shadowColor: 'rgba(0, 0, 0, 0)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0, // For Android
      
      // Border radius
      borderRadius: 0,
      
      // Additional React Native specific resets
      overflow: 'hidden', // Common reset in React Native

},
boxStyle_md : {
       // Reset styles (React Native doesn't have exact equivalents for unset)
       
       
       // Box model
       padding: theme.p_md || 0, // Using theme parameter with fallback
       boxSizing: 'border-box', // Note: React Native uses 'boxSizing' instead of 'box-sizing'
       margin: theme.m_md || 0, // Using theme parameter with fallback
       
       // Background
       backgroundColor: 'rgba(0, 0, 0, 0)',
       
       // Border
       borderWidth: 0,
       borderColor: 'rgba(0, 0, 0, 0)',
       
       // Shadow (React Native uses different shadow properties) 
       shadowColor: 'rgba(0, 0, 0, 0)',
       shadowOffset: { width: 0, height: 0 },
       shadowOpacity: 0,
       shadowRadius: 0,
       elevation: 0, // For Android
       
       // Border radius
       borderRadius: 0,
       
       // Additional React Native specific resets
       overflow: 'hidden', // Common reset in React Native
},
boxStyle_lg :{
    // Reset styles (React Native doesn't have exact equivalents for unset)
    
    margin: theme.m_lg || 0, // Using theme parameter with fallback
    
    // Box model
    padding: theme.p_lg || 0, // Using theme parameter with fallback
    boxSizing: 'border-box', // Note: React Native uses 'boxSizing' instead of 'box-sizing'
    
    // Background
    backgroundColor: 'rgba(0, 0, 0, 0)',
    
    // Border
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    
    // Shadow (React Native uses different shadow properties)
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // For Android
    
    // Border radius
    borderRadius: 0,
    
    // Additional React Native specific resets
    overflow: 'hidden', // Common reset in React Native
},
boxStyle_xl:{
    // Reset styles (React Native doesn't have exact equivalents for unset)
    
    margin: theme.m_xl || 0, // Using theme parameter with fallback
    
    // Box model
    padding: theme.p_xl || 0, // Using theme parameter with fallback
    boxSizing: 'border-box', // Note: React Native uses 'boxSizing' instead of 'box-sizing'
    
    // Background
    backgroundColor: 'rgba(0, 0, 0, 0)',
    
    // Border
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    
    // Shadow (React Native uses different shadow properties)
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // For Android
    
    // Border radius
    borderRadius: 0,
    
    // Additional React Native specific resets
    overflow: 'hidden', // Common reset in React Native
}  

  })

