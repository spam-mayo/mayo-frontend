import axios, { AxiosRequestConfig } from 'axios';

/* baseURL은 .env 파일로 대체 예정 */
const config: AxiosRequestConfig = { baseURL: 'http://ec2-3-38-166-165.ap-northeast-2.compute.amazonaws.com:8080' };
export const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authorization');

  try {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      //console.log(`토큰 있어용 ~ ${token}`);
    }
  } catch (err) {
    //console.log(err);
  }

  return config;
});
