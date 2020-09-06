import {AxiosResponse} from 'axios';
import {IRestaurantPreview} from '../interfaces/restaurants';

export interface ILocation {
  lat: number;
  lon: number;
}

export interface ISearchRestaurants extends Partial<ILocation> {
  id?: number;
  start?: number;
}

export type ISearchRestaurantsResponse = Promise<
  AxiosResponse<{restaurants: {restaurant: IRestaurantPreview}[]}>
>;

export type IGetRestaurantByLatLongProps = Promise<
  AxiosResponse<{
    nearby_restaurants: {restaurant: IRestaurantPreview}[];
    location: {city_id: number};
  }>
>;
