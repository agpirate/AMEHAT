const shared = '../../../../../shared/'
import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import ttime from "../../../../utils/translateTimeString.js"

import ImagePlayer from "../../ImagePlayers.js"

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image,Dimensions,ActivityIndicator, TouchableOpacity,useWindowDimensions, StyleSheet, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface incomingMediaType {
    item:any,
    featureName?:string
}

const ItemCard = ({item,featureName='common'} : incomingMediaType) =>
  
  {

  const { t } = useTranslation();
    
const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

  
        const [dimensions, setDimensions] = useState({ width: 1, height: 1 });
        const windowWidth = useWindowDimensions().width;
        const imageContainer = [{
          padding:0,
          margin:0,
          width: windowWidth*0.3,
          height: dimensions.width ? ((windowWidth*0.3) * dimensions.height / dimensions.width) : 150,
          overflow: 'hidden',
          borderRadius:3
        }]

  return (
  <View style={[boxStyles.boxStyle_flat,boxStyles.p_lrmd,flexStyles.crow,flexStyles.ia_center]} >


                   <ImagePlayer  styles={{"container":imageContainer}} item ={{...item.images}} setDimensions ={setDimensions} />

                            
                        <View style={[styles.verticalContent,boxStyles.boxStyle_xs,flexStyles.cj_between]}> 
                                                   

                          {item?.title && (
                            <Text style={[fontStyles.fcolor_grey,[fontStyles.fontStyle_sm,fontStyles.fweight_bold,fontStyles.fcolor_dark]]} 
                            numberOfLines={2}>
                              {item.title}
                            </Text>
                          )}

                          {/* Safe description with fallback and line limit */}
                          {item?.summary && (
                            <Text style={[styles.verticalDesc,fontStyles.fcolor_grey]} numberOfLines={2}>
                              {item.summary}
                            </Text>
                          )}


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

                                        {(item.subcategory) && (<Text> {t('news|'+(item?.subcategory ?? ''))}</Text>)}
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
    marginBottom: 0,
  },
});
