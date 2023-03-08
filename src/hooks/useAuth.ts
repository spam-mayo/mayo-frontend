// import type { LoginReq, RegisterReq } from '@/api/auth/types';
// import { axiosInstance } from '@/api/axiosInstance';
// import axios, { AxiosResponse } from 'axios';

// interface useAuth {
//   login: (props: LoginReq) => Promise<void>;
//   signUp: (props: RegisterReq) => Promise<void>;
//   logout: () => Promise<void>;
// }

// export const useAuth = (): useAuth => {
//   const authServerCall = async (urlEndpoint: string, inputData: LogInData | SignupData): Promise<void> => {
//     try {
//       const { data, status } = await axiosInstance({
//         url: urlEndpoint,
//         method: 'POST',
//         data: inputData,
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (status === 400) {
//         const title = 'message' in data ? data.message : 'Unauthorized';
//         alert({ title, status: 'warning' });
//         return;
//       }

//       if ('myInfo' in data && 'accessToken' in data) {
//         alert('로그인 되었습니다.');
//         setAccessTokenInAxiosHeader(data.accessToken);
//       }
//     } catch (err) {
//       if (axios.isAxiosError(err)) {
//         console.log(err);
//       }
//     }
//   };

//   const login = async (loginData: LogInData): Promise<void> => {
//     await authServerCall('/auth/login', loginData);
//   };

//   const signup = async (signupData: SignupData): Promise<void> => {
//     await authServerCall('/auth/register', signupData);
//   };

//   const logout = async (): Promise<void> => {
//     await logOutApi();
//   };

//   return { login, signup, logout };
// };

// export const setAccessTokenInAxiosHeader: (accessToken: string) => void = (accessToken: string) => {
//   axiosInstance.defaults.headers['x-access-token'] = accessToken;
// };
