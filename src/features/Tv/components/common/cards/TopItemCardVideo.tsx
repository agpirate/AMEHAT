import { fontStyles } from '../../../../../styles/contentGroundStyles/font/fontStyles.js';
import { boxStyles } from '../../../../../styles/boxStyles.js';
import { borderStyles} from '../../../../../styles/boxBoundStyles/border/border.js';
import { radiusStyles} from '../../../../../styles/boxBoundStyles/border/radius.js';
import { bgcStyles} from '../../../../../styles/contentGroundStyles/bg/bgcolors.js';
import { flexSizes } from '../../../../../styles/displayStyles/child_EditableSizes/BoxSizes.js';
import { flexStyles } from '../../../../../styles/displayStyles/FlexContainer.js'
import { ThemeContext } from '../../../../../shared/contexts/themProvider.js';

//players
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';

import ImagePlayer from '../../../../../shared/components/cards/ImagePlayers';
import ContentRenderer,{sampleContent} from "../../../../../shared/components/cards/ContentRenderer"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Animated,Text, Image,Dimensions,ActivityIndicator, useWindowDimensions,TouchableOpacity, StyleSheet } from 'react-native';

import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * (9 / 16); // 16:9 aspect ratio


const VerticalNewsCard = ({item}) => 
  
  
  {

  const { t } = useTranslation();

  // style provider value
  let {theme} = useContext(ThemeContext);
  let styles_ =
  //  useMemo(() => (
      {boxStyles:boxStyles(theme),radiusStyles:radiusStyles(theme),bgcStyles:bgcStyles(theme),
    fontStyles:fontStyles(theme),flexSizes:flexSizes,flexStyles:flexStyles(theme)}
    // ), [theme]); // Only recalculates when theme changes

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
  
  // Determine if we have a YouTube URL or local video
  const isYouTube = item.youtubeUrl ?? null //&& item.youtubeUrl.includes('youtube');
  const hasFeaturedVideo = item.FeaturedVideo ?? null;

  const togglePlay = () => {
    setShowPlayer(true);
    setPlaying(true);
  };

  const renderPlayer = () => {

    if (item.FeaturedStream) {
      // Extract YouTube video ID from URL
      const streamId = 'ety3lcneO2Q'//item.FeaturedStream.split('v=').length ? item.FeaturedStream.split('v=')[1]?.split('&')[0] : item.FeaturedStream ;
      const FeaturedStream = `https://www.youtube.com/embed/${streamId}?autoplay=1&controls=1&rel=0`;
      
      return (
        <View style={styles.playerContainer}>

          { FeaturedStream ?
                <WebView
                  source={{ uri: item.FeaturedStream}}
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
                  style={{width:width,height:VIDEO_HEIGHT,alignSelf: 'center' }}
                  scrollEnabled={false}
                /> :
                 <video controls poster="{{FeaturedImage}}">
                    <source src={item.FeaturedVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
          }

          {/* <YoutubePlayer
            height={220}
            play={playing}
            videoId={youtubeId}
            onChangeState={(state) => {
              if (state === 'ended') setPlaying(false);
            }}
          /> */}

        </View>
      );
    } else if (item.FeaturedVideo) {
      return (
        <Video
          ref={videoRef}
          style={styles.playerContainer}
          source={{ uri: item.FeaturedVideo }}
          controls
          resizeMode="contain"
          repeat
          paused={!playing}
          onEnd={() => setPlaying(false)}
        />
      );
    }
    return null;
  };

  // console.log(item)

  return (
<View style={styles.cardContainer}>
      {showPlayer ? (
        renderPlayer()
      ) : (
        <TouchableOpacity onPress={togglePlay} activeOpacity={0.9}>
          {/* Thumbnail Preview */}
          <View style={styles.thumbnailContainer}>
            
            {/* <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.7)']}
              style={styles.gradientOverlay}
            /> */}
            
            {/* Live Badge */}
            <View style={styles.liveBadge}>
              <View style={styles.livePulse} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
            
          <Text>{ item.FeaturedStream  ?? 'pppp'}</Text>

            {/* Play Button */}
            <View style={styles.playButton}>
              <MaterialIcons name="play-arrow" size={40} color="white" />
            </View>

          </View>
        </TouchableOpacity>
      )}
      
      {/* Video Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <View style={styles.metaContainer}>
          <View style={styles.channelContainer}>
            <MaterialIcons name="account-circle" size={16} color="#666" />
            <Text style={styles.channelText}>{item.category}</Text>
          </View>
          
          <Text style={styles.timeText}>{item.fullDate || item.formattedDate}</Text>
        </View>

                {item.description && (
          typeof item.description != 'object' ?
          <Text style={[]} numberOfLines={2}>{item.description}</Text>
          : <View> <ContentRenderer content={item.description}  /> </View>
        )}

      </View>
    </View>
);

  }
export default VerticalNewsCard

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
    padding: 16,
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
