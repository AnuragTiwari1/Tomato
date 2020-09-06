import {ApiCaller} from '../common/ApiCaller';
import {searchRestaurant} from '../config/urls';
import {
  ISearchRestaurants,
  ISearchRestaurantsResponse,
  IGetRestaurantByLatLongProps,
  ILocation,
} from './restaurantsServices';

export const searchRestaurants = (
  params: ISearchRestaurants,
): ISearchRestaurantsResponse => {
  const {id, start = 0, lat, lon} = params;
  return ApiCaller.get(searchRestaurant, {
    params: {
      entity_type: 'city',
      entity_id: id,
      start,
      lat,
      lon,
    },
  });
};

export const getRestaurantByLatLong = (
  params: ILocation,
): IGetRestaurantByLatLongProps => {
  const {lat, lon} = params;
  return ApiCaller.get('/geocode', {
    params: {
      lat,
      lon,
    },
  });
};

export const getRestaurantDetailsById = (id: number) => {
  return ApiCaller.get('/restaurant', {
    params: {
      res_id: id,
    },
  });
};
