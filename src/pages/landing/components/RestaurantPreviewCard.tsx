import React from 'react';
import {IRestaurantPreview} from '../../../interfaces/restaurants';
import {View, Image, Text} from 'react-native';

interface RestaurantPreviewProps extends IRestaurantPreview {
  onPress: () => void;
}

export const RestaurantPreview = (props: RestaurantPreviewProps) => {
  return (
    <View style={{marginVertical: 4}}>
      <Image
        source={{uri: props.thumb}}
        style={{width: '100%', height: 150, borderRadius: 5}}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          bottom: 4,
          flexDirection: 'row',
          padding: 4,
        }}>
        <Text style={{color: 'white'}}>{props.name}</Text>
      </View>
    </View>
  );
};
