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

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

// import { useNavigation } from '@react-navigation/native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// custome contexts hooks
import {useNewsStore} from "../stores/store"
import { ROUTES,RootStackParamList } from '../../../core/routes/config/route';

// Configure Google Sign-In
// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID_FROM_GOOGLE_CONSOLE',
// });

//componenets
import { renderItemsComponenet } from '../components/screens/utils/renderer/renderFeaturedDetails';



//utils
type HomeScreenProps = StackScreenProps<RootStackParamList,typeof ROUTES.MAIN_TAB.TV.DETAIL>;

const RouteScreen = ({ navigation,route }:HomeScreenProps) => {

 const {  
    schema,

    modelGroups,

    items,
    // latestNews,
    featuredItems,
    active, //{type:'create',draft,error}
    
    
    operation, //{type:'fetch',status:'idle',error:''}
    suboperation,//{fetch:'home',...}
featuredGroupOption,
setClientSettingQFilters,
setclientFeaturedGroupQFilters,
    setclientGroupQFilters,
    
    setFilter,
    fetchItems,
    fetchItemDetails,
fetchFeaturedGroupData,

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
    startDetailsOperation({ index,...item }, 'menu');
    setclientFeaturedGroupQFilters('category',[item.category]) 
    // navigateTo('DETAIL',{cat:item?.category ?? 'News'})
    //-- details
  };

  //home loading.... 
  const onRetry = React.useCallback(() => {
    fetchItemDetails();
    
    // fetchFeaturedGroupData();//fetch featured filter ++ global setting

    // console.log(featuredItems ? Object.keys(featuredItems['category']) : {},'----------')
  }, []);
  // Use in both useFocusEffect and refresh button
  useFocusEffect(
    React.useCallback(() => {
      onRetry();
    }, [])
  );
  console.log(active)

  return (

  <SafeAreaView style={[boxStyles.boxStyle_flat,{flex:1}]}> 

        <AnimatedScrollView title='latest' > 
  
     
          {renderItemsComponenet(   
          {status: (operation.status ?? 'loading'),payloadParams: active['draft'],
            actions: {onPressItem,onRetry}
          } 
          )}

          {/* {renderCategoryComponent(   
          {status: (operation.status ?? 'loading'),payloadParams: featuredItems['category'],
            actions: {onPressItem,onRetry }
          } 
          )} */
          }

        </AnimatedScrollView>

      
    </SafeAreaView>
  );
};



export default RouteScreen;