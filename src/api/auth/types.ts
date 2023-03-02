export type RegisterReq = {
  userName: string;
  email: string;
  password: string;
  field?: string;
};

export type EmailCheck = {
  email: string;
};

export type EmailCheckConfirm = {
  email: string;
  authCode: string;
};
