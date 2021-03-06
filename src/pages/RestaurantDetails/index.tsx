import * as React from 'react';
import {Text} from 'react-native';
import {IRestaurantPreview} from '../../interfaces/IRestaurants';
import {RootStackParamList} from '../../Router';
import {RouteProp} from '@react-navigation/native';
import {Loader} from '../../common/Loader';
import {RestaurantServices} from '../../services/restaurants';
import {ScrollView} from 'react-native-gesture-handler';
import {LOADING_KITCHEN} from '../../lang/common';

type RestaurantDetailsNavigationRouteProp = RouteProp<
  RootStackParamList,
  'RestaurantDetails'
>;
export const RestaurantDetails = ({
  route,
}: {
  route: RestaurantDetailsNavigationRouteProp;
}) => {
  const [details, setDetails] = React.useState<IRestaurantPreview | null>(null);
  const [isLoading, setLoading] = React.useState(false);
  const restaurantServices = new RestaurantServices();

  React.useEffect(() => {
    const restaurantId = route.params.id;

    if (restaurantId) {
      setLoading(true);
      restaurantServices
        .getRestaurantDetailsById(restaurantId)
        .then(({data}) => {
          setLoading(false);
          setDetails(data);
        })
        .catch(() => setLoading(false));
    }
  }, [route]); //eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <Loader textMessage={LOADING_KITCHEN} />;
  }

  return (
    <ScrollView>
      <Text>{JSON.stringify(details, null, 2)}</Text>
    </ScrollView>
  );
};
