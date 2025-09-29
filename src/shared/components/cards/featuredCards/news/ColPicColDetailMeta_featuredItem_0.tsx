const shared = '../../../../shared/'
import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';


import env from "../../../../config/environment.js"

import ttime from "../../../../utils/translateTimeString.js"

import ImagePlayer from "../../ImagePlayers.js"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image,Dimensions,ActivityIndicator, TouchableOpacity,useWindowDimensions, StyleSheet, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';


// const { t } = useTranslation();

interface incomingMediaType {
    item:any,
    featureName?:string
}

const ItemCard = ({item,featureName='common'} : incomingMediaType) => 
  
  {

const { t } = useTranslation();

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

    //image loader -
    const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
    const windowWidth = useWindowDimensions().width;
    
    const imageContainer = [{
      padding:0,
      margin:0,
      width: windowWidth*1,
      height: dimensions.width ? ((windowWidth*1) * dimensions.height / dimensions.width) : 150,
      overflow: 'hidden',
          borderRadius: 0,
    }]

  return (
  <View style={[boxStyles.boxStyle_flat,flexStyles.ia_start]} >

                          <ImagePlayer  styles={{"container":imageContainer}} item ={{...item.images}} setDimensions ={setDimensions} />

                          
        
                          <View style={[boxStyles.boxStyle_xs,boxStyles.p_lrmd]}> 
                          <Text style={[
                            fontStyles.fontStyle_sm,fontStyles.fweight_bold,fontStyles.fcolor_dark
                            ]}>
                            {item.title} 
                          </Text>

                          {/* {item.description && (<Text style={[]} numberOfLines={2}>{item.description}</Text>)} */}
                          {item.summary && (<Text  style={[fontStyles.fcolor_dark]} numberOfLines={2}>{item.summary}</Text>)}

                            <View style={[boxStyles.p_tsm,flexStyles.crow,flexStyles.cj_between,boxStyles.p_rlg]}>

                                      {
                                        item.FeaturedVideo && (
                                        <View style={[flexStyles.crow,flexStyles.cj_end,
                                          flexStyles.cgap_xs
                                        ]}>
                                                <MaterialIcons name="play-circle" size={20} color="#00002a" />
                                                  <Text>Watch Video</Text>
                                        </View>)
                                      }

                                      <Text style={styles.verticalDate}>
                                        {ttime(item.fullDate)}                                        
                                                                            
                                      </Text>
                            </View>

                         </View>
  </View>
);

  }
export default ItemCard

const styles = StyleSheet.create({
  verticalCard: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
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