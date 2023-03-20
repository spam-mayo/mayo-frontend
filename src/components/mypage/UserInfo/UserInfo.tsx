import { getUserById } from '@/api/auth/authAPI';
import PasswordInfo from '@/components/mypage/UserInfo/PasswordInfo';
import UserInfoBox from '@/components/mypage/UserInfo/UserInfoBox';
import { useQuery } from '@tanstack/react-query';

const UserInfo = () => {
  const userId = localStorage.getItem('userId');

  if (!userId) {
    throw new Error('no user');
  }

  const { data } = useQuery(['user', userId], () => getUserById(Number(userId)));
  return (
    <div className="study-container">
      <UserInfoBox name={data?.data.userName} email={data?.data.email} />
      <PasswordInfo />
      <div>
        <p>회원 탈퇴</p>
      </div>
    </div>
  );
};

export default UserInfo;
