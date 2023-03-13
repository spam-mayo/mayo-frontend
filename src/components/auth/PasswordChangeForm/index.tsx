import type { FC } from 'react';
import Input from '@/components/auth/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { passwordChangeSchema, PasswordChangeSchema } from '@/constants/schema/passwordChangeSchema';
import './index.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { patchPassword } from '@/api/auth/authAPI';
import axios from 'axios';

const PasswordChangeForm: FC = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('authCode');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PasswordChangeSchema>({
    resolver: yupResolver(passwordChangeSchema),
  });

  const { mutate: passwordPatch } = useMutation(patchPassword, {
    onSuccess: () => {
      alert('비밀번호 변경 완료! 페이지로 돌아가 로그인을 해주세요.');
      navigate('/auth/login');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          alert('10분이 초과하여 변경할 수 없습니다.');
        }
      }
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<PasswordChangeSchema> = (data) => {
    const { newPassword } = data;
    if (!code) return;
    passwordPatch({ code, newPassword });
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
