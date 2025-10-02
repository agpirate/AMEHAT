import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import AnimatedScrollView from '@components/scrollViews/AnimatedScrollView'
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
import { renderLatestComponent,renderCategoryComponent } from '../components/screens/utils/renderer/renderFeatured';


// Configure Google Sign-In
// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID_FROM_GOOGLE_CONSOLE',
// });

// const { t } = useTranslation();

//utils
type HomeScreenProps = StackScreenProps<RootStackParamList,typeof ROUTES.MAIN_TAB.NEWS.LIST.LATEST>;

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

const { t } = useTranslation();

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

      
  const onPressItem = (
    index: number,item:any
  ): void => {
    if(!(item && item.id)) return;
    startDetailsOperation({ index, id:(item.id ?? null) }, 'menu');
    setclientFeaturedGroupQFilters('category',[item.category])     
    navigateTo('DETAIL',{cat:item?.category ?? 'news'})
  };

  const onPressCategoryFeatureItems = (
    index: number,item:any
  ): void => {
    startDetailsOperation({ index, id:(item.id) }, 'sub-menu');
    navigateTo('DETAIL',{cat:item?.category ?? 'news'})
  };
  
  //navigations service
  const navigateTo =(path :string,params ={cat:''}) =>{
    let title = params.cat//t(`news:${params.cat}`)
    if(path == 'DETAIL') navigation.push(ROUTES.MAIN_TAB.NEWS.DETAIL, {id:'',source:'',highlight:true,title})
    else if ( path == 'LATEST') onRetry();
    else   navigation.push(ROUTES.MAIN_TAB.NEWS.LIST.GROUP_CATEGORY,{categoryId:params.cat,categoryName:params.cat})
  }
  
  //home loading.... 
  const onRetry = React.useCallback(() => {
    //put new filtering
    startFetchOperation({key: 'category', value: 'latest'}, null);
    setclientFeaturedGroupQFilters('category',featuredGroupOption['category'] as string[]) 
    fetchFeaturedData() //fetchItems ++  fetchFeaturedGroupData
  }, []);

  // Use in both useFocusEffect and refresh button
  useFocusEffect(
    React.useCallback(() => {
      onRetry();
    }, [])
  );
  
  
  return (

  <SafeAreaView style={[boxStyles.boxStyle_flat,{flex:1}]}> 

  {/* Menus */}
 
 <CategoryOptions navigateTo={navigateTo} collapse={ (pageSetting['scrollYEvent'] < 55) } />

  {/* Main Screen   */}
          <AnimatedScrollView title='latest'  > 
          {/* Featured - Latest */}
          {renderLatestComponent(   
          {status: (operation.status ?? 'loading'),
            payloadParams: items,
            actions: {onPressItem:onPressItem,onRetry}
          } 
          )}
          
          {renderCategoryComponent(   
          {status: (operation.status ?? 'loading'),payloadParams: featuredItems['category'],
            actions: {onPressItem:onPressCategoryFeatureItems,onRetry }
          } 
          )}

          
          {/* {for Name ...  // for name } */}
        </AnimatedScrollView>

      
    </SafeAreaView>
  );
};



export default RouteScreen;