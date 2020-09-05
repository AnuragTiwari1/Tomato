import * as React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {LocationInput} from './components/LocationInput.component';
import {useNavigation} from '@react-navigation/native';
import {Loader} from '../../common/Loader';
import useCurrentLatLong from '../../hooks/useLatLong';
import {getRestaurantByLatLong} from '../../services/restaurants';
import {IRestaurantPreview} from '../../interfaces/restaurants';
import {Toolbar} from './components/Toolbar';
import {TOMATO_LOGO} from '../../assets';
import {styles} from './landing.styles';
import {SharedElement} from 'react-navigation-shared-element';
import {RestaurantPreview} from './components/RestaurantPreviewCard';

const HomeScreen = () => {
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
        <Text style={{marginVertical: '1%'}}>Discover places nearby</Text>
      ) : null}
      <FlatList
        contentContainerStyle={styles.list_wrapper}
        data={restaurantList}
        renderItem={({item}) => {
          return <RestaurantPreview {...item} onPress={() => {}} />;
        }}
        ListEmptyComponent={
          <Text style={{textAlign: 'center'}}>
            No Restaurants available! Are you on Mars?
          </Text>
        }
      />

      <View style={styles.bottom_text_wrapper}>
        <Text
          onPress={() => navigation.navigate('Restaurants')}
          style={styles.bottom_text}>
          View All
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
