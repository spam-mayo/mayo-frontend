import { axiosInstance } from 'src/api/axiosInstance';
import type { RegisterReq, EmailCheckReq, EmailCheckConfirmReq, LoginReq, PasswordCheckReq } from './types';
import type { PasswordChangeSchema } from '@/constants/schema/passwordChangeSchema';

export const postMember = (body: RegisterReq) => axiosInstance.post('/user/join', body);

export const postEmailCheck = (body: EmailCheckReq) => axiosInstance.post('/auth/email', body);

export const postEmailCheckConfirm = (body: EmailCheckConfirmReq) => axiosInstance.post('/auth/email/confirm', body);

export const postLogin = (body: LoginReq) => axiosInstance.post('/login', body);

export const postPasswordCheck = (body: PasswordCheckReq) => axiosInstance.post('/auth/email/password', body);

export const postPasswordChange = (body: PasswordChangeSchema) =>
  axiosInstance.post(`/auth/password/${auth - num}`, body);
