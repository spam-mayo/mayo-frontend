import Button from '@/components/common/Button';
import { getUserById } from '@/api/auth/authAPI';
import { type FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import HeaderProfile from '@/components/common/HeaderProfile';
import UserProfileImg from '@/components/common/UserProfileImg';
import useAuth from '@/hooks/useAuth';

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout, userId, isLogin } = useAuth();

  const { data } = useQuery(['user', userId], () => getUserById(Number(userId)));

  const onClickLogout = () => {
    logout();
    setMenuOpen((prev) => !prev);
  };

  const onClickMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="innerLeft">
            <Link to="/">
              <img src="/spam.svg" alt="logo" className="logo" />
            </Link>
            <nav>
              <Link to="/">
                <Button color="blue" text>
                  스터디 찾기
                </Button>
              </Link>
              {isLogin && (
                <Link to="/user/mypage/study">
                  <Button color="blue" text>
                    나의 스터디
                  </Button>
                </Link>
              )}
            </nav>
          </div>
          <div className="innerRight">
            {isLogin && data ? (
              <>
                <div onClick={onClickMenuOpen}>
                  <UserProfileImg src={data?.data.profileUrl} />
                </div>
                {menuOpen && (
                  <HeaderProfile onClickLogout={onClickLogout} onClickMenu={onClickMenuOpen} menuOpen={menuOpen} />
                )}
              </>
            ) : (
              <>
                <Link to="/auth/login">
                  <Button color="gray" text>
                    로그인
                  </Button>
                </Link>
                <Link to="/auth/register">
                  <Button color="gray" text>
                    회원가입
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
