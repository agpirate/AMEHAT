import { fontStyles } from '../../../styles/contentGroundStyles/font/fontStyles.js';
import { boxStyles } from '../../../styles/boxStyles.js';
import { borderStyles} from '../../../styles/boxBoundStyles/border/border.js';
import { radiusStyles} from '../../../styles/boxBoundStyles/border/radius.js';
import { bgcStyles} from '../../../styles/contentGroundStyles/bg/bgcolors.js';
import { flexSizes } from '../../../styles/displayStyles/child_EditableSizes/BoxSizes.js';
import { flexStyles } from '../../../styles/displayStyles/FlexContainer.js'
import { ThemeContext } from '../../../shared/contexts/themProvider.js';

//players
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';



import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';

import translateTimeString from "../../../shared/utils/translateTimeString.js"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Animated,Text, Image,Dimensions,ActivityIndicator, useWindowDimensions,TouchableOpacity, StyleSheet } from 'react-native';

import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();


  const renderPlayer = (stream,video) => {

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
      const videoRef = useRef(null);

    if (stream) {
      let FeaturedStream = stream
      if((stream).includes('youtube')){
            const streamId = 'ety3lcneO2Q'//stream.split('v=').length ? stream.split('v=')[1]?.split('&')[0] : stream ;
            FeaturedStream = `https://www.youtube.com/embed/${streamId}?autoplay=1&controls=1&rel=0`;   
      }else{}
      
      return (
        <View style={styles.playerContainer}>

                <WebView
                  source={{ uri: FeaturedStream}}
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
                  style={{width:'100%',height:100,alignSelf: 'center' }}
                  scrollEnabled={false}
                />
                
          {/* <YoutubePlayer
            height={220}
            play={playing}
            videoId={youtubeId}
            onChangeState={(state) => {
              if (state === 'ended') setPlaying(false);
            }}
          /> */}

            <View style={styles.liveBadge}>
              <View style={styles.livePulse} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
            
        </View>
      );
    } else if (video) {
      return (
        <Video
          ref={videoRef}
          style={styles.playerContainer}
          source={{ uri: video }}
          controls
          resizeMode="contain"
          repeat
          paused={!playing}
          onEnd={() => setPlaying(false)}
        />
      );
    }
    return (<View></View>);
  };

export default renderPlayer
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