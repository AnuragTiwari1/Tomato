import * as React from 'react';
import {Text, View} from 'react-native';
import {LocationInput} from './components/LocationInput.component';
import LatLongPicker from './components/LatLongPicker';

const HomeScreen = () => {
  const [inputLocation, setInputLocation] = React.useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LocationInput
        onChangeText={setInputLocation}
        location={inputLocation}
        onSubmit={console.log}
      />
      <Text style={{margin: '10%'}}>OR</Text>

      <LatLongPicker onSubmit={console.log} />
    </View>
  );
};

export default HomeScreen;
