import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select } from './select';
import './registerForm.scss';
import { type RegisterSchema, registerSchema } from '@/constants/schema/registerSchema';
import { FieldOption } from '@/constants/FieldOption';

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
    setIsEmailChecked(true);
  };

  const onClickEmailCheckComfirm = () => {
    const emailValues = getValues('email_check');
    alert(JSON.stringify(emailValues));
  };

  const onSubmit = (data: RegisterSchema) => alert(JSON.stringify(data));

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
          placeholder="비밃번호를 입력해주세요."
          error={errors.password?.message}
        />
        <Input
          {...register('password_check')}
          type="password"
          label="비밀번호 확인"
          placeholder="비밃번호를 확인해주세요."
          error={errors.password_check?.message}
        />
        <Select {...register('field')} options={FieldOption} />

        <button type="submit">회원가입</button>

        <div className="inputRow">
          <p>이미 계정이 있으신가요?</p>
          <button type="button">로그인</button>
        </div>
      </form>
    </div>
  );
};
