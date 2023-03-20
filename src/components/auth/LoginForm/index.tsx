import { useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { type LoginSchema, loginSchema } from '@/constants/schema/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/common/Input';
import './index.scss';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '@/api/auth/authAPI';
import axios from 'axios';
import PasswordFindModal from '@/components/modal/PasswordFindModal';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';

const LoginForm: FC = () => {
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
        if (err.response?.status === 400) alert('아이디 또는 비밀번호가 일치하지 않습니다.');
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
      <div className="container">
        <div className="row auth-container">
          <div className="col-lg-6 info">
            <h1>로그인</h1>
            <p>환영합니다!</p>
            <p>스터디 패밀리에서 함께 할 친구를 찾아봐요!</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6">
            <div className="auth">
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
              <button type="button" onClick={onClickCloseModal} className="underline">
                비밀번호 찾기
              </button>
              <Button size="large" color="yellow" type="submit">
                로그인
              </Button>
              <div className="btnRow">
                <p>계정이 없으신가요?</p>
                <Link to="/auth/register">
                  <button type="button" className="underline">
                    회원가입
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
