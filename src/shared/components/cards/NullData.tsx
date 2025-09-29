import React from 'react';
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
  // const openWebsite = (account) => Linking.openURL('https://yourwebsite.com');
  // const openTwitter = (account) => Linking.openURL('https://www.x.com/'+account);
  // const openInstagram = (account) => Linking.openURL('https://www.facebook.com/'+account);


    const openContact = (app:string) => app ? Linking.openURL((env as Record<string,any>)[app]) : '';
  
  const {t}=useTranslation()

  return (
    <View style={styles.container}>
      {/* Error Illustration */}
      {/* <Image 
        // source={require('../assets/connection-error.png')} 
        style={styles.image}
        resizeMode="contain"
      /> */}
      
      {/* Main Error Message */}

      <Text style={[styles.title,{color:'#2E86DE'}]}>{t(`common|noData`)}</Text>
        
      {/* Retry Button */}

      {/* Social Media Links */}
{/* Social Media Links */}
      <Text style={styles.socialTitle}>{t('common|contactUsDes')}</Text>
      <View style={[styles.socialContainer,{padding:10,margin:15,borderColor:'grey',borderWidth:1,borderRadius:9}]}>
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

            
            {/* Retry Button */}
            <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
      
              {isLoading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <>
                <MaterialIcons 
                  name="refresh" 
                  size={20} 
                  color="#000" 
                  style={styles.refreshIcon} 
                />
              <Text style={styles.retryButtonText}>Try Again</Text>
              </>
            )}
      
            </TouchableOpacity>

    </View>

    
  );
};

const styles = StyleSheet.create({
    refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16
  },
  refreshIcon: {
    marginRight: 8
  },
  container: {
        height:'100%',
    marginTop:'50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin:10,
    borderRadius:5

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




