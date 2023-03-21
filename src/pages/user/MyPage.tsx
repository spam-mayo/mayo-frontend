import { type FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';
import UserProfile from '@/components/mypage/UserProfile';
import ProfileEditModal from '@/components/modal/ProfileEditModal';
import './myPage.scss';
import { Outlet, useNavigate } from 'react-router-dom';

const tabs = [
  { index: 0, name: '내 정보', navigate: '/user/mypage/info' },
  { index: 1, name: '나의 스터디', navigate: '/user/mypage/study' },
  { index: 2, name: '신청한 스터디', navigate: '/user/mypage/apply' },
  { index: 3, name: '생성한 스터디', navigate: '/user/mypage/create' },
  { index: 4, name: '관심 스터디', navigate: '/user/mypage/like' },
];

const MyPage: FC = () => {
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
  const navigate = useNavigate();

  return (
    <>
      {isModalOpen && <ProfileEditModal onClose={onClickOpenModal} src={data?.data.profileUrl} />}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 box">
            <UserProfile
              src={data?.data.profileUrl}
              alt="profile"
              name={data?.data.userName}
              onClick={onClickOpenModal}
            />
            <ul className="tab-container">
              {tabs.map((tab, idx) => {
                return (
                  <li
                    key={tab.index}
                    onClick={() => {
                      setCurrentTab(idx);
                      navigate(tab.navigate);
                    }}
                    className={idx === currentTab ? 'selected' : ''}
                  >
                    {tab.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
