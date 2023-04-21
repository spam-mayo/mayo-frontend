import { StorageKeys } from '@/constants/storageKeys';
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
    localStorage.setItem(StorageKeys.AT, authorization);
    localStorage.setItem(StorageKeys.RT, refresh);
    localStorage.setItem(StorageKeys.UserID, userId);
    // 소셜로그인 했을경우 비밀번호 변경이 불가능하기 때문에 소셜 로그인으로 진행한 경우 구분을 위해 추가 저장
    localStorage.setItem(StorageKeys.OAuth, 'true');
  }

  if (refresh) {
    window.location.replace('/');
  } else {
    // 토큰 없다면 일반 회원가입으로 가입한 계정
    alert('이미 가입된 계정입니다. 가입된 이메일로 로그인해주세요.');
    window.location.replace('/auth/login');
  }
};

export default useOAuth;
