import * as React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {IRestaurantPreview} from '../../interfaces/resturants';
import {getRestaurantByCity} from '../../services/resturants';

export const ListRestaurants = () => {
  const [list, setList] = React.useState<IRestaurantPreview[]>([]);

  React.useEffect(() => {
    getRestaurantByCity({q: 'pune'}).then(({data}) => {
      setList(data.restaurants);
    });
  }, []);

  return (
    <FlatList
      data={[list]}
      renderItem={({item}) => {
        return (
          <Text style={{margin: '1%'}}>{JSON.stringify(item, null, 2)}</Text>
        );
      }}
    />
  );
};
