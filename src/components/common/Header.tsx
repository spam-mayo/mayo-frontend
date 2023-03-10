import { postLogout } from '@/api/auth/authAPI';
import { type FC, useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import './style/common.scss';

const Header: FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      setIsLogin(true);
    }
  }, [userId, isLogin]);

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

  return (
    <>
      <div className="block">
        <div className="wrapper">
          <div className="innerLeft">
            <div>
              <img src="/public/spam.svg" alt="logo" className="logo" />
            </div>
            <div className="navigate">
              <Link to="/">
                <Button color="blue" text>
                  스터디 찾기
                </Button>
              </Link>
              <Button color="blue" text>
                나의 스터디
              </Button>
            </div>
          </div>
          <div className="innerRight">
            {isLogin ? (
              <Button color="gray" text onClick={onClickLogout}>
                로그아웃
              </Button>
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
      <div className="spacer"></div>
    </>
  );
};

export default Header;
