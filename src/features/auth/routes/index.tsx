import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OAuthScreen from '../screens/OAuthComponet';

// import FeaturedScreen from '../../../features/News/screens/FeaturedScreen';

import { ROUTES, RootStackParamList } from '../../../core/routes/config/route';
       

const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
      <AuthStack.Navigator 
      initialRouteName={ROUTES.AUTH.NAV.LOGIN}
      >
        
        <AuthStack.Screen name={ROUTES.AUTH.NAV.LOGIN} component={SignInScreen}    options={{ headerShown: false }} />

        <AuthStack.Screen 
          name={ROUTES.AUTH.NAV.SIGNUP} 
          component={SignUpScreen} 
          // options={ ({ route }: { route: { params?: { title?: string } } }) => ({ title: route.params?.title || 'Register' })} 
        />

        {/* <AuthStack.Screen 
          name="OAuth" 
          component={OAuthScreen} 
          options={ ({ route }: { route: { params?: { title?: string } } }) => ({ title: route.params?.title || 'Register' })} 
        /> */}
        
      </AuthStack.Navigator>
  );
};

export default AppNavigator;