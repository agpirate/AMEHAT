import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ActivityIndicator, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

type errorType = {
  onRetry:()=>void,
  isLoading:boolean
}
const ConnectionErrorScreen = ({ onRetry,isLoading =false }:errorType ) => {
  const openWebsite = () => Linking.openURL('https://yourwebsite.com');
  const openTwitter = () => Linking.openURL('https://twitter.com/yourhandle');
  const openInstagram = () => Linking.openURL('https://instagram.com/yourhandle');

  const {t}=useTranslation()
  
  return (
<>

      <Text style={styles.title}>{t(`common|conError`)}</Text>
      <Text style={styles.subtitle}>We can't connect to our servers right now</Text>
      
      {/* Suggested Actions */}
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionText}>Please try:</Text>
        <View style={styles.suggestionItem}>
          <MaterialIcons name="wifi" size={20} color="#666" />
          <Text style={styles.suggestionText}>Checking your internet connection</Text>
        </View>
        <View style={styles.suggestionItem}>
          <MaterialIcons name="refresh" size={20} color="#666" />
          <Text style={styles.suggestionText}>Refreshing the page</Text>
        </View>
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
            style={[]} 
          />
        <Text style={styles.retryButtonText}>Try Again</Text>
        </>
      )}

      </TouchableOpacity>
      
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
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
    backgroundColor: '#2E86DE',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 30
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
    alignItems: 'center'
  },
  socialText: {
    marginTop: 5,
    color: '#2E86DE',
    fontSize: 12
  }
});

export default ConnectionErrorScreen;




