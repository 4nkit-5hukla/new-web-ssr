import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiResponse } from 'root/types/api';

const ApiRequest = axios.create({
  baseURL: process.env.API_URL,
  timeout: 15000,
});

export const apiRequest = async <T = any>(
  url: string,
  method: string,
  config?: AxiosRequestConfig<any>
): Promise<ApiResponse<T>> => {
  const res = await ApiRequest({ url, method: method, ...config });
  return res.data;
};
