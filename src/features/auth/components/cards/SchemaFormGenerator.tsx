// components/SchemaFormGenerator.tsx
import React from 'react';
import { StyleSheet, TextStyle, ViewStyle,View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../core/stores';

interface SchemaFormGeneratorProps {
  schema: Record<string, any>;
  formName: 'login' | 'signup';
  values: Record<string, any> ;
  errors: Record<string, string>;
  onFieldChange: (field: string, value: string) => void;
}

const SchemaFormGenerator: React.FC<SchemaFormGeneratorProps> = ({
  schema,
  formName,
  values,
  errors,
  onFieldChange,
}) => {

  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.authStore);
  const showPassword = useSelector((state: RootState) => 
    state.authStore.regAuthForm.common.showPassword
  );

  const renderInputField = (fieldName: string, fieldSchema: any) => {
    const commonProps = {
      // key: fieldName,
      style: [styles.input, errors[fieldName] && styles.inputError],
      value: values[fieldName] || '',
      onChangeText: (text: string) => onFieldChange(fieldName, text),
      placeholder: `Enter your ${fieldName}`,
      placeholderTextColor: '#999',
      editable: status !== 'loading',
    };

    switch (fieldName) {
      case 'email':
        return (
          <View key={fieldName} style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
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
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
              
                {...commonProps}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.toggleButton}
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
            <Text style={styles.label}>{fieldName}</Text>
            <TextInput {...commonProps} />
            {/* {errors[fieldName] && <Text style={styles.errorText}>{errors[fieldName]}</Text>} */}
          </View>
        );
    }
  };

  return (
    <View>
      {Object.entries(schema).map(([fieldName, fieldSchema]) => (
        renderInputField(fieldName, fieldSchema)
      ))}
    </View>
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