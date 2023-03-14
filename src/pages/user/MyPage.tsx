import type { FC } from 'react';
//import { useQuery } from '@tanstack/react-query';
//import { getUserById } from '@/api/auth/authAPI';
import UserProfile from '@/components/mypage/UserProfile';
import UserInfo from '@/components/mypage/UserInfo/UserInfo';
import sample from '@/assets/images/sample.jpeg';

const MyPage: FC = () => {
  // const userId = localStorage.getItem('userId');

  // if (!userId) {
  //   throw new Error('no user');
  // }
  // const { data } = useQuery(['user', userId], () => getUserById(Number(userId)));

  return (
    <div className="container">
      <div className="row">
        {/* <UserProfile userName={data?.data.userName} profileUrl={data?.data.profileUrl} />
      <UserInfo
        userName={data?.data.userName}
        email={data?.data.email}
        field={data?.data.field}
        stack={data?.data.stack}
      /> */}

        <div className="col-lg-3">
          <UserProfile src={sample} alt="profile" name="김현정" />
        </div>

        <div className="col-lg-9">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
