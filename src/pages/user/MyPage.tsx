import { type FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';
import UserProfile from '@/components/mypage/UserProfile';
import ProfileEditModal from '@/components/modal/ProfileEditModal';
import './myPage.scss';
import { Outlet, useNavigate } from 'react-router-dom';

const tabs = [
  { name: '내 정보', path: '/user/mypage' },
  { name: '나의 스터디', path: '/user/mypage/study' },
  { name: '신청한 스터디', path: '/user/mypage/apply' },
  { name: '생성한 스터디', path: '/user/mypage/create' },
  { name: '관심 스터디', path: '/user/mypage/like' },
];

const MyPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('내 정보');

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
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  onClick={() => {
                    setCurrentTab(tab.name);
                    navigate(tab.path);
                  }}
                  className={tab.name === currentTab ? 'selected' : ''}
                >
                  {tab.name}
                </li>
              ))}
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
