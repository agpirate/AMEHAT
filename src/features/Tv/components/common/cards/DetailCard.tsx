import { fontStyles } from '../../../../../styles/contentGroundStyles/font/fontStyles.js';
import { boxStyles } from '../../../../../styles/boxStyles.js';
import { borderStyles} from '../../../../../styles/boxBoundStyles/border/border.js';
import { radiusStyles} from '../../../../../styles/boxBoundStyles/border/radius.js';
import { bgcStyles} from '../../../../../styles/contentGroundStyles/bg/bgcolors.js';
import { flexSizes } from '../../../../../styles/displayStyles/child_EditableSizes/BoxSizes.js';
import { flexStyles } from '../../../../../styles/displayStyles/FlexContainer.js'
import { ThemeContext } from '../../../../../shared/contexts/themProvider.js';

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const VerticalNewsCard = ({category,createdAt, title, description, imageUrl, date }) => 
  
  
  {

        // style provider value
  let {theme} = useContext(ThemeContext);
  
  let styles_ = useMemo(
    () => ({boxStyles:boxStyles(theme),radiusStyles:radiusStyles(theme),bgcStyles:bgcStyles(theme),
    fontStyles:fontStyles(theme),flexSizes:flexSizes,flexStyles:flexStyles(theme)}),
    [theme]); // Only recalculates when theme changes

  return (
  <View style={[styles.verticalCard,styles_.flexStyles.crow,styles_.flexStyles.ia_start]} >

    <View style={{width:'30%',height:100,overflow:'hidden'}}> 

          { imageUrl ? (
                 <Image source={{uri: imageUrl, cache: 'reload' }} style={{width:'100%',height:'100%',resizeMode:'contain'}} />

            ) : (
                 <Image source={require('assets/images/tmma_logo.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}} />
      
           )
    }
    </View>

    {/* Header Information */}
    <View style={styles.verticalContent}>
      
      <View style={[styles_.flexStyles.crow,styles_.flexStyles.cj_between]}><Text style={styles.verticalDate}>{date}</Text> <Text style={styles.verticalDate}>{category}</Text>  </View>
      <Text style={styles.verticalTitle}>{title}</Text>
      <Text style={styles.verticalDesc} numberOfLines={2}>{description}</Text>

     <View style={[styles_.flexStyles.crow,styles_.flexStyles.ia_center]}>
    
                                            <MaterialIcons name="play-circle" size={20} color="#00002a" />
                                      <Text>Watch Video</Text>
                                   
      </View>

    </View>


    {/* Meta Data Informations*/}

  </View>
);

  }
export default VerticalNewsCard

const styles = StyleSheet.create({
  verticalCard: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 16,
    elevation: 1,
  },
  verticalImage: {
    width: '100%',
    height: 180,
  },
  verticalContent: {
    padding: 12,
    maxWidth:'70%'
  },
  verticalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  verticalDesc: {
    fontSize: 14,
    color: '#666',
  },
  verticalDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
});