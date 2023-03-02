export interface RegisterReq {
  userName: string;
  email: string;
  password: string;
  field?: string;
}

export interface EmailCheckReq {
  email: string;
}

export interface EmailCheckConfirmReq {
  email: string;
  authCode: string;
}
