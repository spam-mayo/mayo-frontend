import { axiosInstance } from 'src/api/axiosInstance';
import type { RegisterReq, EmailCheckReq, EmailCheckConfirmReq, LoginReq, PasswordFindReq } from './types';

export const postMember = (body: RegisterReq) => axiosInstance.post('/user/join', body);

export const postEmailCheck = (body: EmailCheckReq) => axiosInstance.post('/auth/email', body);

export const postEmailCheckConfirm = (body: EmailCheckConfirmReq) => axiosInstance.post('/auth/email/confirm', body);

export const postLogin = (body: LoginReq) => axiosInstance.post('/login', body);

export const postPasswordFind = (body: PasswordFindReq) => axiosInstance.post('/auth/email/password', body);
