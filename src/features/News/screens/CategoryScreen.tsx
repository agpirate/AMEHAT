import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import AnimatedScrollView from '../../../shared/components/scrollViews/AnimatedScrollView'
import { usePageSettings } from '../../../shared/contexts/pageSettingsProvider';

import React, { useState,useContext,useRef,useEffect } from 'react';
import { useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';

// import { useNavigation } from '@react-navigation/native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// custome contexts hooks
import {useNewsStore} from "../stores/store"

import { ROUTES,RootStackParamList } from '../../../core/routes/config/route';

// components
import {CategoryOptions} from '../components/menus/CategoryOptions'
// const { t, i18n } = useTranslation();
import { renderItemsComponent } from '../components/screens/utils/renderer/renderCategory';

// Configure Google Sign-In
// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID_FROM_GOOGLE_CONSOLE',
// });


type HomeScreenProps = StackScreenProps<RootStackParamList,typeof ROUTES.MAIN_TAB.NEWS.LIST.GROUP_CATEGORY>;

const RouteScreen = ({ navigation,route }:HomeScreenProps) => {

 const {  
    schema,

    modelGroups,
featuredGroupOption,

    items,
    // latestNews,
    featuredItems,
    
    operation, //{type:'fetch',status:'idle',error:''}
    suboperation,//{fetch:'home',...}
    active, //{type:'create',draft,error}

    clientQFilters,

setClientSettingQFilters,
setclientFeaturedGroupQFilters,
fetchFeaturedGroupData,
    setclientGroupQFilters,
    
    setFilter,
    fetchItems,

    startFetchOperation,
    removeClientSettingQFilters,
    removeclientFeaturedGroupQFilters,

    startFeaturedFetchOperation,
    startDetailsOperation,
    fetchFeaturedData,
   }  = useNewsStore()
   
  const { pageSettingComputor,pageSetting } = usePageSettings();
  
const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  const onPressItem = (
    index: number,item:any
  ): void => {
    if(!(item && item.id)) return;
    startDetailsOperation({ index, id:(item.id ?? null) }, 'menu');
    setclientFeaturedGroupQFilters('category',[item.category])     
    navigateTo('DETAIL',{cat:item?.category ?? 'News'})
  };

  //navigations service
  const navigateTo =(path :string,params ={cat:''}) =>{
    if(path == 'DETAIL') navigation.push(ROUTES.MAIN_TAB.NEWS[path], {id:'',source:'',highlight:true})
    else if ( path == 'LATEST') navigation.push(ROUTES.MAIN_TAB.NEWS.LIST[path],{refresh:true})
    else   onRetry()
    return;
  }
  //for
  //home loading.... 
  const onRetry = React.useCallback(() => {
    fetchItems() //fetch filtering ++ global setting
 }, []);

  // Use in both useFocusEffect and refresh button
  useFocusEffect(
    React.useCallback(() => {
      let category = clientQFilters.filterClientSetting.category ?? ''
      startFetchOperation({key: 'category', value:category}, null);
      
      onRetry();
    }, [clientQFilters.filterClientSetting.category, onRetry])
  );

  return (

  <SafeAreaView style={[boxStyles.boxStyle_flat,{flex:1},bgcStyles.bgc_light]}> 

  {/* Menus */}
    <CategoryOptions navigateTo={navigateTo} collapse={(pageSetting['scrollYEvent'] < 55)}   /> 
 

  {/* Main Screen   */}
        <AnimatedScrollView title='latest' > 
                     
          {renderItemsComponent(   
          {status: (operation.status ?? 'loading'),payloadParams: items,
            actions: {onPressItem,onRetry}
          } 
          )}

          {/* {renderCategoryComponent(   
          {status: (operation.status ?? 'loading'),payloadParams: mockModelData['category'],
            actions: {onPressItem,onRetry }
          } 
          )} */}
          
          {/* {for Name ...  // for name } */}
        </AnimatedScrollView>

      
    </SafeAreaView>
  );
};



export default RouteScreen;