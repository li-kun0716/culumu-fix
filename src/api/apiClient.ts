import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import snakecaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';

import { getLocalStorageItem, Key, removeLocalStorageItem } from '@/utils/localStorage';
import { isClient } from '@/utils/isClient';

const API_METHOD = { GET: 'get', POST: 'post', PUT: 'put', PATCH: 'patch', DELETE: 'delete' };

export type ErrorResponse = { code: string; message?: string; details: string };

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  timeout: 5000
};

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem<string>(Key.authorization);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return {
      ...config,
      params: config.params && snakecaseKeys(config.params, { deep: true }),
      data: config.data && snakecaseKeys(config.data, { deep: true })
    };
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }
    return response;
  },
  (e) => {
    const { code, message, details } = e.response.data;
    if (isClient()) {
      removeLocalStorageItem(Key.authorization);
      window.location.href = window.location.origin + '/auth/login';
    }
    return Promise.reject<ErrorResponse>({ code: code ?? e.code, message, details });
  }
);

const get = async <R>(config: AxiosRequestConfig) => {
  return await axiosInstance.request<R, AxiosResponse<R>>({ ...config, method: API_METHOD.GET });
};

const post = async <R, Data>(config: AxiosRequestConfig) => {
  return await axiosInstance.request<R, AxiosResponse<R> & ErrorResponse, Data>({ ...config, method: API_METHOD.POST });
};

const put = async <R, Data>(config: AxiosRequestConfig) => {
  return await axiosInstance.request<R, AxiosResponse<R> & ErrorResponse, Data>({ ...config, method: API_METHOD.PUT });
};

const patch = async <R, Data>(config: AxiosRequestConfig) => {
  return await axiosInstance.request<R, AxiosResponse<R> & ErrorResponse, Data>({
    ...config,
    method: API_METHOD.PATCH
  });
};

const apiClient = { get, post, put, patch };

export default apiClient;
