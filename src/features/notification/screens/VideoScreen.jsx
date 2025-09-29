import React, { useState,useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { ThemeContext } from '../../../shared/contexts/themProvider.js';
import { authLYT } from '../../../styles/cardStyles/authLyt.js';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID_FROM_GOOGLE_CONSOLE',
});

const AuthScreen = ({ navigation,route }) => {

  let navParams = route.params;
  
  // style provider value
  let {theme} = useContext(ThemeContext);
  let authLYTStyles = authLYT(theme)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Email/Password Login
  const handleLogin = async () => {
    // setIsLoading(true);
    // try {
    //   await auth().signInWithEmailAndPassword(email, password);
    //   navigation.navigate('Home');
    // } catch (error) {
    //   alert(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    // setIsLoading(true);
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const { idToken } = await GoogleSignin.signIn();
    //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //   await auth().signInWithCredential(googleCredential);
    //   navigation.navigate('Home');
    // } catch (error) {
    //   alert(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  // Continue as Anonymous
  const handleAnonymousLogin = async () => {
    setIsLoading(true);
    try {
      // await auth().signInAnonymously();
      navigation.navigate('Home');
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <SafeAreaView style={[authLYTStyles.container]}> 
    
    <View style={authLYTStyles.container}>

      <StatusBar backgroundColor="#0A2463" barStyle="blue-content" />
      
      <Image 
         source={require('../../../assets/images/tmma_logo.png')} 
        style={authLYTStyles.logo}
      />
      
      <Text style={authLYTStyles.title}>Tigrai Mass Media Agency</Text>
      
      {/* Email/Password Login */}
      <TextInput
        style={authLYTStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={authLYTStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity 
        style={authLYTStyles.button} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={authLYTStyles.buttonText}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>
      
      <Text style={authLYTStyles.orText}> OR </Text>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>

{/* Google Sign-In */}
<TouchableOpacity 
        style={[authLYTStyles.button, authLYTStyles.googleButton]}
        onPress={handleGoogleSignIn}
        disabled={isLoading}
      >
        <Text style={authLYTStyles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      
      {/* Anonymous Login */}
      <TouchableOpacity 
        style={[authLYTStyles.button, authLYTStyles.anonymousButton]}
        onPress={handleAnonymousLogin}
        disabled={isLoading}
      >
        <Text style={authLYTStyles.buttonText}>Continue as Guest</Text>
      </TouchableOpacity>
        </View>
      
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={authLYTStyles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};


export default AuthScreen;