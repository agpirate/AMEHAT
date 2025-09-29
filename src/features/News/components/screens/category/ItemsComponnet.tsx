import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


import { useProcessItems } from '../../../../../shared/utils/useProcessItems';

import { serviceMeta } from "../../../config/constants/metas.js"

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';

//cards
// import ItemsListCard from "./cards/verticalViewCard"
// import TopItemCard from "../../common/cards/TopItemCard.tsx"
import {RowPicColDetailsMeta,RowPicColMetaDetails,ColPicColDetailsMeta} from "../../../../../shared/components/cards/featuredCards/news/index.js"

type Item = {
  id: string | number;
  [key: string]: any;
};

type ItemComponentProps = {
  data: Record<string, Item[]>;
  onPressItem: (index: number, item: Item) => void;
};

export const ItemsComponent :React.FC<ItemComponentProps> = ({data, onPressItem}) => {

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

    

    const processedData = useProcessItems(data, {
            defaultImageUrl : 'https://www.almondsolutions.com/images/blog-loading-speed-210324.jpg',
              summaryLength: 80,
              enableDefaultValues:true,
            });

            
    return (

                <View style={[boxStyles.boxStyle_flat,flexStyles.cgap_xxs]}>

                  {
                  processedData.map((item:Item,index:number) => (
                    
                    <View key={item.id} style={[]} >

                        {index == 0 ?
                        (<>
                        <TouchableOpacity 
                            style={[boxStyles.boxStyle_flat]}
                            onPress={() => onPressItem(index, item)}
                        >
                            <ColPicColDetailsMeta item={item} />
                        </TouchableOpacity>
                        </>
                    ) : (
                        
                        <TouchableOpacity style={[flexStyles.crow,flexStyles.cgap_xs,flexStyles.ia_center,boxStyles.boxStyle_flat]}
                          onPress={()=>onPressItem(index,item)}
                        >
                          
                              <RowPicColDetailsMeta item={item}   />

                          </TouchableOpacity> 
                        )
                        }
                            
        
                        {/* <View style={[flexStyles.ia_center]}>
                          <Text style={[fontStyles.fcolor_systemii]}>__________</Text>
                        </View> */}
                      
                    </View>
                  ))
                  }

                </View>
    )
}

export default ItemsComponent