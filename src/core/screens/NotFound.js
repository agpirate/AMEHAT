import React, { useContext, useEffect } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { fontStyles } from '../../styles/contentGroundStyles/font/fontStyles.js';
import { boxStyles } from '../../styles/boxStyles.js';
import { borderStyles} from '../../styles/boxBoundStyles/border/border.js';
import { radiusStyles} from '../../styles/boxBoundStyles/border/radius.js';
import { bgcStyles} from '../../styles/contentGroundStyles/bg/bgcolors.js';
import { flexSizes } from '../../styles/displayStyles/child_EditableSizes/BoxSizes.js';
import { flexStyles } from '../../styles/displayStyles/FlexContainer.js'
import { ThemeContext } from '../../shared/contexts/themProvider.js';



const HomeScreen = () => {


    // style provider value
    let {theme} = useContext(ThemeContext);
    const boxStyle = {...boxStyles(theme), ...borderStyles(theme) , ...radiusStyles(theme) , ...bgcStyles(theme) } 
    const fontStyle = {...fontStyles(theme) }
    const flexStyle = {...flexSizes, ...flexStyles(theme) }


  return (
    <View style={[boxStyle.bgc_dark,{flex:1},flexStyle.cj_center,flexStyle.ccolumn,flexStyle.ia_center]}>
     
     <View style={[boxStyle.boxStyle_sm,boxStyle.bgc_grey135,boxStyle.radius_circle,{width:200,height:200},flexStyle.ccolumn,flexStyle.ia_center,flexStyle.cj_center]}> 

      <Text style={[fontStyle.fweight_bolder,fontStyle.fcolor_negative,{fontSize:100}]}>!</Text>
     </View>
      <Text style={[fontStyle.fcolor_grey]}>Resource can't Found !</Text>
      <Text style={[fontStyle.fcolor_grey]}>Please Try to refresh or htttp://tigraitv.com</Text>
    </View>
  );
};

export default HomeScreen;