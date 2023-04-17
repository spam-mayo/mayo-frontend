import Button from '@/components/common/Button';
import { getUserById, postLogout } from '@/api/auth/authAPI';
import { type FC, useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import HeaderProfile from '@/components/common/HeaderProfile';
import UserProfileImg from '@/components/common/UserProfileImg';

const Header: FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const userId = localStorage.getItem('userId');

  const { data } = useQuery(['user', userId], () => getUserById(Number(userId)));

  useEffect(() => {
    if (userId) {
      setIsLogin(true);
    }
  }, [userId]);

  const { mutate: logout } = useMutation(postLogout, {
    onSuccess: () => {
      localStorage.clear();
      setIsLogin(false);
      alert('로그아웃 완료!');
      navigate('/');
    },
  });

  const navigate = useNavigate();

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
            {isLogin ? (
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
