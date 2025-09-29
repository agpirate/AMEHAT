import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  ActivityIndicator,
  Platform,
  Share,
  Modal
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview';
import { useTranslation } from 'react-i18next';

import React, { useContext, useState,useMemo,useRef,useEffect } from 'react';

import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { getUpcomingPrograms,getCurrentProgram,getDailyProgram } from './programUtils';

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * (9 / 16); // 16:9 aspect ratio

const LiveScreen = () => {

const {boxStyles,borderStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

      
  const { t } = useTranslation();
  const webViewRef = useRef(null);
  
  // State management
  const [currentChannel, setCurrentChannel] = useState('Tigrai TV');
  const [currentTime, setCurrentTime] = useState(new Date());

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showChannelSelector, setShowChannelSelector] = useState(false);

  // Channel data
  const channels = [
    { 
      id: 'tigrai-tv', 
      name: 'Tigrai TV', 
      embedUrl: 'https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1',
      description: 'ኤመሓት መደብ ቴለቪዥን ዝቐርቡሉ አማራፂ'
    },
    { 
      id: 'tigrai-radio', 
      name: 'Radio Tigrai', 
      embedUrl: 'https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1',
      description: 'ኤመሓት መደብ ሬድዮ ዝቐርቡሉ አማራፂ'
    },

  ];

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  const currentChannelData = channels.find(ch => ch.name === currentChannel) || channels[0];
  const currentProgram = getCurrentProgram(currentChannel);
  const dailyProgram = getDailyProgram(currentChannel);

  // Handle channel switch
  const switchChannel = (channelName) => {
    setCurrentChannel(channelName);
    setLoading(true);
    setShowChannelSelector(false);
  };

  // Share functionality
  const shareContent = async () => {
    try {
      await Share.share({
        message: `Watch ${currentChannel} live: ${currentChannelData.description}`,
        url: 'http://www.tigraitv.com',
        title: `${currentChannel} Live Stream`
      });
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {/* Video Player Section */}
      <View style={isFullscreen ? styles.fullscreenPlayer : styles.videoContainer}>
        <WebView
          ref={webViewRef}
          source={{ uri: currentChannelData.embedUrl }}
          allowsFullscreenVideo={true}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={() => (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color={'grey'} />
              <Text style={[styles.loadingText, { color: 'grey' }]}>
                Loading {currentChannel} stream...
              </Text>
            </View>
          )}
          onError={() => {
            setError('Failed to load stream');
            setLoading(false);
          }}
          onLoadEnd={() => setLoading(false)}
          style={styles.webview}
        />

        {/* Video Controls Overlay */}

      </View>

      {/* Content Area */}
      {!isFullscreen && (
        <ScrollView style={[styles.contentContainer,{marginBottom: 100}]}>
          {/* Current Program Info */}
          <View style={[styles.programInfo, { backgroundColor: 'white' }]}>

                        <View style={[flexStyles.crow,flexStyles.cj_between,flexStyles.ia_end,
                          radiusStyles.radius_circle,
                          {}]}>


              <Text style={[styles.sectionTitle, { color: 'grey' }]}> {t('common|playingon')} </Text>

                <View style={[flexStyles.crow, flexStyles.cgap_xs, flexStyles.ia_end,
                    bgcStyles.bgc_system,radiusStyles.radius_circle,
                    borderStyles.border_xxs_system,

                ]}>

            <TouchableOpacity 
              style={[styles.channelButton,bgcStyles.bgc_light,
                    radiusStyles.radius_circle,
              ]}
              onPress={() => setShowChannelSelector(true)}
            >
              <Text style={[styles.channelButtonText, { color: 'black' }]}>
                {t(`common|${currentChannel}`)}
              </Text>
              <MaterialIcons 
                name="arrow-drop-down" 
                size={24} 
                color={'#064482'} 
              />
            </TouchableOpacity>

            <View style={styles.controlButtons}>
              <TouchableOpacity 
                style={styles.controlButton}
                onPress={() => webViewRef.current?.reload()}
              >
                <MaterialIcons name="refresh" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>


            </View>
           
            
            <Text style={[styles.programTitle, { color: 'grey' }]}>
              {currentProgram.title}
            </Text>
            <Text style={[styles.programTime, { color: 'grey' }]}>
              {currentProgram.time}
            </Text>
            <Text style={[styles.programDescription, { color: 'grey' }]}>
              {currentProgram.description}
            </Text>
            
            <View style={styles.actionButtons}>
              {/* <TouchableOpacity style={styles.reminderButton}>
                <MaterialIcons 
                  name="notifications" 
                  size={20} 
                  color={'grey'} 
                />
                <Text style={[styles.reminderText, { color: 'grey' }]}>
                  Set Reminder
                </Text>
              </TouchableOpacity> */}
              
              <TouchableOpacity 
                style={[styles.shareButton, bgcStyles.bgc_system, radiusStyles.radius_circle]}
                onPress={shareContent}
              >
                <MaterialIcons name="share" size={20} color="white" />
                <Text style={styles.shareText}>{t('common|share')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Live Chat Preview */}

          {/* Upcoming Programs */}
          <View style={[styles.upcomingPrograms, { backgroundColor: 'white' }]}>
            <Text style={[styles.sectionTitle, { color: 'grey' }]}>
              ዕለታዊ መደባት
            </Text>

            {dailyProgram.map(program => (
              <View key={program.id} style={styles.programCard}>
                <View style={[styles.programTimeBadge, { backgroundColor: 'white' }]}>
                  <Text style={[styles.programTimeText, { color: 'grey' }]}>
                    {program.time}
                  </Text>
                </View>
                <View style={styles.programTextContent}>
                  <Text style={[styles.programCardTitle, { color: 'grey' }]}>
                    {program.title}
                  </Text>
                  <Text style={[styles.programCategory, { color: 'grey' }]}>
                    {program.category}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}


            {/* Channel Selector Modal */}
      <Modal
        visible={showChannelSelector}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowChannelSelector(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: 'white' }]}>
            <Text style={[styles.modalTitle, { color: 'grey' }]}>
              {t('common|selectChannel')}
            </Text>
            {channels.map(channel => (
              <TouchableOpacity
                key={channel.id}
                style={[
                  styles.channelOption,
                  currentChannel === channel.name && styles.selectedChannelOption,
                  { borderBottomColor: 'grey' }
                ]}
                onPress={() => switchChannel(channel.name)}
              >
                <Text style={[
                  styles.channelOptionText,
                  { color: 'grey' },
                  currentChannel === channel.name && { color: 'grey' }
                ]}>
                  {t(`common|${channel.name}`)}
                </Text>
                <Text style={[styles.channelDescription, { color: 'grey' }]}>
                  {channel.description}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowChannelSelector(false)}
            >
              <Text style={[styles.closeButtonText, { color: 'grey' }]}>
                {t('common|close')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
    </SafeAreaView>
  );
};

// Helper functions




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    height: VIDEO_HEIGHT,
    width: '100%',
    backgroundColor: 'black',
  },
  fullscreenPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: 100,
  },
  webview: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  channelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  channelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  controlButtons: {
    flexDirection: 'row',
  },
  controlButton: {
    marginLeft: 15,
    padding: 5,
  },
  contentContainer: {
    flex: 1,
  },
  programInfo: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  programTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  programTime: {
    fontSize: 14,
    marginBottom: 15,
  },
  programDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reminderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
  },
  reminderText: {
    marginLeft: 5,
    fontWeight: '500',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  shareText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '500',
  },
  chatPreview: {
    padding: 20,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewAllText: {
    fontSize: 12,
  },
  chatMessage: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  chatUser: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  chatText: {
    flex: 1,
  },
  chatTime: {
    fontSize: 10,
    marginLeft: 5,
  },
  upcomingPrograms: {
    padding: 20,
  },
  programCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  programTimeBadge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 15,
  },
  programTimeText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  programTextContent: {
    flex: 1,
  },
  programCardTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
  programCategory: {
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  channelOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  selectedChannelOption: {
    borderLeftWidth: 3,
    paddingLeft: 10,
  },
  channelOptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  channelDescription: {
    fontSize: 12,
    marginTop: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LiveScreen;