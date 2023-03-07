import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';

interface Props {
  userName: string;
  profileUrl: string;
  email: string;
  field: string;
  stack: [];
}

export const Mypage: FC<Props> = () => {
  const userId = localStorage.getItem('userId');

  if (!userId) {
    throw new Error('no user');
  }
  const { data } = useQuery(['user', userId], () => getUserById(userId));

  return (
    <div>
      <div>마이페이지</div>
      <p>{data?.data.userId}</p>
      <p>{data?.data.userName}</p>
      <p>{data?.data.email}</p>
      <p>{data?.data.field}</p>
      <p>{data?.data.profileUrl}</p>
    </div>
  );
};
