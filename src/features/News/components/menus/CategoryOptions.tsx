import styleWrap from "../../../../shared/hooks/styleWrap.js"
import { ThemeContext } from '../../../../shared/contexts/themProvider.js';

import React, { useState,useContext,useRef,useEffect } from 'react';

import { useMemo } from 'react';

import { serviceMeta } from "../../config/constants/metas.js"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

import { useTranslation } from 'react-i18next';

// custome contexts hooks
import { usePageSettings } from '../../../../shared/contexts/pageSettingsProvider';


import {useNewsStore} from "../../stores/store"

type CategoryOptionsProps = {
  navigateTo: (route: string, params?: any) => void;
  collapse: boolean;
};

export const CategoryOptions = ({navigateTo, collapse}: CategoryOptionsProps) =>{

      const { pageSettingComputor,pageSetting } = usePageSettings();
      const { t } = useTranslation();

  // style provider value
  let {theme} = useContext(ThemeContext);
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
          if(value == 'latest') navigateTo('LATEST')
          else  navigateTo('GROUP_CATEGORY',{cat:value})
        } else{
          startFetchOperation({key,value},'fetch_subcat')
          fetchItems()
        }

      };

      
    return (

      <>
      {collapse ?

      
        <Animated.View style={[boxStyles.boxStyle_flat,bgcStyles.bgc_light]}>

          <ScrollView style={[boxStyles.boxStyle_flat]} horizontal showsHorizontalScrollIndicator={false}>
            
            {Object.keys(modelGroups.categories).map((cat,index) => (
              <View key={cat}    style={[flexStyles.crow,{justifyContent: 'center', alignItems: 'center' }]}> 
                  
                  <TouchableOpacity
                   
                    style={[
                      boxStyles.boxStyle_sm,borderStyles.border_flat_system,boxStyles.p_lrlg,
                      
                      flexStyles.crow,flexStyles.cj_center,flexStyles.ia_center,
                      flexStyles.cgap_xs,
                    ]}
                    onPress={()=>setFilterCategoryOptions(modelGroups.categories[cat].groupName,cat)}
                  >

                    <Text style={[
                      fontStyles.fontStyle_sm,fontStyles.fweight_bolder,fontStyles.fcolor_dark,
                      clientQFilters.filterClientSetting.category === cat && fontStyles.fcolor_systemii,
                      fontStyles.f_capitalize
                    ]}
                    >
                      {t(`${serviceMeta.serviceName}|${cat}`)} 
                      
                      
                    </Text>

                    {
                      modelGroups.categories[cat]?.children &&
                      <FontAwesome name='sort-down' style={[fontStyles.fcolor_dark]} />
                    }
                  </TouchableOpacity>

                <View
                  style={[boxStyles.boxStyle_xxs,bgcStyles.bgc_grey30, {
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
          boxStyles.p_lrlg,
          
          flexStyles.crow, 
          flexStyles.cj_center, 
          flexStyles.ia_center,
          // clientQFilters.filterClientSetting.subcategory === key && boxStyle.border_bmd,
          {marginRight: 8}
        ]}
        onPress={() => setFilterCategoryOptions(((valuesObj as { groupName: string }).groupName),key)}
      >
        <Text style={[
          fontStyles.fontStyle_sm, 
          fontStyles.fweight_bolder, 
          fontStyles.fcolor_systemii,
          // clientQFilters.filterClientSetting.subcategory === key && styles.fontStyles.fcolor_system,
          fontStyles.f_capitalize
        ]}>
          {t(`${serviceMeta.serviceName}|${key}`)}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
)}

          
          </Animated.View>
          : <></>
        }
          </>
  )}



  // export default categoryOptions