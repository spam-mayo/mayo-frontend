import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';
import { UserProfile } from '@/components/mypage/userprofile';
import { UserInfo } from '@/components/mypage/userinfo';

export const Mypage: FC = () => {
  const userId = localStorage.getItem('userId');

  if (!userId) {
    throw new Error('no user');
  }
  const { data } = useQuery(['user', userId], () => getUserById(Number(userId)));

  return (
    <div>
      <div>마이페이지</div>
      <UserProfile userName={data?.data.userName} profileUrl={data?.data.profileUrl} />
      <UserInfo
        userName={data?.data.userName}
        email={data?.data.email}
        field={data?.data.field}
        stack={data?.data.stack}
      />
    </div>
  );
};
