import { type FC, useState } from 'react';
import ProfileEditModal from '@/components/modal/ProfileEditModal';
import './myPage.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import UserProfile from '@/components/mypage/UserProfile';
import useUserDetailQuery from '@/queries/user/useUserDetailQuery';
import useUser from '@/hooks/useUser';

const rootPath = '/user/mypage';

const tabs = [
  { name: '내 정보', path: rootPath },
  { name: '나의 스터디', path: `${rootPath}/study` },
  { name: '신청한 스터디', path: `${rootPath}/apply` },
  { name: '생성한 스터디', path: `${rootPath}/create` },
  { name: '관심 스터디', path: `${rootPath}/like` },
];

const MyPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();
  const { data } = useUserDetailQuery();
  const { userProfile } = useUser();

  const onClickOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="container box">
        <div className="row">
          <div className="col-lg-3 column">
            <UserProfile src={userProfile} name={data?.userName ?? ''} onClick={onClickOpenModal} />
            <ul className="tab-container">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  onClick={() => {
                    navigate(tab.path);
                  }}
                  className={classNames({ selected: tab.path === pathname })}
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
      {isModalOpen && <ProfileEditModal onClose={onClickOpenModal} src={userProfile} />}
    </>
  );
};

export default MyPage;
