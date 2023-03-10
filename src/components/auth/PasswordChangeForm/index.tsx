import type { FC } from 'react';
import Input from '@/components/auth/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { passwordChangeSchema, PasswordChangeSchema } from '@/constants/schema/passwordChangeSchema';
import './index.scss';

const PasswordChangeForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PasswordChangeSchema>({
    resolver: yupResolver(passwordChangeSchema),
  });

  const onSubmit: SubmitHandler<PasswordChangeSchema> = (data) => {
    const { newPassword } = data;
    alert(JSON.stringify(newPassword));
  };
  return (
    <div className="formContainer">
      <div>
        <h1>비밀번호 변경</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Input
          {...register('newPassword')}
          label="새로운 비밀번호"
          type="password"
          placeholder="새로운 비밀번호를 입력해주세요."
          error={errors.newPassword?.message}
        />
        <Input
          {...register('newPasswordCheck')}
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 확인해주세요."
          error={errors.newPasswordCheck?.message}
        />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default PasswordChangeForm;
