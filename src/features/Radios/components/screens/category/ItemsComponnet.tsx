import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';

import { useProcessItems } from '../../../../../shared/utils/useProcessItems.ts';

import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

import { serviceMeta } from "../../../config/constants/metas"
import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();

//cards
// import ItemsListCard from "./cards/verticalViewCard"
import { ColMediaDetailMeta_groupItem_0,ColMediaDetailMeta_featuredGroup_xy} from "../../../../../shared/components/cards/featuredCards/radio/index.js"
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

    let remainingItems = processedData.slice(1)
    return (
                <View style={[boxStyles.boxStyle_flat,flexStyles.cgap_lg]}>

                  {processedData[0] && typeof processedData[0] === 'object' && (
                      <View key={processedData[0].id} style={[{width:'100%',minHeight:300}]}>
                        <ColMediaDetailMeta_groupItem_0 item={processedData[0]} />
                      </View>
                    )}                  
                  
                  {/* 2-column grid using FlatList */}
                  {
                    processedData.length > 1 &&
                
                  (
                    <View style={[{flexDirection:'row',flexWrap: 'wrap',justifyContent: 'space-between',}]}>
                      {remainingItems.map((item:Item, index:number) => (
                        typeof item === 'object' ? (
                          <TouchableOpacity
                            key={item.id}
                            style={[]}
                            onPress={() => onPressItem(index + 1, item)}
                          >
                            <ColMediaDetailMeta_featuredGroup_xy item={item} />
                          </TouchableOpacity>
                        ) : null
                      ))}
                      </View>
              
                 )
                }

                </View>
    )
}

export default ItemsComponent