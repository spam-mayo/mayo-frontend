import { FC, useEffect, useRef } from 'react';

interface Props {
  onClickLogout: () => void;
  onClickGoMypage: () => void;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderProfile: FC<Props> = ({ onClickLogout, onClickGoMypage, setMenuOpen, menuOpen }) => {
  const menuRef = useRef<HTMLUListElement | null>(null);

  const onMouseOut = (e: MouseEvent) => {
    if (menuRef.current !== null && !menuRef.current.contains(e.target as Node)) {
      setMenuOpen(!menuOpen);
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
      <li onClick={onClickGoMypage}>마이페이지</li>
      <li onClick={onClickLogout}>로그아웃</li>
    </ul>
  );
};

export default HeaderProfile;
