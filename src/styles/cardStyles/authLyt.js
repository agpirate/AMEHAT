import { StyleSheet } from 'react-native';



import styleWrap from "../../shared/hooks/styleWrap.js"


export const authLYT = (theme) => {

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

const boxStyle = {...boxStyles, ...borderStyles , ...radiusStyles , ...bgcStyles} 
const fontStyle = {...fontStyles }
const flexStyle = {...flexSizes, ...flexStyles }


return  StyleSheet.create({
    
  container: {
    ...boxStyle.boxStyle_sm,
    ...boxStyle.bgc_light,
    ...flexStyle.colgrow,
    ...flexStyle.cj_center,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    ...boxStyle.boxStyle_xxs,
    ...boxStyle.p_bxl,

    ...fontStyle.fontSize_lg,
    // ...fontStyle.fweight_h3,
    ...fontStyle.fj_center,
    ...fontStyle.fcolor_system,
  },
  input: {
    ...boxStyle.boxStyle_sm,
    ...boxStyle.border_xxs,
    ...boxStyle.border_system,
    ...boxStyle.radius_xxs,
    ...boxStyle.bgc_light,
  },
  button: {
    // ...flexSizes.colshrink,
    ...boxStyle.boxStyle_xs,
    // ...boxStyle.border_xs_system,
    ...boxStyle.radius_xxs,
    ...boxStyle.bgc_system,

  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  anonymousButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#777',
  },
  linkText: {
    ...boxStyle.p_tlg,
    // color: '#3498db',
    ...fontStyle.fj_center,
    ...fontStyle.fcolor_primary
  },

})

}