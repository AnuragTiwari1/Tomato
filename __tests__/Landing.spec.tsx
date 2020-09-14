import 'react-native';
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import axios from 'axios';
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import HomeScreen from '../src/pages/landing';
import Geolocation from '@react-native-community/geolocation';
import {
  LOADING_RESTAURANT_NEARBY,
  SEARCH_PLACEHOLDER,
} from '../src/lang/common';
import {useNavigation} from '@react-navigation/native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper'); //this disables the useNativeDriver warnings

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});

jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn((callback) => {
    callback({
      coords: {
        latitude: 18.54321,
        longitude: 72.3456,
      },
    });
  }),
}));

it('renders correctly', async () => {
  axios.get.mockImplementation(() => Promise.resolve(''));
  const mockNavigate = jest.fn();

  const {getByText, getByPlaceholderText, queryByTestId, queryByText} = render(
    <HomeScreen />,
  );

  // const container = queryByTestId('Landing_Screen');
  // const loader = queryByText(LOADING_RESTAURANT_NEARBY);
  // expect(container).toContainElement(loader);
  //checking if we are able to receive the location
  expect(Geolocation.getCurrentPosition).toBeCalledTimes(1);

  //waiting for the loader to disappear
  await waitForElementToBeRemoved(() => getByText(LOADING_RESTAURANT_NEARBY));

  //making assertion on api call arguments
  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith('/geocode', {
    params: {lat: 18.54321, lon: 72.3456},
  });

  //testing navigation
  useNavigation.mockImplementation(() => ({navigate: mockNavigate}));
  // fireEvent.press(getByPlaceholderText(SEARCH_PLACEHOLDER));
  // await waitFor(() => expect(mockNavigate).toHaveBeenCalledTimes(1));
  // expect(mockNavigate).toHaveBeenCalledWith('Home');

  const searchBox = getByPlaceholderText(SEARCH_PLACEHOLDER);
  // console.log('the searchbox element is >>>>>>>>>', searchBox);
});
