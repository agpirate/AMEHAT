import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


import TopMenu from '../../../shared/components/TopMenu.jsx';

import React,{useState,useContext} from 'react';
import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeaturedScreen from '../screens/FeaturedScreen.tsx';
import DetailsScreen from '../screens/DetailsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Share } from 'react-native';

import {useNewsStore} from "../stores/store"
// import { fontStyles } from '../../../styles/fontStyles.js';
// import { boxStyles } from '../../../styles/boxStyles.js';
import { usePageSettings } from '../../../shared/contexts/pageSettingsProvider.js';

import { ROUTES, RootStackParamList } from '../../../core/routes/config/route';
       
import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();
// type HomeScreenProps = StackScreenProps<RootStackParamList,typeof ROUTES.MAIN_TAB.NEWS>;


const newsStack = createNativeStackNavigator<RootStackParamList>();


import { useEffect } from 'react';
          import { useRoute } from '@react-navigation/native';

          export  function StatusBarManager() {
            const route = useRoute();
            
            useEffect(() => {
              // const config = statusBarConfig[route.name] || statusBarConfig['Home'];
              
              StatusBar.setBarStyle('light-content');
              // if (Platform.OS === 'android') {
                StatusBar.setBackgroundColor('red');
                StatusBar.setTranslucent(false);
              // }
            }, [route]);
          
            return null;
          }


const AppNavigator = () => {

   const {  
      setclientGlobalQFilters
   }  = useNewsStore()

const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()



const onsetLanguage = (key= '',value='') => {
  if(value) setclientGlobalQFilters(key,value)
}
let { t} = useTranslation();
// import { Share } from 'react-native';
const shareContent = async (params:any) => {
  try {
    await Share.share({
      message: `Check out this news: ${params.title}\n\n${params.description}`,
      url: params.url, // if you have a URL
      title: params.title
    });
  } catch (error) {
    console.error('Error sharing:', (error as Record<any,any>).message);
  }
};


  return (

    <>

      {/* <StatusBar barStyle="dark-content" backgroundColor="red" /> */}
              
      {/* <Header title='news' onsetLanguage={onsetLanguage}  />      */}

      <newsStack.Navigator
        id={undefined}

        screenOptions={{
          headerStyle: { backgroundColor: 'transparent' },
          headerTintColor: '#937a23',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        
        <newsStack.Screen name={ROUTES.MAIN_TAB.TV.LIST.GATEWAY}
               options={{ headerShown: false }} >

            {
              ()=>(
                <>

                    <TopMenu title='tv' onsetLanguage={onsetLanguage} topMenuStyle={[bgcStyles.bgc_dark,fontStyles.fcolor_system]} />

                    <newsStack.Navigator id={undefined}>
                        <newsStack.Screen name={ROUTES.MAIN_TAB.TV.LIST.LATEST}           component={FeaturedScreen}        options={{ headerShown: false }} /> 
                        <newsStack.Screen name={ROUTES.MAIN_TAB.TV.LIST.GROUP_CATEGORY}   component={CategoryScreen}    options={{ headerShown: false }} />
                    </newsStack.Navigator>
                </>
              )
            }

        </newsStack.Screen>

        <newsStack.Screen name={ROUTES.MAIN_TAB.TV.DETAIL} component={DetailsScreen} 
options={({ route, navigation }) => ({ 
    title: t('tv|'+(route.params?.title ?? '')),
    headerShown: true,
    headerRight: () => (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => {
            // Handle share functionality
            shareContent(route.params);
          }}
        >
          <MaterialIcons name="share" size={24} color="black" />
        </TouchableOpacity>
        
        {/* Add more buttons if needed */}

      </View>
    ),
  })}
/>
        
      </newsStack.Navigator>

        </>

  );
};

export default AppNavigator;