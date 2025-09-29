import { fontStyles } from '../../../../styles/contentGroundStyles/font/fontStyles.js';
import { boxStyles } from '../../../../styles/boxStyles.js';
import { borderStyles} from '../../../../styles/boxBoundStyles/border/border.js';
import { radiusStyles} from '../../../../styles/boxBoundStyles/border/radius.js';
import { bgcStyles} from '../../../../styles/contentGroundStyles/bg/bgcolors.js';
import { flexSizes } from '../../../../styles/displayStyles/child_EditableSizes/BoxSizes.js';
import { flexStyles } from '../../../../styles/displayStyles/FlexContainer.js'
import { ThemeContext } from '../../../../shared/contexts/themProvider.js';
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
  
      let {theme} = useContext(ThemeContext);
  let styles_ = useMemo(
    () => ({boxStyles:boxStyles(theme),radiusStyles:radiusStyles(theme),bgcStyles:bgcStyles(theme),
    fontStyles:fontStyles(theme),flexSizes:flexSizes,flexStyles:flexStyles(theme)}),
    [theme]); // Only recalculates when theme changes


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
      style={[styles_.boxStyles.m_bxl,styles_.bgcStyles.bgc_content]}

      >
          {/* If you want to use the title prop */}
      {/* {title && <Text style={[]}>{title}</Text>} */}

        { children}

      </Animated.ScrollView>)
};



export default ReactComponent;