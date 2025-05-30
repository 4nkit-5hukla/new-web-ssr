import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const ApiRequest = axios.create({
  baseURL: process.env.API_URL,
  timeout: 15000,
});

export const apiRequest = async (
  url: string,
  method: string,
  config?: AxiosRequestConfig<any>
) => {
  const res = await ApiRequest({ url, method: method, ...config });
  return res.data;
};
