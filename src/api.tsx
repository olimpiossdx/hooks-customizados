import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export async function ApiServiceRequest<TViewModel>({ baseURL = 'http://localhost:3333', method = 'get', ...rest }: AxiosRequestConfig,
  setLoad: React.Dispatch<React.SetStateAction<boolean>>, setMessage: React.Dispatch<React.SetStateAction<boolean>>): Promise<TViewModel> {
  let counter = 0;
  const maxRetry = 2;
  setLoad(true);
  const api: AxiosInstance = axios.create({ baseURL });
  api.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (counter < maxRetry) {
      counter += 1;
      return new Promise((resolve) => resolve(api.request<TViewModel>({ ...rest, method })));
    };

    setLoad(false);
    setMessage(true);
    return Promise.reject(error);
  });

  const response = await api.request<TViewModel>({ ...rest, method }) as AxiosResponse<TViewModel>;
  return response.data;
};