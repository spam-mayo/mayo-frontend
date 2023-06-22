import { type FC, useState } from 'react';
import ProfileEditModal from '@/components/modal/ProfileEditModal';
import './myPage.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import UserProfile from '@/components/mypage/UserProfile';
import { useRecoilValue } from 'recoil';
import { userState } from '@/atom/atom';
import useUserDetailQuery from '@/queries/user/useUserDetailQuery';

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
  const user = useRecoilValue(userState);
  const { data } = useUserDetailQuery();

  const onClickOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      {isModalOpen && <ProfileEditModal onClose={onClickOpenModal} src={user.profileUrl} />}
      <div className="container box">
        <div className="row">
          <div className="col-lg-3 column">
            <UserProfile src={user.profileUrl} name={data?.userName ?? ''} onClick={onClickOpenModal} />
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
    </>
  );
};

export default MyPage;
