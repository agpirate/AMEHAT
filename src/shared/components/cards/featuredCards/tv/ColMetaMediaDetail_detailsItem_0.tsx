const shared = '../../../../../shared/'
import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import env from "../../../../config/environment.js"

import ttime from "../../../../utils/translateTimeString.js"
import ImagePlayer from "../../ImagePlayers"

import ContentRenderer from '../../ContentRenderer';

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image,Dimensions,ActivityIndicator, TouchableOpacity,useWindowDimensions, StyleSheet, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';

//players
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * (8 / 16); // 16:9 aspect ratio

interface incomingMediaType {
    item:any,
    featureName?:string
}

interface incomingMediaType {
    item:any,
    featureName?:string
}

const ItemCard = ({item,featureName='common'} : incomingMediaType) =>
  
  {

  const { t } = useTranslation();

const {boxStyles,borderStyles,shadowStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

  
  const [ready, setReady] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const togglePlay = () => {
    setShowPlayer(true);
  };


  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const windowWidth = useWindowDimensions().width;

  let containerW = 1
const thumbnailHeight = dimensions.width 
  ? (windowWidth * containerW * dimensions.height / dimensions.width)
  : 200; // Fallback height if dimensions not available

const mediaContainerStyle = {
  width: windowWidth * containerW,
  height: thumbnailHeight > 200 ? 200 : thumbnailHeight, // Cap at 200 height
  // alignSelf: 'center',
  borderRadius: 8,
  // overflow: 'hidden',
  backgroundColor: '#f0f0f0', 
};



  return (
  <View style={[boxStyles.boxStyle_flat,boxStyles.p_lrxs,flexStyles.ia_start,flexStyles.cgap_sm]} >
      {/* Headers */}
      <Text style={[fontStyles.fontStyle_md,fontStyles.fweight_h1,fontStyles.fcolor_dark]}>{item.title}</Text>
      
      {/* Author and Date */}
      <View style={[flexStyles.crow,flexStyles.cj_between,{width:'100%'  }]}>
        <Text style={[fontStyles.fcolor_dark]}> {t(`common|by`)} {item.author ?? t(`common|unknown`)}</Text>
        <Text style={[fontStyles.fcolor_dark]}>{ttime(item.fullDate)}</Text>
      </View>
      
      {/* Hero Image */}
      <View style ={[mediaContainerStyle,flexStyles.cj_center]} >
        
      {item.videos && item.videos.url && (showPlayer ? (
         

                <WebView
                  source={{ uri: item.videos.url}}
                  allowsFullscreenVideo={true}
                  allowsInlineMediaPlayback={true}
                  mediaPlaybackRequiresUserAction={false}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  startInLoadingState={true}
                  renderLoading={() => <ActivityIndicator color="#937a23" />}
                  onError={(syntheticEvent) => {
                    const { nativeEvent } = syntheticEvent;
                    console.error('WebView error:', nativeEvent);
                  }}
                onReady={() => setReady(true)}
                  style={{width:'100%',alignSelf: 'center' }}
                  scrollEnabled={false}
                />
                    
      ) : (
          <TouchableOpacity onPress={togglePlay} activeOpacity={0.9}>
          {/* Thumbnail Preview */}

            <ImagePlayer  styles={{"container":{width:'100%',height:'100%'}}} item ={{...item.videos}} setDimensions ={setDimensions} />

            {/* Live Badge */}
            {/* <View style={styles.liveBadge}>
              <View style={styles.livePulse} />
              <Text style={styles.liveText}>LIVE</Text>
            </View> */}
            
            {/* Play Button */}


            <View style={styles.playButton}>
              <MaterialIcons name="play-arrow" size={40} color="white" />
            </View>

        </TouchableOpacity>
      ))}

      </View>

      {/* <ImagePlayer  styles={{"container":imageContainer}} item ={{uri:mediaSource,...mediaSource}} setDimensions ={setDimensions} /> */}

      {/* summarys */}
      {item['summary'] && <Text style={[fontStyles.fcolor_dark]}>{item['summary'] ?? ''}</Text> }

      {/* Main Contents */}
      {item.content && <ContentRenderer content={item.content}  /> }
                        
  </View>
);

  }

export default ItemCard

const styles = StyleSheet.create({
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
    aspectRatio: 16/8,
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
  timeText: {
    fontSize: 12,
    color: '#999',
  },
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
    marginBottom: 0,
  },
});
