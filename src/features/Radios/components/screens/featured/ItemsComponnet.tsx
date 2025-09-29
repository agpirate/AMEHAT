import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { useProcessItems } from '../../../../../shared/utils/useProcessItems.ts';

import { serviceMeta } from "../../../config/constants/metas"

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';


//cards
// import ItemsListCard from "./cards/verticalViewCard"
import { ColMediaDetailMeta_featuredItem_0, } from "../../../../../shared/components/cards/featuredCards/radio/index.js"

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


    // Process data using hook
    // console.log(Object.keys(data[0]))
    const processedData = useProcessItems(data, {
    defaultImageUrl : 'https://www.almondsolutions.com/images/blog-loading-speed-210324.jpg',
      summaryLength: 80,
      enableDefaultValues:true,
    });

// Use state hook to manage active item
    const [activeItem, setActiveItem] = useState(processedData[0] ?? null);

    return (
        <View style={[boxStyles.boxStyle_flat, flexStyles.cgap_md,boxStyles.m_blg]}>

            {/* <Text>{JSON.stringify(activeItem)}</Text> */}
                                <View style={{width:'100%',height:240}}>
            
        {(activeItem && typeof activeItem == 'object') &&

        
        <View style={{height:'100%'}}>
                            <ColMediaDetailMeta_featuredItem_0 item={activeItem} />
                                        <View style={[flexStyles.ia_center]}>
                                    <Text style={[fontStyles.fcolor_systemii]}>__________</Text>
                                </View>
                                </View>
            }
                        </View>

                {/* <View style={[flexStyles.crow, flexStyles.ia_start, flexStyles.cgap_xs, {flexWrap:'wrap'}]}>

            {processedData.map((item:Item, index:number) => (
                typeof item == 'object' ?
                <View key={item.id} style={[]}>
                        <TouchableOpacity 
                            style={[boxStyles.boxStyle_sm,bgcStyles.bgc_systemii,{maxWidth:'100%'},radiusStyles.radius_circle]}
                            onPress={() => setActiveItem(item)}
                        >
                            <Text style={[fontStyles.fontStyle_sm, fontStyles.fweight_bold,fontStyles.fcolor_light]}>
                                {item.station_list}
                            </Text>
                        </TouchableOpacity>
                    
                   
                </View> 
                : <View></View>
            ))}
                </View> */}

        </View>
    );
};

export default ItemsComponent