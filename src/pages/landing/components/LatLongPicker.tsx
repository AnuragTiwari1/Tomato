import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LatLongPicker = ({onSubmit}: {onSubmit: (lat, long) => void}) => {
  return (
    <TouchableOpacity
      style={{borderWidth: 1, padding: '1%'}}
      onPress={() => {
        Geolocation.getCurrentPosition(({coords}) => {
          onSubmit(coords.latitude, coords.longitude);
        });
      }}>
      <Text>view nearby restaurant</Text>
    </TouchableOpacity>
  );
};

export default LatLongPicker;
