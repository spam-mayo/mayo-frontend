// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { getUserById } from '@/api/auth/authAPI';
// import type { getUserRes } from '@/api/auth/types';

// export const useUser = (): UseUser => {
//   const queryclient = useQueryClient();

//   const userId = localStorage.getItem('userId');

//   const { data: user } = useQuery<getUserRes>(['user', userId], () => getUserById(user), {
//     initialData: getStoredUser,
//     onSuccess: (received: User | null) => {
//       if (!received) {
//         clearStoredUser();
//       } else {
//         sestStoredUser(received);
//       }
//     },
//   });

//   const updateUser = (newUser: User) => {
//     queryclient.setQueryData(['user'], newUser);
//   };

//   const clearUser = () => {
//     queryclient.setQueryData(['user'], null);
//   };

//   return { user, updateUser, clearUser };
// };

// const getUser = async (user: User | null): Promise<User | null> => {
//   if (!user) return null;
//   const { data }: AxiosResponse<{ user: User }> = await axiosInstance.get(`/user/${user.id}`);
//   return data.user;
// };

// // index.ts
// const getStoredUser = (): User | null => {
//   // 유저정보 저장 ?
//   const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
//   return storedUser ? JSON.parse(storedUser) : null;
// };

// // 초기 데이터의 값을 getStoredUser 로 설정 => res.data 를 아예 넣어서?
