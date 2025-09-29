import React, { useState,useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
const logo = require('../../../assets/images/tmma_logo.png');
//           {isLoading ? 'Creating
import { SafeAreaView } from 'react-native-safe-area-context';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { ThemeContext } from '../../../shared/contexts/themProvider.js';
import { authLYT } from '../../../styles/cardStyles/authLyt.js';

import PROGRAM_CATEGORIES  from '../../News/categories/config/programs.ts'; // Import the PROGRAM_CATEGORIES constant
import {LANGUAGE_CATEGORIES} from '../../News/categories/config/languages.ts'; // Import the PROGRAM_CATEGORIES constant
import {CHANNEL_CATEGORIES}  from '../../News/categories/config/channels.ts'; // Import the PROGRAM_CATEGORIES constant

import { breakingNews,recommendedPrograms } from '../../../shared/config/mocks/index.js';

// custome contexts hooks
import { usePageSettings } from '../../../shared/contexts/pageSettingsProvider.js';
// built in context hooks
import { useLocalization }  from '../../../shared/i18n/hooks/useLocalization.jsx'

// Hooks
import { useCategoriesManager } from '../../News/categories/hooks/useCategoriesManager.tsx';


// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID_FROM_GOOGLE_CONSOLE',
});


const AuthScreen = ({ navigation,route }) => {

  const { pageSetting, pageSettingComputor } = usePageSettings();
  const { t,language,changeLanguage } = useLocalization('common');

  const { categoriesState, categorieComputor } = useCategoriesManager();

  // style provider value
  let {theme} = useContext(ThemeContext);
  let authLYTStyles = authLYT(theme)

  // Sample data
  const setLanguage = (lng) => {
    pageSettingComputor({ type: 'SET_LANGUAGE', payload: lng });
    changeLanguage(lng);
   }

   const setTheme = (theme) => {
    pageSettingComputor({ type: 'SET_THEME', payload: theme });
    changeLanguage(lng);
   }

  return (
  <SafeAreaView style={{flex:1}}> 
    
          {/* Header */}
          <View
            style={{flex:0,backgroundColor:'grey',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
          >
            <Image style={{ width: 30, height: 20 }} resizeMode="contain" source={logo}  /> 
            <Text style={styles.headerTitle}>Tigrai TV { categoriesState.activeLanguage } oo</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon name="search" size={28} color="#fff" />
            </TouchableOpacity>

          </View>

      <ScrollView>
        {/* Language Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Language </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {LANGUAGE_CATEGORIES.map((lang) => (
              <TouchableOpacity
                key={lang.id}
                style={[
                  styles.languageButton,
                  categoriesState.activeLanguage === lang.id && styles.activeLanguage
                ]}
                onPress={() => categorieComputor.setLanguage(lang.id)}
              >
                <Text style={[
                  styles.languageText,
                  categoriesState.activeLanguage === lang.id && styles.activeLanguageText
                ]}>
                  {lang.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
            
        {/* Category Filter */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Object.keys(PROGRAM_CATEGORIES).map((cat) => (
              <TouchableOpacity
                key={PROGRAM_CATEGORIES[cat].id}
                style={[
                  styles.categoryButton,
                  categoriesState.activeProgramType === PROGRAM_CATEGORIES[cat].id && styles.activeCategory
                ]}
                onPress={() => categorieComputor.setProgramType(cat)}
              >
                <Text style={[
                  styles.categoryText,
                  categoriesState.activeProgramType === PROGRAM_CATEGORIES[cat].id && styles.activeCategoryText
                ]}>
                  {PROGRAM_CATEGORIES[cat].label}  
                </Text>
              </TouchableOpacity>
            ))}

<TouchableOpacity  onPress={()=> setLanguage('en')} >

              <Text>  { t('welcome') }  </Text>
              <Text>  { pageSetting.language} { language }</Text>

</TouchableOpacity>

          </ScrollView>
        </View>

        {/* Featured Channels */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Channels</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Channels')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={CHANNEL_CATEGORIES}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.channelCard}
                onPress={() => navigation.navigate(item.type === 'TV' ? 'LiveTV' : 'Radio', { channel: item })}
              >
                <Image source={item.logo} style={styles.channelLogo} />
                <Text style={styles.channelName}>{item.name}</Text>
                <Text style={styles.channelMeta}>{item.language}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Breaking News */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Breaking News</Text>
            <TouchableOpacity onPress={() => navigation.navigate('News')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {breakingNews.map(news => (
            <TouchableOpacity 
              key={news.id}
              style={styles.newsCard}
              onPress={() => navigation.navigate('NewsDetail', { news })}
            >
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>{news.title}</Text>
                <Text style={styles.newsMeta}>{news.source} • {news.time}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Recommended Programs */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended Programs</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Programs')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {recommendedPrograms.map(program => (
            <TouchableOpacity 
              key={program.id}
              style={styles.programCard}
              onPress={() => navigation.navigate('ProgramDetail', { program })}
            >
              <View style={styles.programTime}>
                <Text style={styles.programTimeText}>{program.time}</Text>
              </View>
              <View style={styles.programContent}>
                <Text style={styles.programTitle}>{program.title}</Text>
                <Text style={styles.programMeta}>{program.channel} • {program.language}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 50,
    backgroundColor: 'blue',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#1a73e8',
    fontSize: 14,
  },
  languageButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  activeLanguage: {
    backgroundColor: '#1a73e8',
  },
  languageText: {
    color: '#333',
  },
  activeLanguageText: {
    color: '#fff',
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeCategory: {
    backgroundColor: '#1a73e8',
    borderColor: '#1a73e8',
  },
  categoryText: {
    color: '#333',
  },
  activeCategoryText: {
    color: '#fff',
  },
  channelCard: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  channelLogo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  channelName: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  channelMeta: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
  newsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsMeta: {
    color: '#666',
    fontSize: 12,
  },
  programCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  programTime: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  programTimeText: {
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  programContent: {
    flex: 1,
  },
  programTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  programMeta: {
    color: '#666',
    fontSize: 12,
  },
});

export default AuthScreen;