import styleWrap from "../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';

import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

// custome contexts hooks
import { usePageSettings } from '../../../../shared/contexts/pageSettingsProvider.js';

interface AnimatedScrollViewType {
  title?: string;
  children: React.ReactNode;
}

const ReactComponent = ({ children,title }:AnimatedScrollViewType) => {

  const { pageSettingComputor,pageSetting } = usePageSettings();
  
const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  const scrollY = useRef(new Animated.Value(0)).current;

  // Combined scroll handler 
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } }}],
    {
      useNativeDriver: true,
      listener: (event: import('react-native').NativeSyntheticEvent<import('react-native').NativeScrollEvent>) => {
        pageSettingComputor({ type: 'SET_SCROLLYEvent', payload: event.nativeEvent.contentOffset.y });
      }
    }
  );

  // Inside your component
const fadeAnim = React.useRef(new Animated.Value(0)).current;
React.useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true
  }).start();
}, []);

  return (

      <Animated.ScrollView  
      onScroll={handleScroll}
      scrollEventThrottle={36}
      showsVerticalScrollIndicator={false}
      style={[boxStyles.m_bxl,bgcStyles.bgc_content]}

      >
          {/* If you want to use the title prop */}
      {/* {title && <Text style={[]}>{title}</Text>} */}

        { children}

      </Animated.ScrollView>)
};



export default ReactComponent;