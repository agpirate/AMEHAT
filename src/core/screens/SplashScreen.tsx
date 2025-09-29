import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context';

import { authStackType, newsStackType } from '../types/routes/index';

import { logo,assetMap } from "../../assets/images/imageAssets.js"

type RootStackParamList = {
  Auth: authStackType
};


const WelcomeScreen = () => {


  // type stackType =NativeStackNavigationProp<RootStackParamList>
  // const navigation = useNavigation<stackType>();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('Auth', { screen: 'SignIn' })
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [navigation]);
    
  return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#000000ff' }}>
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }}>
    <StatusBar backgroundColor="#0a417a" barStyle="light-content" />
    
    <View style={{
      width: 200,
      height: 200,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image 
        source={assetMap.logo} 
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain'
        }}
      />
    </View>

    <Text style={{
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
      textAlign: 'center'
    }}>ኤመሓት | Tigrai Tv</Text>
    
    <Text style={{
      fontSize: 16,
      color: '#3E92CC',
      marginBottom: 40,
      textAlign: 'center'
    }}>ሓበሬታ ንሕብረተሰባዊ ለውጢ</Text>
    
    <View style={{
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 14,
        color: '#757575'
      }}>...</Text>
    </View>
  </View>
</SafeAreaView>
  );
};


export default WelcomeScreen;