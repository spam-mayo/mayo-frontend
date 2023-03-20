import { FC, useEffect, useRef } from 'react';

interface Props {
  onClickLogout: () => void;
  onClickGoMypage: () => void;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderProfile: FC<Props> = ({ onClickLogout, onClickGoMypage, setMenuOpen }) => {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  const handlerOutsie = (e: MouseEvent) => {
    if (listRef.current !== null && !listRef.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  return (
    <ul ref={listRef}>
      <li onClick={onClickGoMypage}>마이페이지</li>
      <li onClick={onClickLogout}>로그아웃</li>
    </ul>
  );
};

export default HeaderProfile;
