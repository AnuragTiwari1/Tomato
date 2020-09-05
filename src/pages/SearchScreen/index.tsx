import React from 'react';
import {View} from 'react-native';
import {LocationInput} from '../landing/components/LocationInput.component';
import {SharedElement} from 'react-navigation-shared-element';

export const SearchScreen = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: '5%'}}>
      <SharedElement id={'locationInput'}>
        <LocationInput onFocus={() => {}} />
      </SharedElement>
    </View>
  );
};
