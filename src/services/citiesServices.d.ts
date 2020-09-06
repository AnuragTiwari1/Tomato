import {AxiosResponse} from 'axios';
import {PlacesSuggestion} from '../interfaces/placesSuggestions';

export type IGetCitySuggestions = Promise<
  AxiosResponse<{location_suggestions: PlacesSuggestion[]}>
>;
