// navigation/stacks/MainStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import ProductDetailScreen from '../../screens/Products/ProductDetailScreen';
import CategoryScreen from '../../screens/Categories/CategoryScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#333',
        headerTitleStyle: { fontWeight: 'bold' },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen} 
        options={({ route }) => ({ title: route.params.productName })}
      />
      <Stack.Screen 
        name="Category" 
        component={CategoryScreen} 
        options={({ route }) => ({ title: route.params.categoryName })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;