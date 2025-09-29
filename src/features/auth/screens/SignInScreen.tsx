
import React, { useState,createContext,useContext,useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { ThemeContext } from '../../../shared/contexts/themProvider.js';
import { authLYT } from '../../../styles/cardStyles/authLyt.js';

import { useDispatch, useSelector } from 'react-redux';
import { storesDataObj,storesComputorProvider } from '../../../core/stores/index';

//components 
import TMMALogoLoaderii from "../../../shared/components/cards/Loader_ii.jsx"

import SignupComponent  from "../components/SignupComponent.tsx"
import LoginComponent  from "../components/screens/login/SignInFeaturedComponnet.tsx"

import {RenderSignInFeaturedComponet} from "../components/screens/login/render"

import { ROUTES, RootStackParamList } from '../../../core/routes/config/route';
import { StackScreenProps } from '@react-navigation/stack';

// Storing 
import theStore from "../stores/store"

type HomeScreenProps = StackScreenProps<RootStackParamList,typeof ROUTES.AUTH.NAV.LOGIN>;

const AuthScreen = ({ navigation,route }:HomeScreenProps) => {


// import theStore from "../stores/store"
       const {  
        
        operation,suboperation,
        schemaDataItem,
        
        YieldItem,
        fetchCrudEndSignInYield,
fetchCrudEndSignAnnonyYield,

        fetchCrudStarterSignInYieldItem,
        fetchCrudStarterSignGoogleYield

       }  = theStore()
       
  const computorProvider = useDispatch<storesComputorProvider>();
  const { 
    currentUser,
    currentAuthMethod,
    status,
    error
  } = useSelector((state:storesDataObj) => state.authStore);

  const activeRegAuthForm = useSelector((state: storesDataObj) => state.authStore.regAuthForm.activeTab);



    
    let {theme} = useContext(ThemeContext);

    let authLYTStyles = authLYT(theme)

  // Continue as Anonymous 
  const handleOAuth = async (type: 'google'|'apple'| 'anonymouse') => {
    try {
      if(type == 'google'){}
      else if(type == 'apple'){}
      else if(type == 'anonymouse'){
        // computorProvider(startAnonymousAuth())
        navigation.navigate(ROUTES.MAIN_TAB.GATEWAY);
        // navigation.reset({index: 0, routes: [{ name: 'News',params: { screen: 'news' } }],  });
      }

    } catch (error) {  };
  }


  //home loading.... 
  const onRetry = React.useCallback(() => {
    fetchCrudStarterSignInYieldItem()

    //put new filtering
    // startFetchOperation({}, null);
    // setclientFeaturedGroupQFilters('category',featuredGroupOption['category'] as string[]) 
    // fetchFeaturedData() //fetchItems ++  fetchFeaturedGroupData
  }, []);

  useEffect(() => {
    // GoogleSignin.configure({
    //   webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com', // Replace with your web client ID
    //   offlineAccess: true, // if you want to access Google API on behalf of the user OFFLINE
    // });
    onRetry()
  }, []);


  return (
  <SafeAreaView style={[authLYTStyles.container,{marginBottom:35}]}> 
    
    <StatusBar backgroundColor="#021950ff"  />

      { 
        (operation.type === 'fetch') &&
        (suboperation === 'signin') && 
        (RenderSignInFeaturedComponet({
            status: (operation.status ?? 'loading'),
            payloadParams: YieldItem.item,
            actions: {onRetry}
          })) 
      }
          
     
{(operation.type === 'fetch') &&  (suboperation === 'signin') && (
  <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>

                {/* <TouchableOpacity 
                  style={[authLYTStyles.button, authLYTStyles.googleButton]}
                  onPress={() => fetchCrudStarterSignGoogleYield()}
                  disabled={status =='loading'}
                >

                  <Text style={authLYTStyles.buttonText}>Continue with Google </Text>
                  
                </TouchableOpacity> */}
                
                <TouchableOpacity 
                  style={[authLYTStyles.button, authLYTStyles.anonymousButton]}
                  onPress={() => fetchCrudEndSignAnnonyYield()}
                  disabled={status =='loading'}
                >
                  <Text style={[authLYTStyles.buttonText,{backgroundColor:'white',color:'black'}]}>Continue as Guest</Text>
                </TouchableOpacity>
                
            </View>
  </>
)}

    </SafeAreaView>
  );
};

export default AuthScreen;