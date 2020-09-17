import 'react-native';
import React from 'react';
import axios from 'axios';
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import HomeScreen from '../src/pages/landing';
import Geolocation from '@react-native-community/geolocation';
import {
  LOADING_RESTAURANT_NEARBY,
  SEARCH_PLACEHOLDER,
} from '../src/lang/common';
import {useNavigation} from '@react-navigation/native';
const geocodeMockData = require('../mock_server/geocode.json');

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

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUseNavigation = useNavigation as jest.Mock<typeof useNavigation>;

it('renders correctly', async () => {
  mockedAxios.get.mockImplementation(() =>
    Promise.resolve({data: geocodeMockData}),
  );
  const mockNavigate = jest.fn();
  mockedUseNavigation.mockImplementation(() => ({navigate: mockNavigate}));

  const {getByText, getByPlaceholderText, queryAllByText} = render(
    <HomeScreen />,
  );

  //checking if the loader appears on first mount
  expect(queryAllByText(LOADING_RESTAURANT_NEARBY)).toHaveLength(1);

  //checking if we are able to receive the location
  expect(Geolocation.getCurrentPosition).toBeCalledTimes(1);

  //waiting for the loader to disappear
  await waitForElementToBeRemoved(() => getByText(LOADING_RESTAURANT_NEARBY));

  //making assertion on api call arguments
  expect(mockedAxios.get).toBeCalledTimes(1);
  expect(mockedAxios.get).toBeCalledWith('/geocode', {
    params: {lat: 18.54321, lon: 72.3456},
  });

  //checking if we are showing the api data or not
  expect(queryAllByText('LBW - Lounge Before Wicket')).toHaveLength(3);

  //testing navigation on input focus
  const searchBox = getByPlaceholderText(SEARCH_PLACEHOLDER);
  fireEvent(searchBox, 'onFocus');

  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('SearchScreen');
});
