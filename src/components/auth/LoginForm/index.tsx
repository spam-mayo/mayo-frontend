import { useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { type LoginSchema, loginSchema } from '@/constants/schema/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import './index.scss';
import PasswordFindModal from '@/components/modal/PasswordFindModal';
import { Link } from 'react-router-dom';
import kakao from '@/assets/images/kakao3.jpeg';
import google from '@/assets/images/google3.png';
import OauthButton from '@/components/auth/OauthButton';
import Button from '@/components/common/Button';
import useAuth from '@/hooks/useAuth';
import CommonInput from '@/components/common/CommonInput';

const LoginForm: FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useAuth();

  const onClickCloseModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const onSubmit = (data: LoginSchema) => {
    login(data);
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
            <div className="social-auth">
              <OauthButton src={kakao} alt="kakao" href="kakao" />
              <OauthButton src={google} alt="google" href="google" />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6">
            <div className="auth">
              <CommonInput
                {...register('email')}
                type="emil"
                label="이메일"
                placeholder="이메일을 입력해주세요."
                error={errors.email?.message}
              />
              <CommonInput
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
