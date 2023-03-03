import { axiosInstance } from 'src/api/axiosInstance';
import type { RegisterReq, EmailCheckReq, EmailCheckConfirmReq } from './types';

export const postMember = (body: RegisterReq) => axiosInstance.post('/user/join', body);

export const postEmailCheck = (body: EmailCheckReq) => axiosInstance.post('/auth/email', body);

export const postEmailCheckConfirm = (body: EmailCheckConfirmReq) => axiosInstance.post('/auth/email/confirm', body);
