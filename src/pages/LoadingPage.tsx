import { type FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingPage: FC = () => {
  const location = useLocation();

  useEffect(() => {
    const getURLSearchParams = (key: string) => {
      return new URLSearchParams(location.search).get(key);
    };

    const authorization = getURLSearchParams('accessToken');
    const refresh = getURLSearchParams('refreshToken');
    const userId = getURLSearchParams('userId');

    if (authorization && refresh && userId) {
      localStorage.setItem('authorization', authorization);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('userId', userId);
    }
    const accessToken = localStorage.getItem('authorization');
    if (accessToken) {
      window.location.replace('/');
    } else {
      alert('이미 가입된 계정입니다. 가입된 이메일로 로그인해주세요.');
      window.location.replace('/auth/login');
    }
  }, []);

  return <div>로딩중...</div>;
};

export default LoadingPage;
