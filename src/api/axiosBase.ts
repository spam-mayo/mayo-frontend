import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const BASE_URL = 'https://spammayo.shop';
const config: AxiosRequestConfig = { baseURL: BASE_URL };
const axiosBase = axios.create(config);

export default axiosBase;
