import React from 'react';
import {IRestaurantPreview} from '../../../interfaces/restaurants';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface RestaurantPreviewProps extends IRestaurantPreview {
  onPress: () => void;
}

export const RestaurantPreview = (props: RestaurantPreviewProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate('RestaurantDetails', {id: props.id})}>
      <Image
        source={{uri: props.thumb}}
        style={styles.image_card}
        resizeMode="cover"
      />
      <View style={styles.details_wrapper}>
        <Text style={styles.details_text}>{props.name}</Text>
        <Text
          style={
            styles.details_text
          }>{`${props.location.locality}, ${props.location.city}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginVertical: 4},
  image_card: {width: '100%', height: 150, borderRadius: 5},
  details_wrapper: {
    position: 'absolute',
    bottom: 4,
    flexDirection: 'row',
    padding: 4,
    width: '100%',
    justifyContent: 'space-between',
  },
  details_text: {
    color: 'white',
  },
});
