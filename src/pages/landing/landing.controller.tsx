import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import {LocationInput} from './components/LocationInput.component';
import {useNavigation} from '@react-navigation/native';
import {Loader} from '../../common/Loader';
import useCurrentLatLong from '../../hooks/useLatLong';
import {getRestaurantByLatLong} from '../../services/restaurants';
import {IRestaurantPreview} from '../../interfaces/restaurants';
import {Toolbar} from './components/Toolbar';

const HomeScreen = () => {
  const [inputLocation, setInputLocation] = React.useState('');
  const navigation = useNavigation();
  const [isLoading, setLoading] = React.useState(false);
  const [location] = useCurrentLatLong();
  const [restaurantList, setRestaurantList] = React.useState<
    IRestaurantPreview[]
  >([]);

  React.useEffect(() => {
    const {lat, lon} = location;
    if (lat && lon) {
      setLoading(true);
      getRestaurantByLatLong({lat, lon})
        .then(({data}) => {
          setLoading(false);
          setRestaurantList(data.nearby_restaurants.map((e) => e.restaurant));
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [location]);

  if (isLoading) {
    return <Loader textMessage="loading restaurants near you" />;
  }

  return (
    <View style={{flex: 1}}>
      <Toolbar />
      <LocationInput
        onChangeText={setInputLocation}
        location={inputLocation}
        onSubmit={console.log}
      />
      <FlatList
        data={restaurantList}
        renderItem={({item}) => {
          return <Text>{item.name}</Text>;
        }}
        ListEmptyComponent={
          <Text>Are you on Mars? No Restaurants available</Text>
        }
      />
    </View>
  );
};

export default HomeScreen;
