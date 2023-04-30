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

  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
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
    // access token 만료시
    if ([403, 401, 421].includes(status)) {
      const originalRequest = config;
      try {
        const refresh = localStorage.getItem('refresh');

        const { headers } = await axios.post(
          `${BASE_URL}/api/auth/token`,
          {},
          {
            headers: { Refresh: refresh },
          }
        );

        localStorage.setItem('authorization', headers.authorization);
        const newAccessToken = headers.authorization;
        originalRequest.headers.Authorization = newAccessToken;

        return axiosInstance.request(originalRequest);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 400) {
            alert('엑세스 토큰값이 잘못되었습니다.');
          }
          if (err.response?.status === 421) {
            alert('세션이 만료되었습니다. 다시 로그아웃 해주세요.');
            localStorage.clear();
            postLogout();
            // window.location.href('/');
          }
        }
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
