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
  userId: number;
  image?: FormData;
}

export interface UserInfoReq {
  userId: number;
  userName?: string;
  password?: string;
  field?: string;
  userStacks?: string[];
}

export type Stack = {
  stackId: number;
  stackName: string;
};

export interface GetUserRes {
  userId: number;
  userName: string;
  email: string;
  profileUrl: string;
  field: string;
  stack: Stack[];
}
