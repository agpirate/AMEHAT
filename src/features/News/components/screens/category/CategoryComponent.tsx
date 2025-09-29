import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { useProcessItems } from '../../../../../shared/utils/useProcessItems';

import { serviceMeta } from "../../../config/constants/metas.js"

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';

//cards
import {RowPicColDetailsMeta,RowPicColMetaDetails,ColPicColDetailsMeta} from "../../../../../shared/components/cards/featuredCards/news/index.js"

type Item = {
  id: string | number;
  [key: string]: any;
};

type CategoryComponentProps = {
  data: Record<string, Item[]>;
  onPressItem: (index: number, item: Item) => void;
};

export const  CategoryComponent: React.FC<CategoryComponentProps> = ({data,onPressItem}) =>{

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()



    
      const { t } = useTranslation();
    
    // Process data using hook
    
    const processedData =  (dataItems:Item[]) =>{
      return  useProcessItems(dataItems, {
    defaultImageUrl : 'https://www.almondsolutions.com/images/blog-loading-speed-210324.jpg',
      summaryLength: 80,
      enableDefaultValues:true,
    });
  }

    return (

         <View style={[boxStyles.boxStyle_flat,flexStyles.cgap_sm]}>


          <View style={[bgcStyles.bgc_grey30,{width:'100%',height:3}]}>
             
          </View>

          
          {Object.entries(data).map(([key,items])=>(
            <View key={key}>

                <View style={[flexStyles.crow,flexStyles.cgap_xs,boxStyles.boxStyle_sm]}>
                    <View style={[bgcStyles.bgc_system,{width:10,height:10}]}></View>
                    <Text style={[fontStyles.fontStyle_sm,fontStyles.fweight_bolder,fontStyles.fcolor_systemii,fontStyles.f_uppercase]}> 
                      {t(`${serviceMeta.serviceName}|${key}`)} </Text>
                </View>

                  {processedData(items).map((item:Item,index:number) => (
                    <View
                      key={item.id}
                      style={[]}
                    >


                        {index == 0 ?
                        (<>
                              <TouchableOpacity style={[boxStyles.boxStyle_flat]}
                              onPress={() => onPressItem(index, item)}  >
                              <ColPicColDetailsMeta item={item}   />
                            </TouchableOpacity>

                          </>
                        ):
        (
                                
                                <TouchableOpacity style={[boxStyles.boxStyle_flat,bgcStyles.bgc_dark]}
                                  onPress={()=>onPressItem(index,item)}
                                >
                                  
                                      <RowPicColDetailsMeta  item={item}    />

                                  </TouchableOpacity>
                                )
                        }
        
        
                      <Text style={[bgcStyles.bgc_grey,{width:'100%',height:1}]}></Text>
                    </View>
                  ))}

    </View>
          ))
          }

         </View>
    )
}