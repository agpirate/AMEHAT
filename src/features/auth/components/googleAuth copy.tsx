// components/GoogleAuthButton.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { loginWithGoogle } from '../features/auth/authThunks';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
  offlineAccess: true,
});

const GoogleAuthButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleGoogleSignIn = async () => {
    try {
      // Check if Google Play Services is available
      await GoogleSignin.hasPlayServices();
      
      // Get user info
      const userInfo = await GoogleSignin.signIn();
      
      if (userInfo.idToken) {
        // Dispatch the login action with the Google token
        dispatch(loginWithGoogle(userInfo.idToken));
      } else {
        throw new Error('No ID token received from Google');
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={handleGoogleSignIn}
    >
      <View style={styles.buttonContent}>
        <View style={styles.iconContainer}>
          {/* You can use an actual Google logo image here */}
          <Text style={styles.iconText}>G</Text>
        </View>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default GoogleAuthButton;