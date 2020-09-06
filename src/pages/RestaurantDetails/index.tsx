import * as React from 'react';
import {Text} from 'react-native';
import {IRestaurantPreview} from '../../interfaces/restaurants';
import {RootStackParamList} from '../../Router';
import {RouteProp} from '@react-navigation/native';
import {Loader} from '../../common/Loader';
import {getRestaurantDetailsById} from '../../services/restaurants';
import {ScrollView} from 'react-native-gesture-handler';

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

  React.useEffect(() => {
    const restaurantId = route.params.id;

    if (restaurantId) {
      setLoading(true);
      getRestaurantDetailsById(restaurantId)
        .then(({data}) => {
          setLoading(false);
          setDetails(data);
        })
        .catch(() => setLoading(false));
    }
  }, [route]);

  if (isLoading) {
    return <Loader textMessage="taking a quick peek at the kitchen" />;
  }

  return (
    <ScrollView>
      <Text>{JSON.stringify(details, null, 2)}</Text>
    </ScrollView>
  );
};
