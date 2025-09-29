

import styleWrap from "../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import React,{useState,useContext} from 'react';
import { View, Text, StyleSheet,StatusBar, TouchableOpacity, Image } from 'react-native';

import { useTranslation } from 'react-i18next';
  // const { t, i18n } = useTranslation();
import { localizationLanguages } from  '../../shared/i18n/index.jsx'

import CustomDropdown from './cards/dropDown.jsx'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({ title,onsetLanguage,topMenuStyle={} }) => {
    
  const { t, i18n } = useTranslation();

    const setLanguage = (value,name) => {
      if(!value) value = 'ti'
      i18n.changeLanguage(value)
      onsetLanguage('locale',value)
      console.log('Language changed to:', i18n.language);
    }
    
const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


  return (
    <View style={[flexStyles.crow,flexStyles.cj_between,boxStyles.boxStyle_flat,

    boxStyles.border_flat_system,bgcStyles.bgc_dark,topMenuStyle]}>
      
      <TouchableOpacity style={[flexStyles.crow,flexStyles.cgap_xs,flexStyles.ia_end,boxStyles.boxStyle_xxs]} >
          <Image source={require('../../assets/images/tmma.png')} style={{width:40,height:40,resizeMode:'contain'}} />
          {/* <Text style={{color:'white',fontSize:24}}>{t('tmma')}</Text> */}
          <CustomDropdown categories={localizationLanguages} activeLabel={localizationLanguages[(i18n.language) ?? 'ti']['name']} onAction={setLanguage}  />
      </TouchableOpacity>

      <TouchableOpacity style={[boxStyles.boxStyle_xs,topMenuStyle]}>
          <MaterialIcons name="search" size={30}  style={[topMenuStyle]} />
      </TouchableOpacity>

    </View>
  );
};
  
export default Header;

