import axios from 'axios';
import {ZOMATO_API_KEY, BASE_URL} from '@env';

export const ApiCaller = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'user-key': ZOMATO_API_KEY},
});
