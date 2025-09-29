import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogScreen from '../screens/BlogScreen';
import VideoScreen from '../screens/VideoScreen';
import GallaryScreen from '../screens/GallaryScreen';
import SignUpScreen from '../screens/SignUpScreen';

const PostStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <PostStack.Navigator  screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'light' },
      }}>
        
        <PostStack.Screen name="Blogs" component={BlogScreen}    options={{ headerShown: false }} />

      </PostStack.Navigator>
  );
};

export default AppNavigator;