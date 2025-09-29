import React, { useEffect, useRef } from 'react';
import { View,Text, Image, StyleSheet, Animated } from 'react-native';

const TMMALogoPulseLoader = () => {
  const pulseValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Animated.Image
        source={require('../../../assets/images/tmma.png')} // Replace with TMMA logo
        style={[styles.logo, { transform: [{ scale: pulseValue }] }]}
        resizeMode="contain"
      /> */}
      <Text style={[{color:'grey'}]}> Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    marginTop:'50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default TMMALogoPulseLoader;