
import React, { useState,useContext,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../../../shared/contexts/themProvider';
import { authLYT } from '../../../styles/cardStyles/authLyt.js';

import { useDispatch, useSelector } from 'react-redux';
import { storesDataObj,storesComputorProvider } from '../../../core/stores/index';
import { startAnonymousAuth} from '../stores/slices/userComputor.ts';
// import { 
// //   register,
//   updateRegistrationForm,
//   toggleShowPassword,
//   toggleShowConfirmPassword,
//   clearAuthError
// } from '../stores/slices/userSlice';
// import { styles } from './styles';

//components 
import AnnyOAuth  from "../components/annonOAuth.tsx"
import GoogleOAuth  from "../components/googleOAuth.tsx"

const AuthScreen = ({  }) => {
  
  const navigation = useNavigation();
  
  const computorProvider = useDispatch<storesComputorProvider>();
  const { 
    currentUser,
    status,
    error
  } = useSelector((state:storesDataObj) => state.authStore);

  const activeRegAuthForm = useSelector((state: storesDataObj) => state.authStore.regAuthForm.activeTab);

  useEffect(() => {
    // GoogleSignin.configure({
    //   webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com', // Replace with your web client ID
    //   offlineAccess: true, // if you want to access Google API on behalf of the user OFFLINE
    // });
  }, []);

  // const switchTab = (tab: AuthTab) => {
  //   dispatch(setactiveRegAuthForm(tab));
  //   dispatch(resetAuthForms());
  // };


  const signIn = async () => {
    try {
      // await GoogleSignin.hasPlayServices();
      // const userInfo = await GoogleSignin.signIn();
      // console.log('User Info:', userInfo);
      // Handle user info (e.g., store in state, navigate to next screen)
    } catch (error) {
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      //   console.error('Google Sign-in Error:', error);
      // }
    }
  };


  // let navParams = route.params;
  

      // style provider value
      let {theme} = useContext(ThemeContext);
      let authLYTStyles = authLYT(theme)

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
    try {
      computorProvider(startAnonymousAuth())
      // navigation.navigate('OAuth')
    } catch (error) {
    } finally {
    }
  };

  return (
  <SafeAreaView style={[authLYTStyles.container]}> 
    
      <StatusBar backgroundColor="#0A2463"  />
      
      
    <Text style={{backgroundColor:'#0A2463'}}>TMMA</Text>
      
      {/* Components Computing */}
      {currentUser?.authType === 'email' ? (
  activeRegAuthForm === 'login' ? (
    <AnnyOAuth />
    
  ) : (activeRegAuthForm === 'signup' ? (
    <GoogleOAuth />
  ) : (
    <Text>Loading..</Text>
  ))
) : null}

          
{(currentUser?.authType === 'email') &&  (activeRegAuthForm === 'login') && (
  <>
    {    
    (<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
    
    {/* Google Sign-In */}
    <TouchableOpacity 
            style={[authLYTStyles.button, authLYTStyles.googleButton]}
            onPress={handleGoogleSignIn}
            disabled={status =='loading'}
          >
            <Text style={authLYTStyles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          
          {/* Anonymous Login */}
          <TouchableOpacity 
            style={[authLYTStyles.button, authLYTStyles.anonymousButton]}
            onPress={handleAnonymousLogin}
            disabled={status =='loading'}
          >
            <Text style={authLYTStyles.buttonText}>Continue as Guest</Text>
          </TouchableOpacity>
          
            </View>)
            }
  </>
)}

    </SafeAreaView>
  );
};

export default AuthScreen;