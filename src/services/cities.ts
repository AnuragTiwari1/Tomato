import {ApiCaller} from '../common/ApiCaller';
import {IGetCitySuggestions} from './citiesServices';

export const getCitySuggestions = (q: string): IGetCitySuggestions => {
  return ApiCaller.get('/cities', {
    params: {
      q: q,
    },
  });
};
