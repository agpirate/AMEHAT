import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';

import {ActivityIndicator, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
  // const {t}=useTranslation()

import { env} from "../../config/environment.js"

type errorType = {
  onRetry:()=>void,
  isLoading:boolean
}
const ConnectionErrorScreen = ({ onRetry,isLoading =false }:errorType ) => {
  const openContact = (app:string) => app ? Linking.openURL((env as Record<string,any>)[app]) : '';
  // const openWebsite = (app) => Linking.openURL(env[app]);
  // const openTwitter = (account) => Linking.openURL(env.x);
  // const openInstagram = (account) => Linking.openURL(env.instagram);
  // const openInstagram = (account) => Linking.openURL(env.facebook);

const {boxStyles,boxSizes,borderStyle,shadowStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  const {t}=useTranslation()

  return (
    <View style={[boxStyles.p_lg,flexStyles.ccolumn,flexStyles.cgap_md]}>
      {/* Error Illustration */}
      {/* <Image 
        // source={require('../assets/connection-error.png')} 
        style={styles.image}
        resizeMode="contain"
      /> */}
      
      {/* Main Error Message */}
      <Text style={[styles.title]}>{t(`common|conError`)}</Text>
      {/* <Text style={styles.subtitle}>We can't connect to our servers right now</Text> */}
      
      {/* Suggested Actions */}
      <View style={styles.suggestionsContainer}>
        {/* <Text style={styles.suggestionText}>{t('common|conErrorTryDesc')}</Text> */}
        <View style={styles.suggestionItem}>
          <MaterialIcons name="wifi" size={20} color="#666" />
          <Text style={styles.suggestionText}>{t('common|conErrorOpti')}</Text>
        </View>
        {/* <View style={styles.suggestionItem}>
          <MaterialIcons name="refresh" size={20} color="#666" />
          <Text style={styles.suggestionText}>{t('common|conErrorOptii')}</Text>
        </View> */}
      </View>
      
      {/* Retry Button */}
      <TouchableOpacity style={[styles.retryButton,boxSizes.size_auto,flexStyles.crow,flexStyles.cj_center,bgcStyles.bgc_system]} onPress={onRetry}>

        {isLoading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <>
          <MaterialIcons 
            name="refresh" 
            size={20} 
            color="white" 
            style={styles.refreshIcon} 
          />
        <Text style={styles.retryButtonText}>{t('common|conErrorTry')}</Text>
        </>
      )}

      </TouchableOpacity>
      
      {/* Social Media Links */}
      <View style={[boxStyles.boxStyle_sm]}>

      <Text style={[styles.socialTitle,fontStyles.fontStyle_sm,fontStyles.fcolor_grey]}>{t('common|contactUsDes')}</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={()=>openContact('facebook')}>
          <FontAwesome name="globe" size={24} color="#2E86DE" />
          <Text style={styles.socialText}>{t('common|website')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={()=>openContact('x')}>
          {/* <FontAwesome name="twitter" size={24} color="#000000ff" /> */}
          <Text style={[{color:'black',fontWeight:'bold'}]}>X</Text>
          <Text style={styles.socialText}>{t('common|x')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={()=>openContact('facebook')}>
          <FontAwesome name="facebook" size={24} color="#1d11b9ff" />
          <Text style={styles.socialText}>{t('common|facebook')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={()=>openContact('instagram')}>
          <FontAwesome name="instagram" size={24} color="#1d11b9ff" />
          <Text style={styles.socialText}>{t('common|instagram')}</Text>
        </TouchableOpacity>
      </View>

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
    refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16
  },
  refreshIcon: {
    marginRight: 8
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:'100%',
    // padding: 20,
    backgroundColor: 'red'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center'
  },
  suggestionsContainer: {
    marginBottom: 30,
    width: '100%'
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 20
  },
  suggestionText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 15
  },
  retryButton: {
    flexDirection: 'row',
    backgroundColor: '#2E86DE',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 10
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  socialTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  socialButton: {
    alignItems: 'center',
    justifyContent:'space-between'
  },
  socialText: {
    marginTop: 5,
    color: '#2E86DE',
    fontSize: 12
  }
});

export default ConnectionErrorScreen;




