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
