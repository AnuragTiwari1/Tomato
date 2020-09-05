import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './pages/landing/landing.controller';
import {ListRestaurants} from './pages/ListRestaurants';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {SearchScreen} from './pages/SearchScreen';

const Stack = createSharedElementStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Tomato"
          component={HomeScreen}
        />
        <Stack.Screen name="Restaurants" component={ListRestaurants} />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          sharedElements={() => {
            return ['locationInput'];
          }}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
