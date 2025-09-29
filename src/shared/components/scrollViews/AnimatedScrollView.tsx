import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React, {Children,isValidElement,useMemo, useState,useContext,useRef,useEffect } from 'react';

import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

// custome contexts hooks
import { usePageSettings } from '../../contexts/pageSettingsProvider';

interface AnimatedScrollViewType {
  title?: string;
  children: React.ReactNode;
}

const ReactComponent = ({ children,title }:AnimatedScrollViewType) => {

  const { pageSettingComputor,pageSetting } = usePageSettings();
  
const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()



  const scrollY = useRef(new Animated.Value(0)).current;

  // Combined scroll handler 
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } }}],
    {
      useNativeDriver: true,
      listener: (event: import('react-native').NativeSyntheticEvent<import('react-native').NativeScrollEvent>) => {
        // console.log(event.nativeEvent.contentOffset.y,'ooooooooooo')
        pageSettingComputor({ type: 'SET_SCROLLYEvent', payload: event.nativeEvent.contentOffset.y });
      }
    }
  );

  // Inside your component
const fadeAnim = React.useRef(new Animated.Value(0)).current;
React.useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 10,
    useNativeDriver: true
  }).start();
}, []);

  const renderChild =(child:any) =>{
    if(typeof child ==='string' || typeof child ==='number') return <View><Text>{child}</Text></View>
    if(isValidElement(child)) return child
    return null
  }

  // children =[children]
  return (
      <Animated.ScrollView  
      onScroll={handleScroll}
      scrollEventThrottle={20}
      showsVerticalScrollIndicator={false}
      style={[{marginBottom:'30%',height:'100%'}]}
      >
        {children}
        {/* {children && Children.map(children,(child)=>renderChild(child))} */}
      </Animated.ScrollView>
      )
};



export default ReactComponent;