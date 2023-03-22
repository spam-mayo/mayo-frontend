import { type FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';
import UserProfile from '@/components/mypage/UserProfile';
import ProfileEditModal from '@/components/modal/ProfileEditModal';
import ApplyStudy from '@/components/mypage/ApplyStudy';
import CreateStudy from '@/components/mypage/CreateStudy';
import InterestStudy from '@/components/mypage/InterestStudy';
import MyStudy from '@/components/mypage/MyStudy';
import UserInfo from '@/components/mypage/UserInfo/UserInfo';
import './myPage.scss';

const tabs = [
  { index: 0, name: '내 정보', content: <UserInfo /> },
  { index: 1, name: '나의 스터디', content: <MyStudy /> },
  { index: 2, name: '신청한 스터디', content: <ApplyStudy /> },
  { index: 3, name: '생성한 스터디', content: <CreateStudy /> },
  { index: 4, name: '관심 스터디', content: <InterestStudy /> },
];

const MyPage: FC = () => {
  const BASE_PROFILE_URL = 'https://spam-image.s3.ap-northeast-2.amazonaws.com/basic.png';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const userId = localStorage.getItem('userId');

  if (!userId) {
    throw new Error('no user');
  }

  const { data } = useQuery(['user', userId], () => getUserById(Number(userId)));

  const onClickOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <ProfileEditModal onClose={onClickOpenModal} src={data?.data.profileUrl ?? BASE_PROFILE_URL} />}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 box">
            <UserProfile
              src={data?.data.profileUrl ?? BASE_PROFILE_URL}
              alt="profile"
              name={data?.data.userName ?? ''}
              onClick={onClickOpenModal}
            />
            <ul className="tab-container">
              {tabs.map((tab, idx) => {
                return (
                  <li
                    key={tab.index}
                    onClick={() => setCurrentTab(idx)}
                    className={idx === currentTab ? 'selected' : ''}
                  >
                    {tab.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-9">{tabs[currentTab].content}</div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
