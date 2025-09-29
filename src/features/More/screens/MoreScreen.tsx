import React, { useContext, useState,useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Switch,Linking, useColorScheme } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import { ThemeContext, ThemeProvider } from '../../../shared/contexts/themProvider';

import { useTranslation } from 'react-i18next';
  // const {t}=useTranslation()
import { env} from "../../../shared/config/environment.js"
import aboutUs from "../../../shared/config/mocks/aboutUs.js"

const CompanyScreen = () => {
  const {t}=useTranslation()


  let {theme, toggleTheme,isDark} = useContext(ThemeContext)
const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  const [activeTab, setActiveTab] = useState('mission');

  // const toggleTheme = () => setIsDarkMode(previousState => !previousState);

  const openContact = (app:string) => app ? Linking.openURL((env as Record<string,any>)[app]) : '';

  const colors = isDark ? theme.dark : theme.light;

  return (
    <View style={[styles.container, bgcStyles.bgc_system]}>
      {/* Header with Theme Toggle */}
      <View style={styles.header}>
        <Text style={[styles.headerText, fontStyles.fcolor_light]}>ኤመሓት ሓበሬታ ን ቕኒትን</Text>
        <View style={styles.themeToggle}>
          
          <MaterialIcons 
            name={isDark ? 'nights-stay' : 'wb-sunny'} 
            size={24} 
            color={colors.text} 
          />
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleTheme}
            value={isDark}
            style={styles.switch}
          />
        </View>
      </View>

      {/* Tab Navigation */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
    paddingHorizontal: 10,
    alignItems: 'center', // Vertically center items

    minWidth:700, // Ensure container is wider than parent if needed
  }}

  style={[boxStyles.boxStyle_xs,{maxHeight:50,minWidth:'90%'}]} >

        {aboutUs.tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tabButton,
              activeTab === tab.id && styles.activeTab,
              { backgroundColor: activeTab === tab.id ? '#4a90e2' : colors.card },
                            {minWidth:100}

            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <MaterialIcons 
              name={tab.icon} 
              size={20} 
              color={activeTab === tab.id ? '#fff' : colors.text} 
            />
            <Text style={[
              styles.tabText,
              { color: activeTab === tab.id ? '#fff' : colors.text },
              fontStyles.fweight_bold
            ]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Content Area */}
      <ScrollView style={styles.content}>
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.cardTitle, fontStyles.fcolor_systemii]}>
            {(aboutUs as Record<string,any>).content[activeTab].title}
          </Text>
          
          {activeTab === 'mission' && (
            <Text style={[styles.cardText, { color: colors.text }]}>
              {(aboutUs as Record<string,any>).content[activeTab].text}
            </Text>
          )        
              
          }

          { (activeTab === 'policies') &&
          (
            (aboutUs as Record<string,any>).content[activeTab].items.map((item:Record<string,any>, index:number) => (
              <View key={index} style={styles.listItem}>
                <MaterialIcons 
                  name="chevron-right" 
                  size={16} 
                  color={colors.text} 
                />

        <TouchableOpacity style={[styles.siteLink,]} onPress={()=>openContact('websiteAbout')}>
          {/* <FontAwesome name="globe" size={24} color="#2E86DE" /> */}
          <Text style={styles.siteLink}>{item.name}</Text>
        </TouchableOpacity>

              </View>
            ))
          )
          }

          { (activeTab !== 'mission') && (activeTab !== 'policies') &&
          (
            (aboutUs as Record<string,any>).content[activeTab].items.map((item:string, index:number) => (
              <View key={index} style={styles.listItem}>
                <MaterialIcons 
                  name="chevron-right" 
                  size={16} 
                  color={colors.text} 
                />
                <Text style={[styles.itemText, fontStyles.fcolor_light]}>
                  {item}
                </Text>
              </View>
            ))
          )}

        </View>
      </ScrollView>

      {/* Fixed Footer */}
      <View style={[styles.footer, { backgroundColor: colors.footer }]}>


        <View style={[flexStyles.ccolumn,flexStyles.cj_between,flexStyles.cgap_xs,flexStyles.ia_center]}>
{/* Social Media Links */}
      <Text style={styles.socialTitle}>{t('common|contactUsDes')}</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={()=>openContact('website')}>
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

                <Text style={[styles.footerText, fontStyles.fcolor_light]}>
          © {new Date().getFullYear()} ኤጀንሲ መራኸቢ ሓፋሽ ትግራይ.
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight:'92%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeTab: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabText: {
    marginLeft: 5,
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 5,
    fontSize: 16,
  },
  footer: {
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginBottom: 5,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
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
    siteLink: {
    alignItems: 'center',
    justifyContent:'space-between',
    color:'grey',
    fontWeight:'bold'
  },
  socialText: {
    marginTop: 5,
    color: '#2E86DE',
    fontSize: 12
  }
});

export default CompanyScreen;