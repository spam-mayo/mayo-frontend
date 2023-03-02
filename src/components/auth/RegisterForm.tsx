import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select, type SelectOption } from './Select';
import './registerForm.scss';
import { type RegisterSchema, registerSchema } from '@/constants/schema/registerSchema';
import { emailCheck, emailCheckConfirm } from '@/api/auth/authAxiosInstance';

const categoryOption: SelectOption[] = [
  { label: '선택 안 함', value: 'nofield', id: 1 },
  { label: '프론트엔드', value: 'frontend', id: 2 },
  { label: '백엔드', value: 'backend', id: 3 },
  { label: '디자인', value: 'design', id: 4 },
  { label: '기획', value: 'plan', id: 5 },
  { label: '기타', value: 'other', id: 6 },
];

export const RegisterForm: FC = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema),
  });

  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const onClickEmailCheck = () => {
    sendEmailCheck();
  };

  const onClickEmailCheckComfirm = () => {
    confirmEmailCheck();
  };

  const sendEmailCheck = async () => {
    try {
      const body = {
        email: getValues('email'),
      };
      const res = await emailCheck(body);
      if (res.status === 200) {
        setIsEmailChecked(true);
        alert('이메일로 인증번호를 전송했습니다.');
      }
    } catch (e) {
      // console.log(e);
    }
  };

  const confirmEmailCheck = async () => {
    try {
      const body = {
        email: getValues('email'),
        authCode: getValues('email_check'),
      };
      const res = await emailCheckConfirm(body);
      if (res.status === 200) {
        alert('인증이 완료되었습니다');
      }
    } catch (e) {
      //console.log(e);
    }
  };

  // const registerMember = async () => {
  //   try {
  //     const body = {
  //       userName: getValues('name'),
  //       email: getValues('email'),
  //       password: getValues('password'),
  //       field: getValues('field'),
  //     };

  //     const res = await postMember(body);
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const onSubmit = (data: RegisterSchema) => {
    alert(JSON.stringify(data));
    //registerMember();
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
        <Input {...register('name')} label="이름" placeholder="이름을 입력해주세요." error={errors.name?.message} />
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
              {...register('email_check')}
              label=""
              placeholder="인증번호를 입력해주세요."
              error={errors.email_check?.message}
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
          <button type="button">로그인</button>
        </div>
      </form>
    </div>
  );
};