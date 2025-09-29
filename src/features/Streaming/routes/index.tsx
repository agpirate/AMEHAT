import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LiveScreen from '../screens/LiveScreen';

const newsStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <newsStack.Navigator  screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'light' },
      }}>
        
        <newsStack.Screen name="lives" component={LiveScreen}       options={{ headerShown: false }} />

      </newsStack.Navigator>
  );
};

export default AppNavigator;