import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { getLocalStorageItem, Key } from '@/utils/localStorage';

const API_METHOD = { GET: 'get', POST: 'post', PUT: 'put', PATCH: 'patch', DELETE: 'delete' };

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000
};

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem<string>(Key.authorization);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const api = {
  get: async <R>(config: AxiosRequestConfig) => {
    return await axiosInstance.request<R, AxiosResponse<R>, object>({ ...config, method: API_METHOD.GET });
  },
  post: async <R, Data>(config: AxiosRequestConfig) => {
    return await axiosInstance.request<R, AxiosResponse<R>, Data>({ ...config, method: API_METHOD.POST });
  }
};

export default api;
