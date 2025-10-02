import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import env from "../../../../config/environment.js"

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
interface incomingMediaType {
    item:any,
    featureName?:string
}

const VerticalNewsCard = ({item }:incomingMediaType) => 
  
  {

const {boxStyles,borderStyles,shadowStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  return (
  <View style={[flexStyles.crow,flexStyles.ia_start]} >

    <View style={[,{width:'30%',height:100,overflow:'hidden'}]}> 

          { item.FeaturedImage ? (
                 <Image source={{uri: item.FeaturedImage, cache: 'reload' }} style={[{borderRadius: 30,width:'100%',height:'100%',resizeMode:'contain'}]} />

            ) : (

              item.FormatedImage ? (
                 <Image source={{uri: env.API_BASE_URL+item.FormatedImage.formats.thumbnail.url, cache: 'reload' }} 
                 style={[{borderRadius: 30,width:'100%',height:'100%',resizeMode:'contain'}]} />

            ) : ( 

              item.ObjectImage ? (
                 <Image source={{uri: env.API_BASE_URL+item.ObjectImage.url, cache: 'reload' }} style={[{borderRadius: 30,width:'100%',height:'100%',resizeMode:'contain'}]} />

            ) : ( 
                <View></View>
                //  <Image source={require('assets/images/tmma_logo.png')} style={[radiusStyles.radius_xs,{width:'100%',height:'100%',resizeMode:'contain'}]} />
            )
            )
           )
          }

    </View>

    {/* Header Information */}
    <View style={styles.verticalContent}>
      
      <View style={[flexStyles.crow,flexStyles.cj_between,{width:'100%'}]}>
  {/* Safe date rendering with fallback */}
  <Text style={styles.verticalDate}>
    {item?.fullDate ?? 'No date available'}
  </Text> 
  
  {/* Safe category rendering with fallback */}
  <Text style={styles.verticalDate}>
    {item?.category ?? 'Uncategorized'}
  </Text>  
      </View>
      
{/* Safe title with empty fallback (renders nothing) */}
{item?.title && (
  <Text style={[fontStyles.fontStyle_sm,fontStyles.fweight_bold,fontStyles.fcolor_dark]}>
    {item.title}
  </Text>
)}

{/* Safe summary with fallback and line limit */}
<Text 
  style={styles.verticalDesc} 
  numberOfLines={2}
>
  {item.summary}
</Text>

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
    marginBottom: 16,
    elevation: 1,
  },
  verticalImage: {
    width: '100%',
    height: 180,
  },
  verticalContent: {
    padding: 5,
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