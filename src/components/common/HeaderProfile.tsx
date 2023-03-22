import { type FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  onClickLogout: () => void;
  onClickMenu: () => void;
  menuOpen: boolean;
}

const HeaderProfile: FC<Props> = ({ onClickLogout, menuOpen, onClickMenu }) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const navigate = useNavigate();

  const onMouseOut = (e: MouseEvent) => {
    if (menuRef.current !== null && !menuRef.current.contains(e.target as Node)) {
      onClickMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMouseOut);
    return () => {
      document.removeEventListener('mousedown', onMouseOut);
    };
  }, [menuOpen]);

  return (
    <ul ref={menuRef}>
      <li
        onClick={() => {
          onClickMenu();
          navigate('/user/mypage');
        }}
      >
        마이페이지
      </li>
      <li onClick={onClickLogout}>로그아웃</li>
    </ul>
  );
};

export default HeaderProfile;
