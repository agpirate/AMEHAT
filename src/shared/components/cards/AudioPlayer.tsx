import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, PanResponder, Dimensions } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const FuturisticAudioPlayer = ({ videoSource }) => {
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const glowAnim = useRef(new Animated.Value(0)).current;

  // Glow animation effect
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Pan responder for swipe controls
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newPosition = currentTime + (gestureState.dx / SCREEN_WIDTH) * duration;
      if (newPosition >= 0 && newPosition <= duration) {
        setCurrentTime(newPosition);
      }
    },
    onPanResponderRelease: () => {
      if (audioRef.current) audioRef.current.seek(currentTime);
    },
  });

  // Generate fake waveform data (replace with real waveform analysis in production)
  const generateWaveform = () => {
    return Array.from({ length: 50 }, () => Math.random() * 40 + 10);
  };

  const waveformData = generateWaveform();

  return (
    <View style={styles.container}>

        <View><Text>llllllllllll</Text></View>
      {/* Hidden Video Component */}
      <Video
        ref={audioRef}
        source={{ uri: videoSource.url }}
        paused={!isPlaying}
        onProgress={({ currentTime, seekableDuration }) => {
          setCurrentTime(currentTime);
          setDuration(seekableDuration);
          setProgress(currentTime / seekableDuration);
        }}
        onEnd={() => setIsPlaying(false)}
        style={{width:'100%',height:400,backgroundColor:'red'}}
        // style={styles.hiddenVideo}
        resizeMode="cover"
      />


    </View>
  );
};

// Helper function to format time
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height:200,
  },
  hiddenVideo: {
    width: 0,
    height: 0,
  },
  playerContainer: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 25,
    padding: 25,
    shadowColor: '#00d4ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  waveformContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    marginBottom: 20,
  },
  waveformBar: {
    width: 3,
    borderRadius: 3,
    marginHorizontal: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timeText: {
    color: '#e2e2e2',
    fontSize: 12,
    fontFamily: 'monospace',
  },
  progressBarContainer: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#4a4e69',
    marginBottom: 30,
    position: 'relative',
  },
  progressBarBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 2,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00d4ff',
    borderRadius: 2,
  },
  progressKnob: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#00d4ff',
    top: -6,
    shadowColor: '#00d4ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(0, 212, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00d4ff',
  },
  floatingInfo: {
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  floatingText: {
    color: '#00d4ff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  songTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FuturisticAudioPlayer;