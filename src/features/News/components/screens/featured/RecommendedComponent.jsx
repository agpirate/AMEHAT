import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { useProcessItems } from '../../../../../shared/utils/useProcessItems.ts';

import { serviceMeta } from "../../../config/constants/metas.js"

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';

//cards
// import LatestListCard from "./cards/verticalViewCard"
import LatestListCard from "./cards/LatestListCard.tsx"

const  LatestItems = ({data,onPressItem}) =>{

const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


    return (

                <View style={[boxStyles.boxStyle_flat,flexStyles.cgap_sm]}>
                  {data.map((item,index) => (
                    
                    <View key={item.id} style={[]} >

                        {index == 0 ?
                        (<>
                         
                          <View style={{width:'100%',height:200,overflow:'hidden'}}> 
                              <Image source={require('assets/images/tmma_logo.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}} />
                          </View>
                          
                          <View style={[boxStyles.boxStyle_xs]}> 
                              <Text style={[boxStyles.boxStyle_xs,
                                fontStyles.fontStyle_md,fontStyles.fweight_h5,
                                ]}>
                                {item.title}
                              </Text>
                          <View>
        
                          <Text style={[
                                            fontStyles.fontStyle_xs,fontStyles.fweight_light ,
                            ]}>
                              {data.length}---
                            {item.excerpt}	
                          </Text>
                            </View>
        
                      </View>
                          </>
                        ):
                        (
                        
                        <TouchableOpacity style={[flexStyles.crow,flexStyles.cgap_xs,flexStyles.ia_center,boxStyles.boxStyle_xxs]}
                          onPress={()=>onPressItem(index,item)}
                        >
                          
                              <LatestListCard {...item}   />

                          </TouchableOpacity>
                        )
                        }
                            
        
                        {/* <View>
                          <Text style={[fontStyles.fcolor_grey150]}>__________</Text>
                        </View> */}
                      
                    </View>
                  ))}
                </View>
    )
}

export default LatestItems