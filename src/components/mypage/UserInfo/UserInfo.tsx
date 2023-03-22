import { getUserById } from '@/api/auth/authAPI';
import BasicInfo from '@/components/mypage/UserInfo/BasicInfo';
import ExtraInfo from '@/components/mypage/UserInfo/ExtraInfo';
import PasswordInfo from '@/components/mypage/UserInfo/PasswordInfo';
import { useQuery } from '@tanstack/react-query';
import './userInfo.scss';

const UserInfo = () => {
  const userId = localStorage.getItem('userId');

  if (!userId) {
    throw new Error('no user');
  }

  const { data } = useQuery(['user', userId], () => getUserById(Number(userId)), {
    select: (data) => data.data,
  });

  const userName = data?.userName ?? '';
  const email = data?.email ?? '';
  const field = data?.field ?? '';
  const stack = data?.stack ?? [];

  return (
    <div className="user-container">
      <BasicInfo name={userName} email={email} userId={userId} />
      <ExtraInfo field={field} stack={stack} />
      <PasswordInfo userId={userId} />
      <div className="unregister">회원 탈퇴</div>
    </div>
  );
};

export default UserInfo;
