
import styleWrap from "../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React, { useState,useContext,useRef,useEffect } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useMemo } from 'react';

import { serviceMeta } from "../../config/constants/metas.js"

import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';


import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();

// custome contexts hooks
import { usePageSettings } from '../../../../shared/contexts/pageSettingsProvider';


import {useNewsStore} from "../../stores/store"
import { ROUTES } from '../../../../core/routes/config/route';


export const CategoryOptions = ({navigateTo}) =>{

      const { pageSettingComputor,pageSetting } = usePageSettings();
      const { t } = useTranslation();

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


      const {  
          schema,

          modelGroups,
          clientQFilters,
startSubFetchOperation,

          fetchItems,
      
          startFetchOperation,
          removeClientSettingQFilters,
         }  = useNewsStore()
      
      // categories context 
      const setFilterCategoryOptions = (key:string,value:string) =>{
        //reset the filter  
        if(key == 'category'){
          startFetchOperation({key,value},null)
          if(value == 'Stream') navigateTo(ROUTES.MAIN_TAB.RADIO.LIST.LATEST)
          else  navigateTo(ROUTES.MAIN_TAB.RADIO.LIST.GROUP_CATEGORY,{cat:value})
        } else{
          //forName_ thier name
          startFetchOperation({key,value},'fetch_subcat')
          // startSubFetchOperation({key,value},'fetch_subcat')
          fetchItems()
        }
      };

    return (
        <Animated.View style={[boxStyles.boxStyle_flat,bgcStyles.bgc_dark]}>

          <ScrollView style={[boxStyles.boxStyle_flat]} horizontal showsHorizontalScrollIndicator={false}>
            
            {Object.keys(modelGroups.categories).map((cat,index) => (
              <View key={cat}    style={[flexStyles.crow,{justifyContent: 'center', alignItems: 'center' }]}> 
                  
                  <TouchableOpacity
                   
                    style={[
                      boxStyles.boxStyle_xs,borderStyles.border_flat_system,boxStyles.p_lrmd,
                      // clientQFilters.filterClientSetting.category === cat && borderStyles.border_bxs ,
                      flexStyles.crow,flexStyles.cj_center,flexStyles.ia_center,
                      flexStyles.cgap_sm
                    ]}
                    onPress={()=>setFilterCategoryOptions(modelGroups.categories[cat].groupName,cat)}
                  >

                    <Text style={[
                      fontStyles.fontStyle_sm,fontStyles.fweight_bolder,fontStyles.fcolor_light,
                      clientQFilters.filterClientSetting.category === cat && fontStyles.fcolor_system,
                      fontStyles.f_capitalize
                    ]}
                    >
                      {t(`${serviceMeta.serviceName}|${cat}`)} 
                      
                    </Text>
                    {
                      modelGroups.categories[cat]?.children &&
                      <FontAwesome name='sort-down' style={[fontStyles.fcolor_light]} />
                    }
                  </TouchableOpacity>

                <View
                  style={[boxStyles.boxStyle_xxs,bgcStyles.bgc_grey225, {
                    height:'30%', // Adjust the height as needed
                    width: 1,    // Adjust the width (thickness) as needed
                  }]}
                />

              </View>
            ))}

          </ScrollView>

{clientQFilters.filterClientSetting.category && 
  modelGroups.categories[clientQFilters.filterClientSetting.category]?.children && (
  <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    style={[{marginTop: 8}]} // Add some spacing
  >
{Object.entries(modelGroups.categories[clientQFilters.filterClientSetting.category].children).map(([key, valuesObj]) => (
      <TouchableOpacity
        key={key}
        style={[
          boxStyles.boxStyle_xxs, 
          borderStyles.border_flat_system, 
          boxStyles.p_lrmd,
          
          flexStyles.crow, 
          flexStyles.cj_center, 
          flexStyles.ia_center,
          // clientQFilters.filterClientSetting.subcategory === key && boxStyle.border_bmd,
          {marginRight: 8}
        ]}
        onPress={() => setFilterCategoryOptions(((valuesObj as { groupName: string }).groupName),key)}
      >
        {
          clientQFilters.filterClientSetting.subcategory ?
          (
            <Text style={[
          fontStyles.fontStyle_sm, 
          fontStyles.fweight_bolder, 
          fontStyles.fcolor_systemii,
          clientQFilters.filterClientSetting.subcategory === key && fontStyles.fcolor_systemii,
          fontStyles.f_capitalize
        ]}>
          {t(`${serviceMeta.serviceName}|${key}`)} 
        </Text>
          ) :
          (
        <Text style={[
          fontStyles.fontStyle_sm, 
          fontStyles.fweight_bolder, 
          fontStyles.fcolor_systemii,
          clientQFilters.filterClientSetting[((clientQFilters.filterClientSetting.category)+'_subcategory').toLocaleLowerCase() ] === key && fontStyles.fcolor_system,
          fontStyles.f_capitalize
        ]}>
          {t(`${serviceMeta.serviceName}|${key}`)} 
        </Text>
          )
        }
        
      </TouchableOpacity>
    ))}
  </ScrollView>
)}

          
          </Animated.View>
  )}



  // export default categoryOptions