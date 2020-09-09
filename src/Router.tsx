import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './pages/landing';
import {ListRestaurants} from './pages/ListRestaurants';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {SearchScreen} from './pages/SearchScreen';
import {RestaurantDetails} from './pages/RestaurantDetails';

const Stack = createSharedElementStackNavigator();

export type RootStackParamList = {
  Tomato: undefined;
  Restaurants: {cityId: number; lat: number; lon: number} | undefined;
  SearchScreen: undefined;
  RestaurantDetails: {id: number};
};

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
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
