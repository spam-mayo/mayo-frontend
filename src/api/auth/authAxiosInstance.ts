import { axiosInstance } from 'src/api/axiosInstance';
import type { RegisterReq, EmailCheck, EmailCheckConfirm } from './types';

export const postMember = (body: RegisterReq) => axiosInstance.post('/user/join', body);

export const emailCheck = (body: EmailCheck) => axiosInstance.post('/auth/email', body);

export const emailCheckConfirm = (body: EmailCheckConfirm) => axiosInstance.post('/auth/email', body);
