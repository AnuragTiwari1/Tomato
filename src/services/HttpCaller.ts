/**
 * fileName: HttpCaller.ts
 * Description: this is the api caller will provide additional config to the axios defaults
 */

import axios, {AxiosRequestConfig} from 'axios';
import {ZOMATO_API_KEY, BASE_URL} from '@env';

export class HttpCaller {
  private readonly axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'user-key': ZOMATO_API_KEY},
  });

  /**
   * get
   * this is the wrapper around original axios get method
   * @param {sting} url provide the url after the baseURL eg: '/someResource' for 'cooldomain.com/someResource'
   * @param {Object=} config this is the config object to override the axios default config
   */
  protected get(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get(url, config);
  }

  /**
   * post
   * this is the wrapper around original axios post method
   * @param {sting} url provide the url after the baseURL eg: '/someResource' for 'cooldomain.com/someResource'
   * @param {Object=} config this is the config object to override the axios default config
   */
  protected post(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.post(url, config);
  }
}
