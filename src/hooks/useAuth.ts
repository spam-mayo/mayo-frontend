import { postLogin, postLogout } from '@/api/auth/authAPI';
import { StorageKeys } from '@/constants/storageKeys';
import { initAuthStorage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const navigate = useNavigate();

  const { mutate: login } = useMutation(postLogin, {
    onSuccess: ({ headers: { authorization, refresh }, data: { userId } }) => {
      localStorage.setItem(StorageKeys.AT, authorization);
      localStorage.setItem(StorageKeys.RT, refresh);
      localStorage.setItem(StorageKeys.UserID, userId);
      setUserId(Number(userId));
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
      alert('로그아웃 되었습니다.');
      navigate('/');
    },
  });

  useEffect(() => {
    const id = localStorage.getItem(StorageKeys.UserID);
    if (id !== null) {
      setUserId(Number(id));
    }
  }, [navigate]);

  return { login, logout, isLogin: Boolean(userId), userId };
};

export default useAuth;
