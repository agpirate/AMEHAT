import { fontStyles } from '../../../styles/contentGroundStyles/font/fontStyles.js';
import { boxStyles } from '../../../styles/boxStyles.js';
import { borderStyles} from '../../../styles/boxBoundStyles/border/border.js';
import { radiusStyles} from '../../../styles/boxBoundStyles/border/radius.js';
import { bgcStyles} from '../../../styles/contentGroundStyles/bg/bgcolors.js';
import { flexSizes } from '../../../styles/displayStyles/child_EditableSizes/BoxSizes.js';
import { flexStyles } from '../../../styles/displayStyles/FlexContainer.js'
import { ThemeContext } from '../../../shared/contexts/themProvider.js';
import React, { useState,useContext,useRef,useEffect } from 'react';

import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const  CategoryItems = ({datas}) =>{

    // style provider value
    let {theme} = useContext(ThemeContext);
    const boxStyle = {...boxStyles(theme), ...borderStyles(theme) , ...radiusStyles(theme) , ...bgcStyles(theme) } 
    const fontStyle = {...fontStyles(theme) }
    const flexStyle = {...flexSizes, ...flexStyles(theme) }


    return (

         <View style={[boxStyle.boxStyle_flat,flexStyle.cgap_sm]}>


            <View style={[boxStyle.border_lg_grey105]}></View>
            <View style={[flexStyle.crow,boxStyle.boxStyle_sm,boxStyle.bgc_grey]}>
                <View style={[boxStyle.border_xl_system]}></View>
                <Text style={[fontStyle.fontStyle_sm,fontStyle.fweight_bolder,fontStyle.fcolor_system]}> Entertainments</Text>
            </View>


           {datas.map((item,inx) => (
             <View
               key={item.id}
               style={[]}
             >
                 {inx == 0 ?
                 (<>
                 
                   <View style={{width:'100%',overflow:'hidden'}}> 
                       <Image source={item.logo} style={{width:'100%',height:200,resizeMode:'cover'}} />
                   </View>
 
                   <View style={[boxStyle.boxStyle_xs]}> 
                   <Text style={[boxStyle.boxStyle_xs,
                     fontStyle.fontStyle_md,fontStyle.fweight_h5,
                     ]}>
                     Hamas says new Gaza talks have begun, hours after Israel launched major offensive
                     
                   </Text>
                   <View>
 
                     </View>
 
               </View>
                   </>
                 ):
                 (<View style={[flexStyle.crow,flexStyle.cgap_xs,flexStyle.ia_center,boxStyle.boxStyle_xxs]}>
 
                  <View style={{width:'30%',overflow:'hidden',backgroundColor:'white',}}> 
                   <Image source={item.logo} style={{width:'100%',height:100,resizeMode:'cover'}} />
                   </View>
 
                     <Text style={[
                       { maxWidth: '70%' },
                       boxStyle.boxStyle_flat,
                       fontStyle.fontStyle_sm,fontStyle.fweight_h5,
                       ]}>
 
                       Hamas says new Gaza talks have begun, hours after Israel launched major offensive
 
                     </Text>
                   
                  
                   </View>
                 )
                 }
 
                 <View style={[flexStyle.crow,flexStyle.cj_between,flexStyle.ia_center,boxStyle.p_lrlg,]}>
 
                   <View style={[flexStyle.crow,flexStyle.ia_center]}>
                               <MaterialIcons name="play-circle" size={20} color="#00002a" />
                               <Text>Watch Video</Text>
 
                   </View>
 
                 <View style={[flexStyle.crow,flexStyle.cj_end,flexStyle.ia_center,boxStyle.p_lrlg,fontStyle.fcolor_primary]}>
                   <Text style={[fontStyle.fontStyle_xs,fontStyle.fweight_h6,fontStyle.fcolor_system]}> Entertainmnet  </Text>
                 
                     <View style={{
                       width: 7,
                       height: 7,
                       borderRadius: 5,
                       backgroundColor: 'white',
                       // iOS shadow
                       shadowColor: '#000',
                       shadowOffset: { width: 0, height: 1 },
                       shadowOpacity: 0.3,
                       shadowRadius: 2,
                       // Android shadow, 
                       elevation: 3,
                     }} />
                     <Text style={[fontStyle.fontStyle_xs,fontStyle.fweight_h6,fontStyle.fcolor_system]}> 4 Hours</Text>
                 </View>
                     
                     </View>
                     
 
                 <View>
                   <Text style={[fontStyle.fcolor_grey150]}>__________</Text>
                 </View>
               
             </View>
           ))}
         </View>
    )
}