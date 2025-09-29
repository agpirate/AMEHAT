import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample data
  const languages = ['English', 'Tigrinya', 'Amharic', 'Arabic', 'Oromo'];
  const categories = ['All', 'News', 'Sports', 'Entertainment', 'Politics'];
  
  const featuredChannels = [
    { id: 1, name: 'EBC', type: 'TV', language: 'Amharic', logo: require('../../../assets/images/tmma_logo.png') },
    { id: 2, name: 'Tigrai TV', type: 'TV', language: 'Tigrinya', logo: require('../../../assets/images/tmma_logo.png') },
    { id: 3, name: 'ESAT', type: 'TV', language: 'English', logo: require('../../../assets/images/tmma_logo.png') },
    { id: 4, name: 'Dimtsi Radio', type: 'Radio', language: 'Tigrinya', logo: require('../../../assets/images/tmma_logo.png') },
  ];

  const breakingNews = [
    { id: 1, title: 'Breaking: Major political development in the region', source: 'EBC', time: '2h ago' },
    { id: 2, title: 'Sports: National team wins championship', source: 'ESAT', time: '4h ago' },
    { id: 3, title: 'Entertainment: Annual cultural festival begins', source: 'Tigrai TV', time: '1d ago' },
  ];

  const recommendedPrograms = [
    { id: 1, title: 'Morning News Roundup', channel: 'EBC', time: '08:00 AM', language: 'Amharic' },
    { id: 2, title: 'Sports Highlights', channel: 'ESAT', time: '07:30 PM', language: 'English' },
    { id: 3, title: 'Cultural Program', channel: 'Tigrai TV', time: '09:00 PM', language: 'Tigrinya' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#1a1a2e', '#16213e']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>TMMA Media Hub</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={28} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      <ScrollView>
        {/* Language Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Language</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.languageButton,
                  selectedLanguage === lang && styles.activeLanguage
                ]}
                onPress={() => setSelectedLanguage(lang)}
              >
                <Text style={[
                  styles.languageText,
                  selectedLanguage === lang && styles.activeLanguageText
                ]}>
                  {lang}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Category Filter */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryButton,
                  activeCategory === cat && styles.activeCategory
                ]}
                onPress={() => setActiveCategory(cat)}
              >
                <Text style={[
                  styles.categoryText,
                  activeCategory === cat && styles.activeCategoryText
                ]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
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
            data={featuredChannels}
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
    </View>
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

export default HomeScreen;