import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import env from "../../../../config/environment.js"

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';


import SkeletonLoader from '../../../../utils/SkeletonLoader';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Animated,Text, Image, useWindowDimensions,TouchableOpacity, StyleSheet } from 'react-native';

import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();
interface incomingMediaType {
    item:any,
    featureName?:string
}
const VerticalNewsCard = ({item}:incomingMediaType) => 
  
  
  {

  const { t } = useTranslation();

const {boxStyles,borderStyle,shadowStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


    //image loader -
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const windowWidth = useWindowDimensions().width;

  return (
  <View style={[boxStyles.boxStyle_flat,flexStyles.ia_start]} >

                    <View style={{ 
                          width: '100%',
                          height: dimensions.width ? (windowWidth * dimensions.height / dimensions.width) : 150,
                          overflow: 'hidden',
                        }}>
                          {loading && <SkeletonLoader  />}
                          

                                    { item.FeaturedImage ? (
                                           <Image source={{uri: item.FeaturedImage, cache: 'reload' }} 
                                           style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                            onLoad={(e) => {
                                              const { width, height } = e.nativeEvent.source;
                                              setDimensions({ width, height });
                                            }}
                                            onLoadEnd={() => setLoading(false)}
                                            onError={() => {
                                              setError(true);
                                              setLoading(false);
                                            }} />
                          
                                      ) : (
                          
                                        item.FormatedImage ? (
                                           <Image source={{uri: env.API_BASE_URL+item.FormatedImage.formats.thumbnail.url, cache: 'reload' }} 
                                           style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                            onLoad={(e) => {
                                              const { width, height } = e.nativeEvent.source;
                                              setDimensions({ width, height });
                                            }}
                                            onLoadEnd={() => setLoading(false)}
                                            onError={() => {
                                              setError(true);
                                              setLoading(false);
                                            }} />
                          
                                      ) : ( 
                          
                                        item.ObjectImage ? (
                                           <Image source={{uri: env.API_BASE_URL+item.ObjectImage.url, cache: 'reload' }} 
                                           
                                           style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                            onLoad={(e) => {
                                              const { width, height } = e.nativeEvent.source;
                                              setDimensions({ width, height });
                                            }}
                                            onLoadEnd={() => setLoading(false)}
                                            onError={() => {
                                              setError(true);
                                              setLoading(false);
                                            }}
                                            />
                          
                                      ) : ( 
                                          <View></View>
                                          //  <Image source={require('assets/images/tmma_logo.png')} style={[radiusStyles.radius_xs,{width:'100%',height:'100%',resizeMode:'contain'}]} />
                                      )
                                      )
                                     )
                                    }


                      
                          {error && (
                            <View style={[]}>
                              <Text>Image unavailable</Text>
                            </View>
                          )}

                        </View>
                          
        
                          <View style={[boxStyles.boxStyle_xs,boxStyles.p_lrmd]}> 
                          <Text style={[
                            fontStyles.fontStyle_sm,fontStyles.fweight_bold
                            ]}>
                            {item.title} 
                            
                          </Text>

                          {item.summary && (<Text style={[]} numberOfLines={2}>{item.summary}</Text>)}

                            <View style={[boxStyles.p_tsm,flexStyles.crow,flexStyles.cj_between,boxStyles.p_rlg]}>

                                      {
                                        item.FeaturedVideo && (
                                        <View style={[flexStyles.crow,flexStyles.cj_end,
                                          flexStyles.cgap_xs
                                        ]}>
                                                <MaterialIcons name="play-circle" size={20} color="#00002a" />
                                                  <Text>Watch Video</Text>
                                        </View>)
                                      }

                                      <Text style={styles.verticalDate}>
                                        {item.fullDate}                                        
                                                                            
                                      </Text>
                            </View>

                         </View>
  </View>
);

  }
export default VerticalNewsCard

const styles = StyleSheet.create({
  verticalCard: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 1,
  },
  verticalImage: {
    width: '100%',
    height: 180,
  },
  verticalContent: {
    padding: 12,
    maxWidth:'70%'
  },
  verticalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  verticalDesc: {
    fontSize: 14,
    color: '#666',
  },
  verticalDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
});