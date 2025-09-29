import React, {useContext,useMemo, useRef } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Ionicons from '@react-native-vector-icons/ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ThemeContext } from '../../../shared/contexts/themProvider.js';

import styleWrap from "../../../shared/hooks/styleWrap.js"


import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
// const { t, i18n } = useTranslation();

import NewsRoutes from '../../../features/News/routes/index';
import VideoRoutes from '../../../features/Tv/routes/index';
import LiveRoutes from '../../../features/Streaming/routes/index';
import RadioRoutes from '../../../features/Radios/routes/index';
import MoreRoutes from '../../../features/More/routes/index';

import { ROUTES, RootStackParamList } from '../config/route';

import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';

const statusBarConfig = {
  [ROUTES.MAIN_TAB.NEWS.GATEWAY]: { style: 'light-content', bgColor: '#6200ee' },
  [ROUTES.MAIN_TAB.TV.GATEWAY]: { style: 'light-content', bgColor: '#6200ee' },
  [ROUTES.MAIN_TAB.RADIO.GATEWAY]: { style: 'light-content', bgColor: '#6200ee' },
  // Profile: { style: 'dark-content', bgColor: '#ffffff' },
  // Settings: { style: 'light-content', bgColor: '#000000' },
};


export  function StatusBarManager() {
  const route = useRoute();
  
  useEffect(() => {
    // const config = statusBarConfig[route.name] || statusBarConfig['Home'];
    
    StatusBar.setBarStyle('light-content');
    // if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#064482');
      StatusBar.setTranslucent(false);
    // }
  }, [route.name]);

  return null;
}


const Tab = createBottomTabNavigator<RootStackParamList>();

// const Tab = createBottomTabNavigator();
const barStyle ={
            fontSize: 17,
            color:'white',
            marginBottom: 1, // Adjust label position
          }

const FuturisticTabNavigator = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  const { t } = useTranslation();
  
      // style provider value
    let {theme} = useContext(ThemeContext);
    const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  return (

    <>
    <StatusBarManager />
  
   <Tab.Navigator 
    id={undefined}
    screenOptions={{
headerShown: false,

    tabBarActiveTintColor:theme.dark,
    tabBarInactiveTintColor: theme.grey,

    tabBarStyle: {
      position: 'absolute',
      borderTopWidth: 0, // Remove default border
      elevation: 0, // Remove shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
      height: 60,
      paddingBottom: 10,
    },
    tabBarBackground: () => (
      <LinearGradient
        colors={[theme.light, theme.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.2 }}
        style={StyleSheet.absoluteFill}
      />
    ),
    }}
    >
      <Tab.Screen name={ROUTES.MAIN_TAB.NEWS.GATEWAY} component={NewsRoutes} options={{
        tabBarLabel: t(`menu|${ROUTES.MAIN_TAB.NEWS.GATEWAY}`),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          tabBarLabelStyle: {...barStyle,fontWeight:800,...fontStyles.fcolor_dark}
        }} >
            
          </Tab.Screen>
      <Tab.Screen name={ROUTES.MAIN_TAB.TV.GATEWAY} component={VideoRoutes } options={{
        tabBarLabel: t(`menu|${ROUTES.MAIN_TAB.TV.GATEWAY}`),

          tabBarIcon: ({ color, size=5 }) => (
            <MaterialIcons name="play-circle-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {...barStyle,fontWeight:800,...fontStyles.fcolor_dark}
        }}/>
        
      <Tab.Screen name={ROUTES.MAIN_TAB.LIVE} component={LiveRoutes} options={{
        tabBarLabel: t(`menu|${ROUTES.MAIN_TAB.LIVE}`),

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          ),
           tabBarLabelStyle: {...barStyle,fontWeight:800,...fontStyles.fcolor_dark}
        }}/>
        
      <Tab.Screen name={ROUTES.MAIN_TAB.RADIO.GATEWAY} component={RadioRoutes} options={{
        tabBarLabel: t(`menu|${ROUTES.MAIN_TAB.RADIO.GATEWAY}`),

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="radio-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {...barStyle,fontWeight:800,...fontStyles.fcolor_dark}
        }}/>

      <Tab.Screen name={ROUTES.MAIN_TAB.MORE.GATEWAY} component={MoreRoutes} options={{
        tabBarLabel: t(`menu|${ROUTES.MAIN_TAB.MORE.GATEWAY}`),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-vertical-circle-outline" color={color} size={size} />
          ),
          tabBarLabelStyle: {...barStyle,fontWeight:800,...fontStyles.fcolor_dark}
        }}/>
    </Tab.Navigator>

    </>
  );
};


export default FuturisticTabNavigator;