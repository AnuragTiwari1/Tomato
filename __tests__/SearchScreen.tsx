import 'react-native';
import React from 'react';
import axios from 'axios';
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import {SearchScreen} from '../src/pages/SearchScreen';

it('renders correctly', async () => {
  const {getByPlaceholder} = render(<SearchScreen />);
});
