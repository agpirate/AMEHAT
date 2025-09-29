/* Already Built - Box's Content ( TextContent ) TextStyling */
/* fontStyle except these defined as inline-default
other style will inherited from ancessetors(parents, grandparents)
,but except < headers and icons >
*/

/* Font :: 
           familly : 
           size :   ( fontStyle_xs ( set size & resetAll))
           weight :  (span,caption, h1,h2,h3,h4,h5,h6)
           line-height : ( )
           text-align :  ( )
           text-transform : ( )
           textAlignVertical :  ( )

           color :  ( font_colorName )

      [ SpecificStyle or packagedStyle ]
 */

/* Font Styling using Frequentlly used Variables */
import { StyleSheet } from 'react-native';

export const fontStyles = (theme) => StyleSheet.create({

  // Font size styles
  fontStyle_xxs: {
    color: undefined,
    textAlignVertical: 'top',      
    lineHeight: undefined,
    textAlign: 'left',
    textTransform: undefined,
    fontFamily: theme.fontFamilly_system,
    fontSize: theme.fontSize_xxs,
    fontWeight: 'normal'
  },
  
  fontStyle_xs: {
    color: undefined,
    textAlignVertical: 'top',      
    lineHeight: undefined,
    textAlign: 'left',
    textTransform: undefined,
    fontFamily: theme.fontFamilly_system,
    fontSize: theme.fontSize_xs,
    fontWeight: 'normal'
  },
  fontStyle_sm: {
    color: undefined,
    textAlignVertical: 'top',      
    lineHeight: undefined,
    textAlign: 'left',
    textTransform: undefined,
    fontFamily: theme.fontFamilly_system,
    fontSize: theme.fontSize_sm,
    fontWeight: 'normal'
  },
  fontStyle_md: {
    color: undefined,
    textAlignVertical: 'top',      
    lineHeight: undefined,
    textAlign: 'left',
    textTransform: undefined,
    fontFamily: theme.fontFamilly_system,
    fontSize: theme.fontSize_md,
    fontWeight: 'normal'
  },
  fontStyle_lg: {
    color: undefined,
    textAlignVertical: 'top',      
    lineHeight: undefined,
    textAlign: 'left',
    textTransform: undefined,
    fontWeight: 'normal',
    fontFamily: theme.fontFamilly_system,

    fontSize: theme.fontSize_lg,
  },
  fontStyle_xl: {
    color: undefined,
    textAlignVertical: 'top',      
    lineHeight: undefined,
    textAlign: 'left',
    textTransform: undefined,
    fontFamily: theme.fontFamilly_system,

    fontSize: theme.fontSize_xl,
    fontWeight: 'normal'
  },


});

export default fontStyles