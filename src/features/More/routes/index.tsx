import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../screens/MoreScreen';

import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList } from 'react-native';

const newsStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <>
              <StatusBar barStyle="light-content" backgroundColor="#064482" />
    
      <newsStack.Navigator  screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'light' },
      }} initialRouteName='more'>
        
        
        <newsStack.Screen name="more" component={MoreScreen}    options={{ headerShown: false }} />
        {/* <newsStack.Screen name="details" component={DetailsScreen}    options={{ headerShown: false }} /> */}
        
      </newsStack.Navigator>

    </>

  );
};

export default AppNavigator;