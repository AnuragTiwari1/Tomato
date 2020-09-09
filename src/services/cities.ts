import {IGetCitySuggestions} from './ICitiesServices';
import {HttpCaller} from './HttpCaller';

export class CitiesServices extends HttpCaller {
  /**
   * getCitySuggestions
   * this method gives the autocomplete suggestions for city name and id according to the query string
   * @param {string} queryString  the will be used to query the cities in zomato database
   */
  public getCitySuggestions(queryString: string): IGetCitySuggestions {
    return super.get('/cities', {
      params: {
        q: queryString,
      },
    });
  }
}
