import { View, Animated,Text, Image, useWindowDimensions,TouchableOpacity, StyleSheet } from 'react-native';
import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';

const SkeletonLoader = ({  }) => {
  const [opacity] = useState(new Animated.Value(0.3));

  Animated.loop(
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0.3,
        duration: 800,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#e1e1e1',
          opacity,
        }
      ]}
    />
  );
};

export default SkeletonLoader