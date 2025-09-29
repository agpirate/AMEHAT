const shared = '../../../../../shared/'
import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()
import env from "../../../../config/environment.js"

import ttime from "../../../../utils/translateTimeString.js"
import ImagePlayer from "../../ImagePlayers.js"

import ContentRenderer from '../../ContentRenderer.js';

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image,Dimensions,ActivityIndicator, TouchableOpacity,useWindowDimensions, StyleSheet, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';

//players
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

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


    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  
  const reload = () => {
    setError(null);
    setLoading(true);
    setRetryCount(prev => prev + 1);
  };
  
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const togglePlay = () => {
    setShowPlayer(true);
    setPlaying(true);
  };


const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
const windowWidth = useWindowDimensions().width;
// const videoSource = item.videoSource;

// Calculate thumbnail height based on 80% width while maintaining aspect ratio
let containerW = 0.46
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
  <View style={[boxStyles.boxStyle_xxs]}>
    

    <View style={mediaContainerStyle}>
      {item.videos && item.videos.url && 
      
      (showPlayer ? (
        item.videos.url ? (
          <WebView
            source={{ uri: item.videos.url }}
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
            style={{
              width: '100%',
              height: '100%'
            }}
            scrollEnabled={false}
          />
        ) : (
          <Text style={styles.fallbackText}>Video unavailable</Text>
        )
      ) : (
        <TouchableOpacity 
          onPress={togglePlay} 
          activeOpacity={0.9}
          style={{ width: '100%', height: '100%' }}
        >
          {item.videos?.thumbnail ? (
            <ImagePlayer 
              styles={{ container: { width: '100%', height: '100%' } }} 
              item={{ ...item.videos }} 
              setDimensions={setDimensions} 
            />
          ) : (
            <View style={styles.thumbnailPlaceholder}>
              <MaterialIcons name="play-circle-outline" size={48} color="#666" />
            </View>
          )}
          
          {/* Play Button (only shown if not playing) */}
          {/* {!showPlayer && (
            <View style={styles.playButton}>
              <MaterialIcons name="play-arrow" size={40} color="white" />
            </View>
          )} */}
        </TouchableOpacity>
      )
    )
      }
      
      {/* Live Badge (if applicable) */}

    </View>



{/* Video Info - Now with proper text containment */}
    <View style={[styles.infoContainer,{width:windowWidth * containerW},boxStyles.boxStyle_xs]}>
      <Text style={[fontStyles.fcolor_dark]} numberOfLines={2}  ellipsizeMode="tail">
        {item.title}
      </Text>
      
      {/* {item.summary && (
        <View style={styles.textContainer}>
          <ContentRenderer 
            content={item.summary} 
          />
        </View>
      )}
      
      {item.summary && (
        <View style={styles.textContainer}>
          <ContentRenderer 
            content={item.summary} 
          />
        </View>
      )} */}

      <View style={styles.metaContainer}>
        <View style={styles.channelContainer}>

          <Text style={styles.channelText} numberOfLines={1}>
            { item.subcategory  && t(`${featureName}|${item['subcategory']}`)} {item.subcatego}
            
            { item[(item.category).toLowerCase()+'_subcategory'] && t(featureName+'|'+item[(item.category).toLowerCase()+'_subcategory'])}
          </Text>
        </View>
        
        <Text style={styles.timeText} numberOfLines={1}>
          {ttime(item.fullDate) || item.formattedDate}
        </Text>

      </View>
    </View>
  </View>
);
  }

export default ItemCard

const styles = StyleSheet.create({

  cardContainer: {
    width: '90%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',

    // elevation: 1,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
  },
  infoContainer: {
    padding: 12,
    // width:, // Ensure it doesn't exceed card width
  },
  textContainer: {
    marginBottom: 6,
    width: '100%', // Constrain to parent width
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    width: '100%', // Ensure title respects container width
  },
  contentText: {
    fontSize: 14,
    color: '#555',
    width: '100%', // Constrain text to container
  },

  thumbnailPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea'
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 40,
    padding: 10,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  livePulse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginRight: 4,
  },
  liveText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },

  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  channelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  fallbackText: {
    color: '#666',
    textAlign: 'center',
  },
});