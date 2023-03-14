import { type FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/components/auth/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import Select, { type SelectOption } from '@/components/auth/Select';
import './index.scss';
import { type RegisterSchema, registerSchema } from '@/constants/schema/registerSchema';
import { postEmailCheck, postEmailCheckConfirm, postMember } from '@/api/auth/authAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { RegisterReq } from '@/api/auth/types';
import { Link, useNavigate } from 'react-router-dom';
import kakao from '@/assets/images/kakao3.jpeg';
import google from '@/assets/images/google3.png';
import OauthIcon from '@/components/auth/OauthIcon';
import Button from '@/components/common/Button';
import ButtonInput from '@/components/auth/Input/ButtonInput';
import { postKakao } from '@/api/auth/authAPI';
import { postGoogle } from '@/api/auth/authAPI';

const categoryOption: SelectOption[] = [
  { label: '선택 안 함', value: 'nofield', id: 1 },
  { label: '프론트엔드', value: 'frontend', id: 2 },
  { label: '백엔드', value: 'backend', id: 3 },
  { label: '디자인', value: 'design', id: 4 },
  { label: '기획', value: 'plan', id: 5 },
  { label: '기타', value: 'other', id: 6 },
];

const RegisterForm: FC = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema),
  });

  const { mutate: emailCheck } = useMutation(postEmailCheck, {
    onSuccess: () => {
      alert('이메일로 인증번호를 전송했습니다.');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) alert('중복된 이메일입니다.');
      }
    },
  });

  const { mutate: emailCheckConfirm } = useMutation(postEmailCheckConfirm, {
    onSuccess: () => {
      alert('인증이 완료되었습니다.');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) alert('인증번호가 일치하지 않습니다.');
      }
    },
  });

  const { mutate: registerMember } = useMutation(postMember, {
    onSuccess: () => {
      alert('회원가입 성공! 로그인 페이지로 이동합니다.');
      navigate('/auth/login');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) alert('이메일 인증은 필수입니다.');
        if (err.response?.status === 409) alert('이미 존재하는 회원입니다.');
      }
    },
  });

  const { mutate: loginKakao } = useMutation(postKakao, {
    onSuccess: (res) => {
      alert(JSON.stringify(res));
      // location 에서 인가 코드 또는 에러 확인
    },
    onError: (err) => {
      alert(JSON.stringify(err));
    },
  });

  const { mutate: loginGoogle } = useMutation(postGoogle, {
    onSuccess: (res) => {
      alert(JSON.stringify(res));
    },
    onError: (err) => {
      alert(JSON.stringify(err));
    },
  });

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const navigate = useNavigate();

  const onClickEmailCheck = () => {
    setIsEmailChecked(true);
    const body = { email: getValues('email') };
    emailCheck(body);
  };

  const onClickEmailCheckComfirm = () => {
    const email = getValues('email');
    const authCode = getValues('authCode');
    if (!authCode) return;
    emailCheckConfirm({ email, authCode });
  };

  const onSubmit: SubmitHandler<RegisterReq> = async (data) => {
    registerMember(data);
  };

  const onClickKakao = () => {
    loginKakao();
  };

  const onClickGoogle = () => {
    loginGoogle();
  };

  return (
    <div className="container">
      <div className="row auth-container">
        <div className="col-lg-6 info">
          <h1>회원가입</h1>
          <p>환영합니다!</p>
          <p>스터디 패밀리에서 함께 할 친구를 찾아봐요!</p>
          <div className="social-auth">
            <OauthIcon src={kakao} alt="kakao" onClick={onClickKakao} />
            <OauthIcon src={google} alt="google" onClick={onClickGoogle} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6">
          <div className="auth">
            <Input
              {...register('userName')}
              label="이름"
              placeholder="이름을 입력해주세요."
              error={errors.userName?.message}
            />
            <div className="inputRow">
              <ButtonInput
                {...register('email')}
                type="emil"
                label="이메일"
                placeholder="이메일을 입력해주세요."
                error={errors.email?.message}
              />
              <Button size="small" outline type="button" color="yellow" onClick={onClickEmailCheck}>
                인증
              </Button>
            </div>
            {isEmailChecked && (
              <div className="inputRow">
                <ButtonInput
                  {...register('authCode')}
                  label="인증번호"
                  placeholder="인증번호를 입력해주세요."
                  error={errors.authCode?.message}
                />
                <Button size="small" outline type="button" color="yellow" onClick={onClickEmailCheckComfirm}>
                  확인
                </Button>
              </div>
            )}
            <Input
              {...register('password')}
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              error={errors.password?.message}
            />
            <Input
              {...register('password_check')}
              type="password"
              label="비밀번호 확인"
              placeholder="비밀번호를 확인해주세요."
              error={errors.password_check?.message}
            />
            <div className="select">
              <label>활동분야(선택)</label>
              <Select {...register('field')} options={categoryOption} />
            </div>

            <Button size="large" color="yellow" type="submit">
              회원가입
            </Button>
            <div className="btnRow">
              <p>이미 계정이 있으신가요?</p>
              <Link to="/auth/login">
                <button type="button" className="underline">
                  로그인
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
