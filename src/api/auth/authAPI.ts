import axiosInstance from '@/api/axiosInstance';
import type {
  RegisterReq,
  EmailCheckReq,
  EmailCheckConfirmReq,
  LoginReq,
  PasswordFindReq,
  PasswordChangeReq,
  ProfileEditReq,
  UserInfoReq,
} from './types';

export const postMember = (body: RegisterReq) => axiosInstance.post('/api/users/join', body);

export const postEmailCheck = (body: EmailCheckReq) => axiosInstance.post('/api/auth/email', body);

export const postEmailCheckConfirm = (body: EmailCheckConfirmReq) =>
  axiosInstance.post('/api/auth/email/confirm', body);

export const postLogin = (body: LoginReq) => axiosInstance.post('/api/auth/login', body);

export const postPasswordFind = (body: PasswordFindReq) => axiosInstance.post('/api/auth/password', body);

export const getUserById = (userId: number) => axiosInstance.get(`/api/users/${userId}`);

export const postLogout = () => axiosInstance.post('/api/auth/logout');

export const patchPassword = ({ code, newPassword }: PasswordChangeReq) =>
  axiosInstance.patch(`/api/auth/password?authCode=${code}`, { newPassword });

export const patchProfileImage = ({ userId, image }: ProfileEditReq) =>
  axiosInstance.patch(`/api/users/${userId}/image`, image);

export const patchUserInfo = ({ userId, ...body }: UserInfoReq) => axiosInstance.patch(`/api/users/${userId}`, body);

export const deleteUser = (userId: number) => axiosInstance.delete(`api/users/${userId}`);
