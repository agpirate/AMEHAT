import React, { useState,useContext,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { ThemeContext } from '../../../shared/contexts/themProvider.js';
import { authLYT } from '../../../styles/cardStyles/authLyt.js';
import { flexSizes } from '../../../styles/displayStyles/child_EditableSizes/BoxSizes.js';

import { storesDataObj,storesComputorProvider } from '../../../core/stores/index';
import { authSchemas} from '../types/userSchema.ts'

import SchemaFormGenerator from './cards/SchemaFormGenerator.tsx';
import { loginWithEmail } from '../stores/chunk/user.ts'
import { 

  startEmailLogin,
  updateLoginForm,
  togglePasswordVisibility,
  setActiveAuthTab
} from '../stores/slices/userComputor.ts';
import { RootState,AppDispatch }  from '../../../core/stores/index';


const LoginComponent = () => {

  const dispatch:AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.authStore.regAuthForm.login);
  const { showPassword } = useSelector((state: RootState) => state.authStore.regAuthForm.common);
  const { status,error, currentAuthMethod, currentAuthFlow } = useSelector(
    (state: RootState) => state.authStore
  );

  const handleFieldChange = (field: string, value: string) => {
    dispatch(updateLoginForm({ [field]: value }));
  };

  const handleForm = async () => {
     dispatch(loginWithEmail(userData));
  };
  
          // style provider value
          let {theme} = useContext(ThemeContext);
          let authLYTStyles = authLYT(theme)

      return (

        // Keyboard Avoidance:
    // Automatically adjusts the view position when the keyboard appears
    // Prevents the keyboard from covering text inputs

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}
            >
              <ScrollView contentContainerStyle={styles.scrollContainer}>


        <View style={authLYTStyles.container}>

          
          <Image 
             source={require('../../../assets/images/tmma_logo.png')} 
            style={authLYTStyles.logo}
          />
          
          <Text style={authLYTStyles.title}>Tigrai Mass Media Agency  </Text>
          {/* Email/Password Login */}

          <SchemaFormGenerator
        schema={authSchemas.login}
        formName="login"
        values={userData}
        errors={userData.errors}
        onFieldChange={handleFieldChange}
      />


        {/* Remember Me & Forgot Password */}
        <View style={styles.optionsContainer}>
         
          
          <TouchableOpacity
            onPress={() => dispatch(setActiveAuthTab('reset'))}
          >
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rememberMe}
            onPress={() => dispatch(setActiveAuthTab('signup') )}     >
            <Text style={styles.optionText}>Sign Up</Text>
          </TouchableOpacity>

        </View>

          <TouchableOpacity 
            style={authLYTStyles.button} 
            onPress={handleForm}
            disabled={status =='loading' || Object.values(userData.errors).some(Boolean)}
          >
            <Text style={authLYTStyles.buttonText}>
              {status == 'loading' ? 'Logging in...' : (error ? error : 'Login')}             
            </Text>
          </TouchableOpacity>
         
        </View>

        </ScrollView>

        </KeyboardAvoidingView>
      );
    }


    const styles = StyleSheet.create({
      scrollContainer: {
        flexGrow: 1,
        paddingBottom: 50,
      },
      container: {
        flex: 1,
        width: '100%',
      },
      formContainer: {
        padding: 20,
        width: '100%',
      },
      inputContainer: {
        marginBottom: 20,
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
        fontWeight: '500',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
      },
      inputError: {
        borderColor: '#ff4444',
      },
      errorText: {
        color: '#ff4444',
        fontSize: 14,
        marginTop: 5,
      },
      passwordContainer: {
        position: 'relative',
      },
      toggleButton: {
        position: 'absolute',
        right: 10,
        top: 12,
      },
      toggleText: {
        color: '#4285f4',
        fontSize: 14,
      },
      optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      checked: {
        backgroundColor: '#4285f4',
        borderColor: '#4285f4',
      },
      checkmark: {
        color: '#fff',
        fontSize: 12,
      },
      optionText: {
        fontSize: 14,
        color: '#333',
      },
      forgotPassword: {
        color: '#4285f4',
        fontSize: 14,
      },
      button: {
        backgroundColor: '#4285f4',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonDisabled: {
        backgroundColor: '#cccccc',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      generalErrorContainer: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#ffeeee',
        borderRadius: 8,
      },
      generalErrorText: {
        color: '#ff4444',
        textAlign: 'center',
      },
    });


    export default  LoginComponent;