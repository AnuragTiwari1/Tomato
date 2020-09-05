import * as React from 'react';
import {Text, View, TextInput} from 'react-native';
import {LocationIcon} from '../../../common/icons/icons';

export interface LocationInputProps {
  onChangeText: (location: string) => void;
  onSubmit: () => void;
  location: string;
}

export const LocationInput = ({
  onChangeText,
  onSubmit,
  location,
}: LocationInputProps) => {
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <LocationIcon size="large" />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholder="enter locality here"
          onChangeText={onChangeText}
          style={{padding: '5%'}}
          value={location}
        />
        <Text
          style={{color: location ? 'black' : 'grey'}}
          onPress={() => {
            if (location) {
              onSubmit();
            }
          }}>
          Go
        </Text>
      </View>
    </View>
  );
};
