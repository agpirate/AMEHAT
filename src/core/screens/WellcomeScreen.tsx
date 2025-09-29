import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';

import { ThemeContext } from '../../shared/contexts/themProvider.js';
import { wellcomeLYT } from '../../styles/cardStyles/wellcomeLYT.js';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SafeAreaView } from 'react-native-safe-area-context';

import { authStackType, newsStackType } from '../types/routes/index';

import { logo,assetMap } from "../../assets/images/imageAssets.js"
import { ROUTES, RootStackParamList } from '../routes/config/route';
import { StackScreenProps } from '@react-navigation/stack';
type HomeScreenProps = StackScreenProps<RootStackParamList,typeof ROUTES.CORE.NAV.WELCOME>;

const WelcomeScreen = ({ navigation,route }:HomeScreenProps) => {

  let {theme} = useContext(ThemeContext);
  if (!theme) {
    throw new Error('theme Provider Failed');
  }
  let wellcomeLYTStyles = wellcomeLYT(theme)

  // type stackType =NativeStackNavigationProp<RootStackParamList>
  // const navigation = useNavigation<stackType>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(ROUTES.AUTH.NAV_SCREEN)
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
    
  return (
    <SafeAreaView style={[wellcomeLYTStyles.container]}> 

    <View style={wellcomeLYTStyles.container}>
      <StatusBar backgroundColor="#0A2463" barStyle="light-content" />
      <View style={wellcomeLYTStyles.logoContainer}>
        
        <Image 
          source={assetMap.logo} 
          style={wellcomeLYTStyles.logo}
          resizeMode="contain"
        />

      </View>

      <Text style={[wellcomeLYTStyles.title]}>ኤመሓት | Tigrai Tv</Text>
      <Text style={wellcomeLYTStyles.subtitle}>ሓበሬታ ንሕብረተሰባዊ ለውጢ</Text>
      <View style={[wellcomeLYTStyles.footer, ]}>
        <Text style={wellcomeLYTStyles.footerText}>...</Text>
      </View>

    </View>
    
    </SafeAreaView>
  );
};


export default WelcomeScreen;