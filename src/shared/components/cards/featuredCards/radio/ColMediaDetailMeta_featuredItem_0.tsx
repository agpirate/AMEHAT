const shared = '../../../../../shared/'
import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import env from "../../../../config/environment.js"

import ttime from "../../../../utils/translateTimeString.js"
import ImagePlayer from "../../ImagePlayers"

import VideoPlayer from "../../../VideoPlayers.js"
import AudioPlayer from '../../AudioPlayer.js';
import ContentRenderer from '../../ContentRenderer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useFocusEffect } from '@react-navigation/native';
import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View,ImageBackground, Text, Image,Dimensions,ActivityIndicator, TouchableOpacity,useWindowDimensions, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

//players
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import { borderRadius } from "../../../../../styles/index.js"

// const { t } = useTranslation();

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * (9 / 16); // 16:9 aspect ratio

interface incomingMediaType {
    item:any,
    featureName?:string
}

const ItemCard = ({item,featureName='radio'} : incomingMediaType) =>
  
  {

  const { t } = useTranslation();

const {boxStyles,borderStyles,shadowStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

  

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  // Reset video when screen loses focus
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        // Cleanup function
          setIsPlaying(false);
      };
    }, [])
  );

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const windowWidth = useWindowDimensions().width;
    const imageContainer = [{
    width: '100%',
    // height: 200,
      height: dimensions.width ? (windowWidth * dimensions.height / dimensions.width) : 150,
borderRadius:0,
    overflow: 'hidden'
  }]
  // const videoSource =item.videoSource
  return (
<View style={[boxStyles.boxStyle_flat,flexStyles.cgap_xs]}>
      
<View>

{
    item.videos && item.videos.url   && 

                            <Video
                            ref={audioRef}
                            source={{ uri: item.videos.url }}
                            paused={!isPlaying}
                            onProgress={({ currentTime, seekableDuration }) => {
                              setProgress(currentTime / seekableDuration);
                            }}
                            style={[{ 
                               width: '100%',
                               height:200
                              },
                            // isPlaying ? {height:100} : {height:100}
                            ]}
                              controls={true}  // Show native controls

                              resizeMode="cover"
                              poster={ item.videos.thumbnail ? item.videos.thumbnail : null   }

                                  />

                            }

{/* { item.videos.thumbnail &&
<ImageBackground 
  source={{uri: item.videos.thumbnail}} 
  style={[{width:'100%',height:VIDEO_HEIGHT}]}
  resizeMode="cover"
>
 
          <View style={[{width: '100%', height: 60, position: 'absolute', bottom: 0, }]}>
            <TouchableOpacity 
              onPress={() => setIsPlaying(!isPlaying)}
              style={[
                  {backgroundColor: 'rgba(255,255,255,0.2)',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: 'rgba(255,255,255,0.5)',}
                  ]}
            >
              <Ionicons 
                name={!isPlaying ? 'play' : 'pause'} 
                size={24} 
                color="white" 
              />

            </TouchableOpacity>
          </View>

        </ImageBackground>
  } */}

</View>



      {/* Video Info */}
      <View style={[boxStyles.boxStyle_xs]}>

          { item.title && <Text style={[styles.title,fontStyles.fcolor_grey]} numberOfLines={2}>{item.title}</Text> }
           {/* {item.summary && <Text  key={item.id} numberOfLines={2} > {item.summary} </Text> } */}
           {item.summary && <ContentRenderer content={item.summary}  /> }
           
        <View style={styles.metaContainer}>
          <View style={[styles.channelContainer,flexStyles.cgap_sm]}>
            {
              item.videos?.thumbnail ? (
                <Image source={{ uri: item.videos.thumbnail,cache:'reload' }} style={[radiusStyles.radius_circle,{width:15,height:15}]} />
              ) :
              (
              <MaterialIcons name="account-circle" size={16} color="#666" />
              )
            }
            <Text style={[fontStyles.fweight_bold,fontStyles.fcolor_light]}>{t(`radio|${item.station_list}`)}</Text>
          </View>
          
          <Text style={styles.timeText}> {t('common|Streaming since')} - {ttime(item.fullDate) }</Text>
        </View>

      </View>
    </View>
);

  }
export default ItemCard

const styles = StyleSheet.create({

  // Container styles
  container: {
    position: 'relative',
    backgroundColor: '#000', // Fallback when no thumbnail
    borderRadius: 8,
    overflow: 'hidden',
    aspectRatio: 16/9, // Standard video aspect ratio
  },
  
  // Thumbnail background
  thumbnailBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0.7,
  },
  
  // Video element
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  
  // Controls overlay
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Control buttons
  controlButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  
  // Progress bar
  progressBarContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    zIndex: 4,
  },
  
  progressBar: {
    height: '100%',
    backgroundColor: '#FF0000',
  },
  
  // Time indicators
  timeText: {
    color: 'grey',
    fontSize: 12,
    position: 'absolute',
    bottom: 30,
    right: 20,
    zIndex: 4,
  },
  
  // Loading indicator
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 5,
  }
  ,
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 0,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  thumbnailContainer: {
    width: '100%',
    aspectRatio: 16/9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerContainer: {
    width: '100%',
    height:20,
    // aspectRatio: 16/7,
    backgroundColor: 'black',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradientOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  liveBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  livePulse: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    marginRight: 4,
    opacity: 0.8,
  },
  liveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  playButton: {
    position: 'absolute',
    top:'30%',
    left:'40%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  channelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },

});
