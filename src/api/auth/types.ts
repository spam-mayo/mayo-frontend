export interface RegisterReq {
  userName: string;
  email: string;
  password: string;
  field?: string;
}

export interface EmailCheckReq {
  email: string;
}

export interface EmailCheckConfirmReq extends EmailCheckReq {
  authCode: string;
}

export interface LoginReq {
  email: string;
  password: string;
}

export type PasswordFindReq = EmailCheckReq;

export interface PasswordChangeReq {
  newPassword: string;
  code: string;
}

export interface ProfileEditReq {
  userId: string;
  image?: FormData;
}

type UserStack = { stackId: string };

export interface UserInfoReq {
  userId: string;
  userName?: string;
  password?: string;
  field?: string;
  userStacks?: UserStack[];
}
