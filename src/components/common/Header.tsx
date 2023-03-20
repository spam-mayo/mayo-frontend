import Button from '@/components/common/Button';
import { getUserById, postLogout } from '@/api/auth/authAPI';
import { type FC, useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import HeaderProfile from '@/components/common/HeaderProfile';

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
      localStorage.removeItem('userId');
      localStorage.removeItem('authorization');
      localStorage.removeItem('refresh');
      setIsLogin(false);
      alert('로그아웃 완료!');
      navigate('/');
    },
  });

  const navigate = useNavigate();

  const onClickLogout = () => {
    logout();
  };

  const onClickMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="innerLeft">
            <div>
              <img src="/spam.svg" alt="logo" className="logo" />
            </div>
            <nav>
              <Link to="/">
                <Button color="blue" text>
                  스터디 찾기
                </Button>
              </Link>
              <Button color="blue" text>
                나의 스터디
              </Button>
            </nav>
          </div>
          <div className="innerRight">
            {isLogin ? (
              <>
                <div onClick={onClickMenuOpen}>
                  <img alt="userProfile" src={data?.data.profileUrl} />
                </div>
                {menuOpen && <HeaderProfile onClickLogout={onClickLogout} />}
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
