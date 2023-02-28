import axios, { AxiosRequestConfig } from 'axios';

/* baseURL은 .env 파일로 대체 예정 */
const config: AxiosRequestConfig = { baseURL: 'https://jsonplaceholder.typicode.com' };
export const axiosInstance = axios.create(config);
