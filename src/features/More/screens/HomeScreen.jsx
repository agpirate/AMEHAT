import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React, { useState,useContext,useRef,useEffect } from 'react';

import { serviceMeta } from "../config/metas.js"

import { useFocusEffect } from '@react-navigation/native';
import { Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const logo = require('../../../assets/images/tmma_logo.png');
//           {isLoading ? 'Creating

import { GoogleSignin } from '@react-native-google-signin/google-signin';


import { breakingNews,recommendedPrograms } from '../../../shared/config/mocks/index.js';

// custome contexts hooks
import { usePageSettings } from '../../../shared/contexts/pageSettingsProvider.js';
import { HomeCategoriesContext } from '../../../shared/contexts/categoryProvider.tsx';

// Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import {LatestItems} from '../components/LatestItems.jsx'
import {CategoryItems} from '../components/CategoryItems.jsx'


import { useTranslation } from 'react-i18next';
  // const { t, i18n } = useTranslation();

import LoadingComponent from "../../../shared/components/Loader_ii.jsx"
// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID_FROM_GOOGLE_CONSOLE',
});

import {useNewsStore} from "../stores/newStore.tsx"

const AuthScreen = ({ navigation,route }) => {

 const {  
    schema,
    category,
    categories,
modelGroups,

    items,
    latestNews,
    categoryNews,
    
    operation, //{type:'fetch',status:'idle',error:''}
    suboperation,//{fetch:'home',...}
    active, //{type:'create',draft,error}

    clientQFilters,
    setclientBaseQFilters,
    setclientGroupQFilters,
    
    setFilter,
fetchItems,

    startFetchOperation,
    removeclientBaseQFilters,

    startHomeFetchOperation,
    startDetailsOperation,
    fetchHomeData,
   }  = useNewsStore()
   
   
  const { pageSetting, pageSettingComputor } = usePageSettings();
  const { t, i18n } = useTranslation();

  const scrollY = useRef(new Animated.Value(0)).current;
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerHeight = 80; // Your header height
  const scrollDistance = 80; // Scroll distance needed for full collapse
  const headerStyles = {
    transform: [{ translateY: scrollY.interpolate({
      inputRange: [0, scrollDistance * 0.5, scrollDistance],
      outputRange: [0, -headerHeight/2, -headerHeight],
      extrapolate: 'clamp',
    })}],
    opacity: scrollY.interpolate({
      inputRange: [0, scrollDistance * 0.7], // Start fading earlier
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
    overflow: 'hidden', // Ensure complete hide
  };

  // Combined scroll handler
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } }}],
    {
      useNativeDriver: true,
      listener: (event) => {
        // Your additional logic
        pageSettingComputor({ type: 'SET_SCROLLYEvent', payload: event.nativeEvent.contentOffset.y });
        // Toggle visibility based on scroll position
        setHeaderVisible(event.nativeEvent.contentOffset.y < scrollDistance);
      }
    }
  );

const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  // categories context 
  const setFilterCategory = (cat='home') =>{
    //  setclientBaseQFilters('category',cat)
     startFetchOperation({key:'category',value:cat},'fetch')
     removeclientBaseQFilters('subcategory')

     fetchItems()
    // navigation.push('category')
  }
  // categories context 
  const setFilterSubCategory = (Subcat='home') =>{
    //  setclientBaseQFilters('category',cat)
     startFetchOperation({key:'subcategory',value:Subcat},'fetch')
     fetchItems()
    // navigation.push('category')
  }

  const startDetails_Handler = (index,id,category='home') =>{
    setFilter('category',category ?? 'home')
    startDetailsOperation({index,id},'menu')
    navigation.push('details')
  }
  
  useFocusEffect(
    React.useCallback(() => {
      startHomeFetchOperation({key:'category',value:'poltics'},'home')
      fetchHomeData()
    }, [])
  );

    
    const featuredContent = [
    {
      id: '1',
      title: 'Tigray Today',
      type: 'News',
      // thumbnail: require('./assets/tigray-today.jpg'),
      duration: '25 min',
      views: '1.2M',
    },
    {
      id: '2',
      title: 'Historical Tigray',
      type: 'Documentary',
      // thumbnail: require('./assets/historical-tigray.jpg'),
      duration: '45 min',
      views: '890K',
    },
    {
      id: '3',
      title: 'Tigray Music Festival',
      type: 'Entertainment',
      // thumbnail: require('./assets/music-festival.jpg'),
      duration: '1h 30min',
      views: '2.5M',
    },
  ];

  const trendingNow = [
    { id: '4', title: 'Tigray Health Tips', category: 'Lifestyle' },
    { id: '5', title: 'Tech in Tigray', category: 'Science & Tech' },
    { id: '6', title: 'Travel Tigray', category: 'Lifestyle' },
  ];
  

  return (

  <SafeAreaView style={[boxStyles.boxStyle_flat,{flex:1}]}> 
  



    
      (
      
      <Animated.ScrollView  
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={[boxStyles.boxStyle_flat,boxStyles.bgc_grey75]}
      >
                     
        {/* Hero Banner (Auto-Slider) */}
      <View style={[flexStyles.crow]}>
        
        <TouchableOpacity style={[boxStyles.bgc_dark]}> Setting</TouchableOpacity>
        <TouchableOpacity style={[boxStyles.bgc_dark]}> About Us</TouchableOpacity>
      </View>

      {/* Featured Content Section */}
      <View style={styles.sectionContainer}>


      </View>

      {/* Trending Now Section */}
      <View style={styles.sectionContainer}>

      </View>


      </Animated.ScrollView>
      
    ) 
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  heroContainer: {
    height: 250,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  heroSubtitle: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 15,
  },
  playButton: {
    flexDirection: 'row',
    backgroundColor: '#E50914',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: 150,
  },
  playText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#E50914',
    fontSize: 14,
  },
  featuredCard: {
    width: 200,
    marginRight: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 120,
  },
  featuredOverlay: {
    backgroundColor: '#222',
    padding: 10,
  },
  featuredType: {
    color: '#E50914',
    fontSize: 12,
    fontWeight: 'bold',
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  featuredMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    color: '#aaa',
    fontSize: 12,
  },
  trendingContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    overflow: 'hidden',
  },
  trendingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  trendingIcon: {
    marginRight: 15,
  },
  trendingText: {
    flex: 1,
  },
  trendingTitle: {
    color: '#fff',
    fontSize: 16,
  },
  trendingCategory: {
    color: '#888',
    fontSize: 13,
    marginTop: 3,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categoryCard: {
    width: '48%',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryLabel: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AuthScreen;