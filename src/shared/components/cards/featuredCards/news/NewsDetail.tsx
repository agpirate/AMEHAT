const shared = '../../../../../shared/'
import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import env from "../../../../config/environment.js"

import ttime from "../../../../utils/translateTimeString.js"
import ImagePlayer from "../../ImagePlayers.js"

import ContentRenderer from '../../ContentRenderer.js';

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image,Dimensions,ActivityIndicator, TouchableOpacity,useWindowDimensions, StyleSheet, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';



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
          width: windowWidth*0.9,
          height: dimensions.width ? ((windowWidth*0.9) * dimensions.height / dimensions.width) : 150,
          overflow: 'hidden',
          bordeRadius: 0,
        }]

  return (
  <View style={[boxStyles.boxStyle_flat,boxStyles.p_lrxs,flexStyles.ia_start,flexStyles.cgap_sm,
    
  ]} >

      {/* Headers */}
      <Text style={[fontStyles.fontStyle_md,fontStyles.fweight_h1,fontStyles.fcolor_grey225]}>{item.title}</Text>
      
      {/* Author and Date */}
      <View style={[flexStyles.crow,flexStyles.cj_between,{width:'100%'  }]}>
        <Text style={[fontStyles.fcolor_system]}> {t(`common|by`)} {item.author ?? t(`common|unknown`)}</Text>
        <Text style={[fontStyles.fcolor_system]}>{ttime(item.fullDate)}</Text>
      </View>
    
      {/* Hero Image */}
      <ImagePlayer  styles={{"container":imageContainer}} item ={{...item.images}} setDimensions ={setDimensions} />

      {/* Descriptions */}
      {item['description'] && <Text style={[]}>{item['description'] ?? ''}</Text> }

      {/* Main Contents */}
      {item.content && <ContentRenderer content={item.content}  /> }

      {/* Summary */}
      {/* <ContentRenderer content={item.summary}  /> */}
                        
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
