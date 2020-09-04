import {ApiCaller} from '../common/ApiCaller';
import {searchRestaurant} from '../config/urls';
import {AxiosResponse} from 'axios';
import {IRestaurantPreview} from '../interfaces/resturants';

export const getRestaurantByCity = ({
  lat,
  lon,
  q,
}: {
  lat?: number;
  lon?: number;
  q?: string;
}): Promise<AxiosResponse<{restaurants: IRestaurantPreview[]}>> => {
  return ApiCaller.get(searchRestaurant, {
    params: {
      entity_type: 'city',
      lat,
      lon,
      q,
    },
  });
};
