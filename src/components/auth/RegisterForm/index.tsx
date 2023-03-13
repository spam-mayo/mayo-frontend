import { type FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/components/auth/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import Select, { type SelectOption } from '@/components/auth/Select';
import './index.scss';
import { type RegisterSchema, registerSchema } from '@/constants/schema/registerSchema';
import { postEmailCheck, postEmailCheckConfirm, postMember } from '@/api/auth/authAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { RegisterReq } from '@/api/auth/types';
import { Link, useNavigate } from 'react-router-dom';
// import kakao from '@/assets/images/kakao3.jpeg';
// import google from '@/assets/images/google3.png';
// import OauthIcon from '@/components/auth/OauthIcon';

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

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
        <Input
          {...register('userName')}
          label="이름"
          placeholder="이름을 입력해주세요."
          error={errors.userName?.message}
        />
        <div className="inputRow">
          <Input
            {...register('email')}
            type="emil"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            error={errors.email?.message}
          />
          <button type="button" onClick={onClickEmailCheck}>
            인증하기
          </button>
        </div>

        {isEmailChecked && (
          <div className="inputRow">
            <Input
              {...register('authCode')}
              label=""
              placeholder="인증번호를 입력해주세요."
              error={errors.authCode?.message}
            />
            <button type="button" onClick={onClickEmailCheckComfirm}>
              인증확인
            </button>
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
        <Select {...register('field')} options={categoryOption} />

        <button type="submit">회원가입</button>

        <div className="inputRow">
          <p>이미 계정이 있으신가요?</p>
          <Link to="/auth/login">
            <button type="button">로그인</button>
          </Link>
        </div>
        <hr />
        <div className="socialRegister">
          {/* <OauthIcon href="https://spammayo.shop/oauth2/authorization/kakao" src={kakao} alt="kakao" />
          <OauthIcon href="https://spammayo.shop/oauth2/authorization/google" src={google} alt="google" /> */}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
