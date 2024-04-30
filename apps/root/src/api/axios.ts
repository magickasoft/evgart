import axios from 'axios';

import {isPlainObject} from '../utils/isPlainObject';

const createAxiosInstance = (config = {}) => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true,
    responseType: 'json',
    transformRequest(data) {
      if (isPlainObject(data)) {
        return JSON.stringify(data);
      }

      return data;
    },
    ...config,
  });

  instance.interceptors.response.use(
    response => response,
    err => {
      if (!axios.isCancel(err)) {
        const {data, status} = err.response;
        throw new Error(`Error ${status}: ${JSON.stringify(data)}`);
      }
    },
  );

  return instance;
};

export const API = createAxiosInstance({baseURL: process.env.baseURL ?? '/api/'});
