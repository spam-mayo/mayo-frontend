import axios, { AxiosRequestConfig } from 'axios';

/* baseURL은 .env 파일로 대체 예정 */
const config: AxiosRequestConfig = { baseURL: 'http://ec2-3-38-166-165.ap-northeast-2.compute.amazonaws.com:8080' };
const axiosInstance = axios.create(config);

const getAccessToken = () => {
  const accessToken = localStorage.getItem('authorization');
  return accessToken;
};

// 토큰을 안에서 받지 않고, 밖에서 받아오는 방법으로 수정 필요
axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

// 토근 예외 : 잘못된 토근 값 / 만료된 refresh token 값
axios.interceptors.response.use(
  (response) => {
    //console.log('refresh 재발급 요청 :', response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    //console.log('error :', error);
    if (status === 401) {
      if (error.response.data.message === 'UnAuthorized') {
        const originalRequest = config;
        const refreshToken = localStorage.getItem('refresh');
        // token refresh 요청
        const { data } = await axios.post(
          'http://ec2-3-38-166-165.ap-northeast-2.compute.amazonaws.com:8080/auth/token',
          refreshToken
        );
        //console.log('data :', data);
        // 새로운 accessToken, refreshToken 저장
        const { Authorization, refresh } = data.headers;
        localStorage.setItem('authorization', Authorization);
        localStorage.setItem('Refresh', refresh);
        // 재발급받은 accessToken 헤더에 넣어 재요청
        axios.defaults.headers.common.Authorization = Authorization;
        originalRequest.headers.Authorization = Authorization;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
