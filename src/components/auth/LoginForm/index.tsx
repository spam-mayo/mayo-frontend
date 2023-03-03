import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { type LoginSchema, loginSchema } from '@/constants/schema/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/auth/Input';
import './index.scss';

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: LoginSchema) => alert(JSON.stringify(data));

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
          placeholder="비밃번호를 입력해주세요."
          error={errors.password?.message}
        />
        <button type="button">비밀번호 찾기</button>
        <button type="submit">로그인</button>
        <div className="row">
          <p>계정이 없으신가요?</p>
          <button type="button">회원가입</button>
        </div>
      </form>
    </div>
  );
};
