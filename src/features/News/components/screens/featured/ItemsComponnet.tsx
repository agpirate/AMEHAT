import styleWrap from "@hooks/styleWrap"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { useProcessItems } from '@utils/useProcessItems';


import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';

//cards
// import ItemsListCard from "./cards/verticalViewCard"
import {RowPicColDetailsMeta,RowPicColMetaDetails,ColPicColDetailsMeta} from "@components/cards/featuredCards/news/index.js"

type Item = {
  id: string | number;
  [key: string]: any;
};

type ItemComponentProps = {
  data: Record<string, Item[]>;
  onPressItem: (index: number, item: Item) => void;
};

export const ItemsComponent :React.FC<ItemComponentProps> = ({data, onPressItem}) => {
    // style provider value
const {boxStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

    // Process data using hook 
    // console.log(Object.keys(data[0]))
    const processedData = useProcessItems(data, {
    defaultImageUrl : 'https://www.almondsolutions.com/images/blog-loading-speed-210324.jpg',
      summaryLength: 80,
      enableDefaultValues:true,
    });
    // console.log((processedData[0]) ?? 'null')
    
    return (
        <View style={[boxStyles.boxStyle_flat, flexStyles.cgap_lg,bgcStyles.bgc_light]}>
            {processedData.map((item:Item, index:number) => (
                <View key={item.id} style={[]}>
                    {index == 0 ? (
                        <>
                        <TouchableOpacity 
                            style={[boxStyles.boxStyle_flat]}
                            onPress={() => onPressItem(index, item)}
                        >
                            <ColPicColDetailsMeta item={item} />
                        </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity 
                            style={[boxStyles.boxStyle_flat]}
                            onPress={() => onPressItem(index, item)}
                        >
                            <RowPicColMetaDetails item={item} />
                        </TouchableOpacity>
                    )}
                    
                    <View style={[flexStyles.ia_center]}>
                        <Text style={[fontStyles.fcolor_systemii]}>__________</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

