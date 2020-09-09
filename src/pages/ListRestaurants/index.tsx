import * as React from 'react';
import {IRestaurantPreview} from '../../interfaces/IRestaurants';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../Router';
import {RestaurantServices} from '../../services/restaurants';
import {RestaurantPreview} from '../landing/components/RestaurantPreviewCard';
import {StyleSheet, FlatList} from 'react-native';

type ListRestaurantsNavigationRouteProp = RouteProp<
  RootStackParamList,
  'Restaurants'
>;

export const ListRestaurants = ({
  route,
}: {
  route: ListRestaurantsNavigationRouteProp;
}) => {
  const [list, setList] = React.useState<IRestaurantPreview[]>([]);
  // const [isLoading, setLoading] = React.useState(false);
  const restaurantServices = new RestaurantServices();

  React.useEffect(() => {
    const cityId = route.params?.cityId;

    // setLoading(true);
    if (cityId) {
      restaurantServices.searchRestaurants({id: cityId}).then(({data}) => {
        // setLoading(false);
        setList([...list, ...data.restaurants.map((e) => e.restaurant)]);
      });
      // .catch(() => setLoading(false));
    }
  }, [route]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={list}
      renderItem={({item}) => {
        return <RestaurantPreview {...item} onPress={() => {}} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: '5%',
  },
});
