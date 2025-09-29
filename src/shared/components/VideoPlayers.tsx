import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomVideoPlayer = ({ videoUrl }:{videoUrl:any} ) => {
  const [paused, setPaused] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  // Toggle controls visibility (optional)
  const toggleControls = () => {
    setShowControls(!showControls);
  };
  
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUrl }}
        paused={paused}
        style={styles.video}
        resizeMode="cover"
        controls={true} // Disable native controls
        onTouchStart={toggleControls} // Show/hide on tap (optional)
      />

      {/* Custom Controls */}
      
      {showControls && (
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => setPaused(!paused)}>
            <Ionicons 
              name={paused ? 'play' : 'pause'} 
              size={30} 
              color="white" 
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 100,
  },
  video: {
    width: '100%',
    height: 100,
    backgroundColor: 'green',
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomVideoPlayer;