// import type { LoginReq, RegisterReq } from '@/api/auth/types';
// import axiosInstance from '@/api/axiosInstance';
// import axios from 'axios';

// interface useAuth {
//   login: (props: LoginReq) => Promise<void>;
//   register: (props: RegisterReq) => Promise<void>;
//   logout: () => Promise<void>;
// }

// export const useAuth = (): useAuth => {
//   const authServerCall = async (urlEndpoint: string, inputData: LoginReq | RegisterReq): Promise<void> => {
//     try {
//       const { data, status } = await axiosInstance({
//         url: urlEndpoint,
//         method: 'POST',
//         data: inputData,
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (status === 401) {
//         const title = 'message' in data ? data.message : 'Unauthorized';
//         alert({ title, status: 'warning' });
//         return;
//       }

//       if ('myInfo' in data && 'accessToken' in data) {
//         alert('로그인 되었습니다.');
//       }
//     } catch (err) {
//       if (axios.isAxiosError(err)) {
//         console.log('useAuthErr :', err);
//       }
//     }
//   };

//   const login = async (loginData: LoginReq) => {
//     await authServerCall('/login', loginData);
//     //console.log('login :', data);
//   };

//   const register = async (registerData: RegisterReq) => {
//     await authServerCall('/user/join', registerData);
//   };

//   const logout = async () => {
//     await logOutApi();
//   };

//   return { login, register, logout };
// };
