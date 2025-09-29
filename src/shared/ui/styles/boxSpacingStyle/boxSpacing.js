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

mp_flat: {
  margin: theme.null || 0,
  padding: theme.null || 0
},
mp_xxs: {
    margin: theme.m_xxs,
    padding: theme.p_xxs
  },
  mp_xs: {
    margin: theme.m_xs,
    padding: theme.p_xs
  },
  mp_sm: {
    margin: theme.m_sm,
    padding: theme.p_sm
  },
  mp_md: {
    margin: theme.m_md,
    padding: theme.p_md
  },
  mp_lg: {
    margin: theme.m_lg,
    padding: theme.p_lg
  },
  mp_xl: {
    margin: theme.m_xl,
    padding: theme.p_xl
  },
  
//all direction margins
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


  //bottom margins
  m_bxxs:{
    marginBottom: theme.m_xxs
  },
  m_bxs:{
    marginBottom: theme.m_xs
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

    m_txxs:{
    marginTop: theme.m_xxs
  },
  m_txs:{
    marginTop: theme.m_xs
  },
  m_tsm:{
    marginTop: theme.m_sm
  },
  m_tmd:{
    marginTop: theme.m_md
  },
  m_tlg:{
    marginTop: theme.m_lg
  },
  m_txl:{
    marginTop: theme.m_xl
  },
  

  m_lxxs:{
    marginLeft: theme.m_xxs
  },
  m_lxs:{
    marginLeft: theme.m_xs
  },
  m_lsm:{
    marginLeft: theme.m_sm
  },
  m_lmd:{
    marginLeft: theme.m_md
  },
  m_llg:{
    marginLeft: theme.m_lg
  },
  m_lxl:{
    marginLeft: theme.m_xl
  },


      m_rxxs:{
    marginRight: theme.m_xxs
  },
  m_rxs:{
    marginRight: theme.m_xs
  },
  m_rsm:{
    marginRight: theme.m_sm
  },
  m_rmd:{
    marginRight: theme.m_md
  },
  m_rlg:{
    marginRight: theme.m_lg
  },
  m_rxl:{
    marginRight: theme.m_xl
  },

  //Vertical margins
  m_verticalsm:{
    marginVertical: theme.m_sm
  },
  m_verticalmd:{
    marginVertical: theme.m_md
  },
  m_verticallg:{
    marginVertical: theme.m_lg
  },

  //horizontal margines
    m_horizontalxss:{
    margineHorizontal: theme.m_xxs
  },
    m_horizontalxs:{
    margineHorizontal: theme.m_xs
  },
  m_horizontalsm:{
    margineHorizontal: theme.m_sm
  },
  m_horizontalmd:{
    margineHorizontal: theme.m_md
  },
  m_horizontallg:{
    margineHorizontal: theme.m_lg
  },
  m_horizontalxl:{
    margineHorizontal: theme.m_xl
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
  p_horizontalxxs: {
    // paddingLeft: theme.p_xxs,
    // paddingRight: theme.p_xxs
    paddingHorizontal: theme.p_xss
  },
  p_horizontalxs: {
    paddingHorizontal: theme.p_xs
  },
  p_horizontalsm: {
    paddingHorizontal: theme.p_sm

  },
  p_horizontalmd: {
    paddingHorizontal: theme.p_md

  },
  p_horizontallg: {
    paddingHorizontal: theme.p_lg
  },
  p_horizontalxl: {
    paddingHorizontal: theme.p_xl
  },

  // Vertical padding (top + bottom)
  p_verticalxxs: {
    // paddingTop: theme.p_xxs,
    // paddingBottom: theme.p_xxs
    paddingVertical: theme.p_xxs
  },
  p_verticalxs: {
    paddingVertical: theme.p_xs
  },
  p_verticalsm: {
    paddingVertical: theme.p_sm
  },
  p_verticalmd: {
    paddingVertical: theme.p_md
  },
  p_verticallg: {
    paddingVertical: theme.p_lg
  },
  p_verticalxl: {
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


  })


  export default boxStyles