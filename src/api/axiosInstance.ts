import axios, { AxiosRequestConfig } from 'axios';

/* baseURL은 .env 파일로 대체 예정 */
const config: AxiosRequestConfig = { baseURL: 'http://ec2-3-38-166-165.ap-northeast-2.compute.amazonaws.com:8080' };
const axiosInstance = axios.create(config);

const getAccessToken = () => {
  const accessToken = localStorage.getItem('authorization');
  return accessToken;
};

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  // 정상 응답처리
  (response) => {
    return response;
  },
  // 오류 발생시
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      //console.log('response interceptor status is 401 !');

      const originalRequest = config;
      const refresh = localStorage.getItem('refresh');
      // console.log(refresh, originalRequest);
      const http = axios.create({ headers: { Refresh: refresh } });
      const { headers } = await http.post(
        'http://ec2-3-38-166-165.ap-northeast-2.compute.amazonaws.com:8080/auth/token',
        {
          headers: { Refresh: refresh },
        }
      );
      //console.log('headers :', headers);
      localStorage.setItem('authorization', headers.authorization);
      const newAccessToken = headers.authorization;
      originalRequest.headers.Authorization = newAccessToken;

      return axiosInstance.request(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
