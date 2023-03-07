import { useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { type LoginSchema, loginSchema } from '@/constants/schema/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/auth/Input';
import './index.scss';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '@/api/auth/authAPI';
import axios from 'axios';
import { PasswordFindModal } from '@/components/modal/PasswordFindModal';
import { useNavigate } from 'react-router-dom';

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { mutate: loginMember } = useMutation(postLogin, {
    onSuccess: (res) => {
      const { data, headers } = res;
      alert('로그인 성공!');
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('authorization', headers.authorization);
      localStorage.setItem('refresh', headers.refresh);
      navigate('/');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    },
  });

  const [isModalOpened, setIsModalOpened] = useState(false);
  const navigate = useNavigate();

  const onClickCloseModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const onSubmit = (data: LoginSchema) => {
    loginMember(data);
  };

  return (
    <>
      {isModalOpened && <PasswordFindModal onClose={onClickCloseModal} />}
      <div className="loginContainer">
        <form onSubmit={handleSubmit(onSubmit)} className="loginFormContainer">
          <Input
            {...register('email')}
            type="emil"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            error={errors.email?.message}
          />
          <Input
            {...register('password')}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            error={errors.password?.message}
          />
          <button type="button" onClick={onClickCloseModal}>
            비밀번호 찾기
          </button>
          <button type="submit">로그인</button>
          <div className="row">
            <p>계정이 없으신가요?</p>
            <button type="button">회원가입</button>
          </div>
        </form>
      </div>
    </>
  );
};
