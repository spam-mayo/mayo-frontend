import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onClickLogout: () => void;
}

const HeaderProfile: FC<Props> = ({ onClickLogout }) => {
  const navigate = useNavigate();
  return (
    <ul>
      <li onClick={() => navigate('/user/mypage')}>마이페이지</li>
      <li onClick={onClickLogout}>로그아웃</li>
    </ul>
  );
};

export default HeaderProfile;
