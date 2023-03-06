import type { FC } from 'react';
import { Input } from 'src/components/auth/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { passwordChangeSchema, PasswordChangeSchema } from '@/constants/schema/passwordChangeSchema';
import './index.scss';

export const PasswordChangeForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PasswordChangeSchema>({
    resolver: yupResolver(passwordChangeSchema),
  });

  const onSubmit: SubmitHandler<PasswordChangeSchema> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="formContainer">
      <div>
        <h1>비밀번호 변경</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Input
          {...register('firstPassword')}
          label="새로운 비밀번호"
          type="password"
          placeholder="새로운 비밀번호를 입력해주세요."
          error={errors.firstPassword?.message}
        />
        <Input
          {...register('secondPassword')}
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 확인해주세요."
          error={errors.secondPassword?.message}
        />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};
