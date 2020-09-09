import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {TOMATO_LOGO} from '../../assets';
import {Loader} from '../../common/Loader';
import useCurrentLatLong from '../../hooks/useLatLong';
import {IRestaurantPreview} from '../../interfaces/IRestaurants';
import {RestaurantServices} from '../../services/restaurants';
import {LocationInput} from './components/LocationInput.component';
import {RestaurantPreview} from './components/RestaurantPreviewCard';
import {Toolbar} from './components/Toolbar';
import {styles} from './landing.styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = React.useState(true);
  const [location] = useCurrentLatLong();
  const [restaurantList, setRestaurantList] = React.useState<
    IRestaurantPreview[]
  >([]);
  const [currentId, setCurrentId] = React.useState<number | null>(); //this thing is not being used in ui rendering so can be optimized with ref
  const restaurantServices = new RestaurantServices();

  React.useEffect(() => {
    const {lat, lon} = location;
    if (lat && lon) {
      setLoading(true);
      restaurantServices
        .getRestaurantByLatLong({lat, lon})
        .then(({data}) => {
          setRestaurantList(data.nearby_restaurants.map((e) => e.restaurant));
          setCurrentId(data.location.city_id);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [location, restaurantServices]);

  if (isLoading) {
    return <Loader textMessage="loading restaurants near you" />;
  }

  return (
    <View style={styles.wrapper}>
      <Toolbar />
      <Image
        source={TOMATO_LOGO}
        style={styles.intro_logo}
        resizeMode="contain"
      />

      <SharedElement id={'locationInput'}>
        <LocationInput onFocus={() => navigation.navigate('SearchScreen')} />
      </SharedElement>

      <Image
        source={{
          uri:
            'https://www.consumer.ftc.gov/sites/www.consumer.ftc.gov/files/face_mask_exempt_card_covid-19_en.png',
        }}
        style={styles.notice_card}
      />

      {restaurantList.length ? (
        <Text style={styles.discover_heading}>Discover places nearby</Text>
      ) : null}
      <FlatList
        contentContainerStyle={styles.list_wrapper}
        data={restaurantList}
        renderItem={({item}) => {
          return <RestaurantPreview {...item} onPress={() => {}} />;
        }}
        ListEmptyComponent={
          <Text style={styles.not_available_text}>
            No Restaurants available! Are you on Mars?
          </Text>
        }
      />

      {restaurantList.length > 0 && (
        <View style={styles.bottom_text_wrapper}>
          <Text
            onPress={() => {
              if (currentId) {
                navigation.navigate('Restaurants', {
                  cityId: currentId,
                });
              }
            }}
            style={styles.bottom_text}>
            View All
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
