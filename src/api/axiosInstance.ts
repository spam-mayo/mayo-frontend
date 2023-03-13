import axios, { AxiosRequestConfig } from 'axios';
import { postLogout } from '@/api/auth/authAPI';

/* baseURL은 .env 파일로 대체 예정 */
const BASE_URL = 'https://spammayo.shop';
const config: AxiosRequestConfig = { baseURL: BASE_URL };
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
    if (status === 421) {
      const originalRequest = config;
      const refresh = localStorage.getItem('refresh');

      const { headers, data } = await axios.post(
        `${BASE_URL}/api/auth/token`,
        {},
        {
          headers: { Refresh: refresh },
        }
      );
      // 엑세스토큰 오류
      if (data.status === 400) {
        alert('엑세스 토큰 값이 잘못되었습니다.');
      } else if (data.status === 421) {
        // 리프레시 토큰 만료
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        postLogout();
        localStorage.removeItem('userId');
        localStorage.removeItem('authorization');
        localStorage.removeItem('refresh');
      }

      localStorage.setItem('authorization', headers.authorization);
      const newAccessToken = headers.authorization;
      originalRequest.headers.Authorization = newAccessToken;

      return axiosInstance.request(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
