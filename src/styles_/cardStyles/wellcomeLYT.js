import { StyleSheet } from 'react-native';

import { fontStyles } from '../fontStyles';
import { flexSizes } from '../boxSizes';
import { flexStyles } from '../layouts/flexContainer'

export const wellcomeLYT = (theme) => {

return  StyleSheet.create({
    container: {

      ...flexSizes.colshrink,

      ...flexStyles(theme).ccolumn,
      ...flexStyles(theme).cj_center,
      ...flexStyles(theme).ia_center,
      
      backgroundColor: theme.system_color, // Deep blue
    },
    logoContainer: {

      width: 150,
      height: 150,
      
      marginBottom: 30,

      backgroundColor: 'white',

      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    logo: {
      width: '80%',
      height: '80%',
    },
    title: {
      ...fontStyles(theme).fontStyle_lg,
      ...fontStyles(theme).fweight_h2,
      
      color: 'white',
      marginTop: 20,
      textAlign: 'center',
    },
    subtitle: {
      // ...fontStyles(theme).fontstyle_xs,
      // ...fontStyles(theme).weight_h7,
      // ...fontStyles(theme).color_light,
      //
      marginTop: 10,
      textAlign: 'center',
    },

    footer: {
      position: 'absolute',
      bottom: 40,
    },
    footerText: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: 14,
    },
  });
}