import {AxiosResponse} from 'axios';
import {PlacesSuggestion} from '../interfaces/IPlacesSuggestions';

export type IGetCitySuggestions = Promise<
  AxiosResponse<{location_suggestions: PlacesSuggestion[]}>
>;
