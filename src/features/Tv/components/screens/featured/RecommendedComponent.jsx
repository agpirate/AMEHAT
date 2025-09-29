import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { useProcessItems } from '../../../../../shared/utils/useProcessItems.ts';

import { serviceMeta } from "../../../config/constants/metas"

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';


//cards
// import LatestListCard from "./cards/verticalViewCard"
import LatestListCard from "./cards/LatestListCard.tsx"

const  LatestItems = ({data,onPressItem}) =>{

const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()



    return (

                <View style={[boxStyle.boxStyle_flat,flexStyle.cgap_sm]}>
                  {data.map((item,index) => (
                    
                    <View key={item.id} style={[]} >

                        {index == 0 ?
                        (<>
                         
                          <View style={{width:'100%',height:200,overflow:'hidden'}}> 
                              <Image source={require('assets/images/tmma_logo.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}} />
                          </View>
                          
                          <View style={[boxStyle.boxStyle_xs]}> 
                              <Text style={[boxStyle.boxStyle_xs,
                                fontStyle.fontStyle_md,fontStyle.fweight_h5,
                                ]}>
                                {item.title}
                              </Text>
                          <View>
        
                          <Text style={[
                                            fontStyle.fontStyle_xs,fontStyle.fweight_light ,
                            ]}>
                              {data.length}---
                            {item.excerpt}	
                          </Text>
                            </View>
        
                      </View>
                          </>
                        ):
                        (
                        
                        <TouchableOpacity style={[flexStyle.crow,flexStyle.cgap_xs,flexStyle.ia_center,boxStyle.boxStyle_xxs]}
                          onPress={()=>onPressItem(index,item)}
                        >
                          
                              <LatestListCard {...item}   />

                          </TouchableOpacity>
                        )
                        }
                            
        
                        {/* <View>
                          <Text style={[fontStyle.fcolor_grey150]}>__________</Text>
                        </View> */}
                      
                    </View>
                  ))}
                </View>
    )
}

export default LatestItems