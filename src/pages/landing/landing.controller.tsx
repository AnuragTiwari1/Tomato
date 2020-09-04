import * as React from 'react';
import {Text, View} from 'react-native';
import {LocationInput} from './components/LocationInput.component';
import LatLongPicker from './components/LatLongPicker';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [inputLocation, setInputLocation] = React.useState('');
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LocationInput
        onChangeText={setInputLocation}
        location={inputLocation}
        onSubmit={console.log}
      />
      <Text style={{margin: '10%'}}>OR</Text>

      <LatLongPicker onSubmit={() => navigate('Restaurants')} />
    </View>
  );
};

export default HomeScreen;
