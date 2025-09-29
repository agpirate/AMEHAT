
/* Default
-------------------- 
display:block;

visibility:visible;
opacity:1;
--------------------

[ SpecificStyles or ___ ]
*/

import { StyleSheet } from 'react-native';

export const groundVisibility = (theme) => StyleSheet.create({

  // Opacity-based visibility
  gVis_Opa0:{opacity:Platform.OS === 'android' ? 0 : 1},
  gVis_Opa01:{opacity: Platform.OS === 'android' ? 0.1 : 1},
  gVis_Opa02:{opacity:Platform.OS === 'android' ? 0.2 :1},
  gVis_Opa03:{opacity:Platform.OS === 'android' ? 0.3 : 1},
  gVis_Opa04:{opacity:Platform.OS === 'android' ? 0.4 : 1},
  gVis_Opa05:{opacity:Platform.OS === 'android' ? 0.5 : 1},
  gVis_Opa06:{opacity:Platform.OS === 'android' ? 0.6 : 1},
  gVis_Opa07:{opacity:Platform.OS === 'android' ? 0.7 : 1},
  gVis_Opa08:{opacity:Platform.OS === 'android' ? 0.8 : 1},
  gVis_Opa09:{opacity:Platform.OS === 'android' ? 0.9 :1 },
  gVis_Opa1:{opacity:Platform.OS === 'android' ? 1 : 1},

});

export default groundVisibility