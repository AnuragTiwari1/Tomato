import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import HomeScreen from '../src/pages/landing';
import Geolocation from '@react-native-community/geolocation';
import {RestaurantServices} from '../src/services/restaurants';

jest.mock('../src/services/restaurants.ts');

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});

jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn(),
}));

beforeEach(() => {
  RestaurantServices.mockClear();
});

it('renders correctly', () => {
  const {getByPlaceholder} = render(<HomeScreen />);
  expect(Geolocation.getCurrentPosition).toBeCalledTimes(1);
  expect(RestaurantServices).toHaveBeenCalledTimes(1);

  const mockRestaurantServices = RestaurantServices.mock.instance[0];
  const mockGetRestaurantsByLatLong =
    mockRestaurantServices.getRestaurantByLatLong;

  // expect(mockGetRestaurantsByLatLong).toHaveBeenCalledTimes(1);
});
