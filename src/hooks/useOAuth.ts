import { useLocation } from 'react-router-dom';

const useOAuth = () => {
  const location = useLocation();

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

  if (accessToken && refresh) {
    window.location.replace('/');
  } else {
    // 토큰 없다면 일반 회원가입으로 가입한 계정
    alert('이미 가입된 계정입니다. 가입된 이메일로 로그인해주세요.');
    window.location.replace('/auth/login');
  }
};

export default useOAuth;
