import { StyleSheet } from 'react-native';

import { fontStyles } from '../fontStyles';

import { boxStyles } from '../boxStyles';
import { borderStyles} from '../basics/border/border';
import { radiusStyles} from '../basics/border/radius';
import { bgcStyles} from '../basics/bg/bgcolors';

import { flexSizes } from '../boxSizes';
import { flexStyles } from '../layouts/flexContainer'

export const authLYT = (theme) => {

const boxStyle = {...boxStyles(theme), ...borderStyles(theme) , ...radiusStyles(theme) , ...bgcStyles(theme) } 
const fontStyle = {...fontStyles(theme) }
const flexStyle = {...flexSizes, ...flexStyles(theme) }

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
    ...boxStyle.border_xs_system,
    ...boxStyle.radius_xxs,
    ...boxStyle.bgc_light,
  },
  button: {
    ...flexSizes.colshrink,
    ...boxStyle.boxStyle_sm,
    // ...boxStyle.border_xs_system,
    ...boxStyle.radius_xxs,
    ...boxStyle.bgc_system,

    // ...flexStyle.ia_center,
    // backgroundColor: '#3498db',
    // padding: 15,
    // borderRadius: 8,
    // alignItems: 'center',
    // marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  anonymousButton: {
    backgroundColor: '#7f8c8d',
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    //     backgroundColor: '#3498db',
    // padding: 15,
    // borderRadius: 8,
    // alignItems: 'center',
    // marginBottom: 10,
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