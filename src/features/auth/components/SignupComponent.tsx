import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { authSchemas} from '../types/userSchema.ts'

import SchemaFormGenerator from './cards/SchemaFormGenerator.tsx';

import { register } from '../stores/chunk/user.ts'

import { 
  startEmailLogin,
  updateLoginForm,
  updateSignupForm,
  togglePasswordVisibility,
  setActiveAuthTab,

  toggleTermAggrement
} from '../stores/slices/userComputor.ts';
import { RootState,AppDispatch }  from '../../../core/stores/index';


const SignupComponent = () => {

  const dispatch:AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.authStore.regAuthForm.signup);

  const commonForm = useSelector((state: RootState) => state.authStore.regAuthForm.common);
  const { currentUser,status,error} = useSelector(
    (state: RootState) => state.authStore
  );

    const handleFieldChange = (field: string, value: string) => {
      dispatch(updateSignupForm({ [field]: value }));
    };
  const handleForm = async () => {
     dispatch(register(userData));
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          {/* <Image 
            source={require('./assets/tmma-logo.png')} // Replace with your logo
            style={styles.logo}
          /> */}
          <Text style={styles.title}>Create Your Account</Text>
        </View>

        {/* Form */}

        <SchemaFormGenerator
        schema={authSchemas.signup}
        formName="login"
        values={userData}
        errors={userData.errors}
        onFieldChange={handleFieldChange}
      />

        <View style={styles.formContainer}>
          
          <View style={styles.termsContainer}>

            <TouchableOpacity onPress={() => dispatch(toggleTermAggrement())}>  
                      <View style={[styles.checkbox, userData.acceptTerms && styles.checked]}>
                          {userData.acceptTerms && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        </TouchableOpacity>

            <Text style={styles.termsText}>
              I agree to the <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>
          
          <TouchableOpacity 
            style={[styles.button, !userData.acceptTerms && styles.buttonDisabled]}
            onPress={() => handleForm()}
            disabled={!userData.acceptTerms && status =='loading' || Object.values(userData.errors).some(Boolean)}
          >

            <Text style={styles.buttonText}>
              {status == 'loading' ? 'Signing Up...' : (error ? error : 'Sign Up')}             
            </Text>

          </TouchableOpacity>

          <TouchableOpacity 
            
            style={{backgroundColor:'blue'}}
            onPress={() => dispatch(setActiveAuthTab('login'))}
          >
            <Text style={styles.buttonText}>Already Registered ? Log in</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: 'black',    
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  termsText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  link: {
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
  },
});

export default SignupComponent;