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
import { borderRadius } from "../../../../../styles/index.js"

// const { t } = useTranslation();

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * (9 / 16); // 16:9 aspect ratio

interface incomingMediaType {
    item:any,
    featureName?:string
}

const ItemCard = ({item,featureName='common'} : incomingMediaType) =>
  
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

  // const handleLoadStart = () => setIsLoading(true);
  // const handleLoadEnd = () => setIsLoading(false);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const windowWidth = useWindowDimensions().width;
  // const item.videos =item.item.videos
    const imageContainer = [{
    width: '100%',
    // height: 200,
      height: dimensions.width ? (windowWidth * dimensions.height / dimensions.width) : 150,
    borderRadius:0,
    overflow: 'hidden'
  }]
  return (
<View style={[boxStyles.boxStyle_flat,flexStyles.cgap_md]}>
      
      {item.videos && item.videos.url &&  
      (showPlayer ? (
        item.videos.url && 
        <View style={styles.playerContainer}>

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

                  // onNavigationStateChange={togglePlay(!showPlayer)}
        onLoadStart={togglePlay}
        onLoadEnd={togglePlay}

                onReady={() => setReady(true)}
                
                  // style={{width:width,height:VIDEO_HEIGHT,alignSelf: 'center' }}
                  scrollEnabled={false}
                />
            
        </View>
      ) : (
        <TouchableOpacity onPress={togglePlay} activeOpacity={0.9}>
            <ImagePlayer  styles={{"container":imageContainer}} item ={{...item.videos}} setDimensions ={setDimensions} />
            
            <View style={styles.playButton}>
              <MaterialIcons name="play-arrow" size={40} color="white" />
            </View>

        </TouchableOpacity>
      )
    )
    }
      
      {/* Video Info */}
      <View style={[boxStyles.boxStyle_xs]}>
        <Text style={[fontStyles.fontStyle_sm,fontStyles.fweight_bold,fontStyles.fcolor_dark]} numberOfLines={2}>{item.title}</Text>

           {item.summary && <Text  key={item.id} > {item.summary} </Text> }
           {item.summary && <ContentRenderer content={item.summary}  /> }

        <View style={styles.metaContainer}>
          <Text style={styles.timeText}>{ttime(item.fullDate) || item.formattedDate}</Text>
        </View>

      </View>
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
    aspectRatio: 16/9,
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
});
