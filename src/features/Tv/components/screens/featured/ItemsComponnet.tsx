import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { useProcessItems } from '../../../../../shared/utils/useProcessItems.ts';

import { serviceMeta } from "../../../config/constants/metas"

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';


//cards
// import ItemsListCard from "./cards/verticalViewCard"
import { ColMediaDetailMeta} from "../../../../../shared/components/cards/featuredCards/tv/index.js"

type Item = {
  id: string | number;
  [key: string]: any;
};

type ItemComponentProps = {
  data: Record<string, Item[]>;
  onPressItem: (index: number, item: Item) => void;
};

export const ItemsComponent :React.FC<ItemComponentProps> = ({data, onPressItem}) => {

const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


    // Process data using hook
    // console.log(Object.keys(data[0]))
    const processedData = useProcessItems(data, {
    defaultImageUrl : 'https://www.almondsolutions.com/images/blog-loading-speed-210324.jpg',
      summaryLength: 80,
      enableDefaultValues:true,
    });
    return (
        <View style={[boxStyles.boxStyle_flat, flexStyles.cgap_lg]}>
            {processedData.map((item:Item, index:number) => (
                typeof item == 'object' ?
                <View key={item.id} style={[]}>
                    {index == 0 ? (
                        <>
                        
                            <ColMediaDetailMeta item={item} />
                        </>
                    ) : (
                        <TouchableOpacity 
                            style={[boxStyles.boxStyle_flat]}
                            onPress={() => onPressItem(index, item)}
                        >
                            {/* <ColMediaRowDetailMeta item={item}  /> */}
                            
                        </TouchableOpacity>
                    )}
                    
                    <View style={[flexStyles.ia_center]}>
                        <Text style={[fontStyles.fcolor_systemii]}>__________</Text>
                    </View>
                </View> 
                : <View></View>
            ))}
        </View>
    );
};

export default ItemsComponent