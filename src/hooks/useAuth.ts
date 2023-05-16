import { postLogin, postLogout } from '@/api/auth/authAPI';
import { isLoginState, userIdState } from '@/atom/atom';
import { StorageKeys } from '@/constants/storageKeys';
import { initAuthStorage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const useAuth = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const navigate = useNavigate();

  const { mutate: login } = useMutation(postLogin, {
    onSuccess: ({ headers: { authorization, refresh }, data: { userId } }) => {
      localStorage.setItem(StorageKeys.AT, authorization);
      localStorage.setItem(StorageKeys.RT, refresh);
      setUserId(userId);
      setIsLogin(true);
      navigate('/');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    },
  });

  const { mutate: logout } = useMutation(postLogout, {
    onSuccess: () => {
      initAuthStorage();
      setUserId(null);
      setIsLogin(false);
      alert('로그아웃 되었습니다.');
      navigate('/');
    },
  });

  useEffect(() => {
    const token = localStorage.getItem(StorageKeys.AT);
    if (token) setIsLogin(true);
  }, []);

  return { login, logout, isLogin, userId };
};

export default useAuth;
