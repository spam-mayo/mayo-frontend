import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { type LoginSchema, loginSchema } from '@/constants/schema/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/auth/Input';
import './index.scss';
import { useMutation } from '@tanstack/react-query';
import { postLogin, postPasswordCheck } from '@/api/auth/authAPI';
import axios from 'axios';

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { mutate: loginMember } = useMutation(postLogin, {
    onSuccess: () => {
      alert('로그인 성공!');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    },
  });

  const { mutate: passwordCheck } = useMutation(postPasswordCheck, {
    onSuccess: () => {
      alert('이메일로 비밀번호 변경링크를 전송했습니다. 유효시간은 10분 입니다.');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) alert('존재하지 않는 이메일입니다.');
      }
    },
  });

  const onClickPasswordCheck = () => {
    const body = { email: getValues('email') };
    passwordCheck(body);
  };

  const onSubmit = (data: LoginSchema) => {
    loginMember(data);
  };

  return (
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
        <button type="button" onClick={onClickPasswordCheck}>
          비밀번호 찾기
        </button>
        <button type="submit">로그인</button>
        <div className="row">
          <p>계정이 없으신가요?</p>
          <button type="button">회원가입</button>
        </div>
      </form>
    </div>
  );
};
