import {searchRestaurant} from '../config/urls';
import {
  ISearchRestaurants,
  ISearchRestaurantsResponse,
  IGetRestaurantByLatLongProps,
  ILocation,
} from './IRestaurantsServices';
import {HttpCaller} from './HttpCaller';

export class RestaurantServices extends HttpCaller {
  /**
   * searchRestaurants
   * this method can be used to search the restaurants db of zomato.
   * @param {Object} searchParams
   */
  public searchRestaurants(
    params: ISearchRestaurants,
  ): ISearchRestaurantsResponse {
    const {id, start = 0, lat, lon} = params;
    return super.get(searchRestaurant, {
      params: {
        entity_type: 'city',
        entity_id: id,
        start,
        lat,
        lon,
      },
    });

  }

  /**
   * getRestaurantByLatLong
   * this method provides the restaurant by lat long
   * @param {Object} locationObject the location for which you want the restaurant list
   */
  public getRestaurantByLatLong(
    params: ILocation,
  ): IGetRestaurantByLatLongProps {
    const {lat, lon} = params;
    return super.get('/geocode', {
      params: {
        lat,
        lon,
      },
    });
  }

  /**
   * getRestaurantDetailsById
   * this method fetches the restaurant detail by id
   * @param {number} id the id of the restaurant to be fetched
   */
  public getRestaurantDetailsById(id: number) {
    return super.get('/restaurant', {
      params: {
        res_id: id,
      },
    });
  }
}
