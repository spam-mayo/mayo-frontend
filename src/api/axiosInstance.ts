import axios, { AxiosRequestConfig } from 'axios';

/* baseURL은 .env 파일로 대체 예정 */
const config: AxiosRequestConfig = { baseURL: 'http://ec2-3-38-166-165.ap-northeast-2.compute.amazonaws.com:8080' };
const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authorization');

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default axiosInstance;
