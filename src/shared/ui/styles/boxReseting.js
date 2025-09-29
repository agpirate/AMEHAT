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


  export default boxStyles