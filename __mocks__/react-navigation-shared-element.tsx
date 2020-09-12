import React from 'react';
import {View} from 'react-native';

export default jest.mock('react-navigation-shared-element', ({children}) => {
  return <View>{children}</View>;
});
