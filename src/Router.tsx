import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/landing/landing.controller';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tomato" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
