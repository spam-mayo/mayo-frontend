import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/auth/Input';
import { useMutation } from '@tanstack/react-query';
import { postPasswordFind } from '@/api/auth/authAPI';
import axios from 'axios';
import './passwordFindModal.scss';
import { type EmailSchema, emailSchema } from '@/constants/schema/emailSchema';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  onCloseModal: () => void;
}

export const PasswordFindModal: FC<Props> = ({ onCloseModal }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EmailSchema>({
    resolver: yupResolver(emailSchema),
  });

  const { mutate: passwordCheck } = useMutation(postPasswordFind, {
    onSuccess: () => {
      alert('이메일로 비밀번호 변경링크를 전송했습니다. 유효시간은 10분 입니다.');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) alert('존재하지 않는 이메일입니다.');
      }
    },
  });

  const onSubmit = (data: EmailSchema) => {
    passwordCheck(data);
  };

  return (
    <div className="modalContainer">
      <form onSubmit={handleSubmit(onSubmit)} className="modalContent">
        <p>비밀번호 변경 링크를 받을 이메일을 입력해주세요.</p>
        <Input
          {...register('email')}
          type="emil"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          error={errors.email?.message}
        />
        <div>
          <button type="submit">확인</button>
          <button onClick={onCloseModal}>취소</button>
        </div>
      </form>
    </div>
  );
};
