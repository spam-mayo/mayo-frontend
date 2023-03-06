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
