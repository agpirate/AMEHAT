// components/SchemaFormGenerator.tsx
const thisPath = '../../../../../shared/'

import styleWrap from "../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';

import { StyleSheet, TextStyle, ViewStyle,View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../core/stores';

interface SchemaFormGeneratorProps {
fieldName: string, fieldSchema: any,
  value: any ,
  error: string,
  onFieldChange: (field: string, value: string) => void;
}

const SchemaFormGenerator: React.FC<SchemaFormGeneratorProps> = ({
  fieldName,
  fieldSchema,
  value,
  error,
  onFieldChange,
}) => {
  
  if(!fieldSchema)return;


const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.authStore);
  // const showPassword = useSelector((state: RootState) => 
  //   state.authStore.regAuthForm.common.showPassword
  // );
  
  const [showPassword,setShowPassword]=useState(false)
  console.log(fieldSchema,'oppp')

  const renderInputField = (fieldName: string, fieldSchema: any) => {
    const commonProps = {
      // key: fieldName,
       style: [styles.input,fontStyles.fontStyle_sm,fontStyles.fcolor_grey180,
        
        error && styles.inputError],
      value: value,
      onChangeText: (text: string) => onFieldChange(fieldName, text),
      placeholder: `Enter your ${fieldSchema.fieldtype}`,
      placeholderTextColor: '#999',
      editable: status !== 'loading',
    };

    if(fieldSchema.type == 'string'){
        switch (fieldSchema.fieldtype) {
          
          case 'email':
            return (
              <View key={fieldName} style={styles.inputContainer}>
                <Text style={[fontStyles.fontStyle_sm,fontStyles.fcolor_grey180,fontStyles.f_capitalize]}>{fieldName}</Text>
                <TextInput
                  {...commonProps}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {/* {errors.email && <Text style={styles.errorText}>{errors.email}</Text>} */}
              </View>
            );

          case 'password':
            return (
              <View key={fieldName} style={styles.inputContainer}>
                            <Text style={[fontStyles.fontStyle_sm,fontStyles.fcolor_grey180,fontStyles.f_capitalize]}>{fieldName}</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                  
                    {...commonProps}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={()=>setShowPassword}
                  >
                    <Text style={styles.toggleText}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* {errors.password && <Text style={styles.errorText}>{errors.password}</Text>} */}
              </View>
            );

          // Add more custom field types as needed
          default:
            return (
              <View key={fieldName} style={styles.inputContainer}>
                <Text style={[fontStyles.fontStyle_sm,fontStyles.fcolor_grey180,fontStyles.f_capitalize]}>{fieldName}</Text>
                <TextInput {...commonProps} />
                {/* {errors[fieldName] && <Text style={styles.errorText}>{errors[fieldName]}</Text>} */}
              </View>
            );
        }
    }else{
      //options,checkbox
    }
  };

  return (
        renderInputField(fieldName, fieldSchema)
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff4444',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    marginTop: 4,
  },
  passwordContainer: {
    position: 'relative',
  },
  toggleButton: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  toggleText: {
    color: '#4285F4',
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SchemaFormGenerator;