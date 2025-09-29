import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import { useProcessItems } from '../../../../../shared/utils/useProcessItems.ts';

import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

import { serviceMeta } from "../../../config/constants/metas"
import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();

//cards
// import FeaturedCategoryCard from "./cards/verticalViewCard"
// import FeaturedCategoryCard from "./cards/CategoryListCard.tsx"
import { ColMediaDetailMeta_groupItem_xy} from "../../../../../shared/components/cards/featuredCards/radio/index.js"

type Item = {
  id: string | number;
  [key: string]: any;
};

type ItemComponentProps = {
  data: Record<string, Item[]>;
  onPressItem: (index: number, item: Item) => void;
};

 const  CategoryComponent: React.FC<ItemComponentProps> = ({data,onPressItem}) =>{

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


          {Object.entries(data).map(([key,items])=>(

            <View key ={key}> 
              <View style={[flexStyles.crow,flexStyles.cj_between,boxStyles.p_lrsm]}>
               <View style={[flexStyles.crow,flexStyles.cgap_xs]}>
                    <View style={[bgcStyles.bgc_system,{width:10,height:10}]}></View>
                    <Text style={[fontStyles.fontStyle_sm,fontStyles.fweight_bolder,fontStyles.fcolor_systemii,fontStyles.f_uppercase]}> 
                      {t(`${serviceMeta.serviceName}|${key}`)} </Text>
              </View>
              <Text style={[fontStyles.fweight_bold]}>View All</Text>
              </View>

                <ScrollView key={key} horizontal showsHorizontalScrollIndicator={false} style={[]}>

                  {processedData(items).map((item:Item,index:number) => (
                typeof item == 'object' ?

                    <View
                      key={item.id}
                      style={[]}
                      
                    >

                    {index == 0 ? (
                        <>
                        
                            {/* <TopItemCardVideo item={item} /> */}
                        </>
                    ) : (
                        <TouchableOpacity 
                            style={[boxStyles.boxStyle_flat]}
                            onPress={() => onPressItem(index, item)}
                        >
                            <ColMediaDetailMeta_groupItem_xy item={item}  />     
                                                   
                        </TouchableOpacity>
                    )}

                                
        
                      
                    </View>
                    :<View></View>
                  ))}

          </ScrollView>

                  </View>

          ))
          }

         </View>
    )
}

export default CategoryComponent