import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/landing/landing.controller';
import {ListRestaurants} from './pages/ListRestaurants';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tomato" component={HomeScreen} />
        <Stack.Screen name="Restaurants" component={ListRestaurants} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
