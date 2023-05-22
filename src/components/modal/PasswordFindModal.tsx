import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postPasswordFind } from '@/api/auth/authAPI';
import axios from 'axios';
import './modal.scss';
import { type EmailSchema, emailSchema } from '@/constants/schema/emailSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface Props {
  onClose: () => void;
}

const PasswordFindModal: FC<Props> = ({ onClose }: Props) => {
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
      onClose();
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
    <div className="modal-container">
      <form onSubmit={handleSubmit(onSubmit)} className="modal-content">
        <p>비밀번호 변경 링크를 받을 이메일을 입력해주세요.</p>
        <Input
          {...register('email')}
          type="email"
          label=""
          placeholder="이메일을 입력해주세요."
          error={errors.email?.message}
        />
        <div>
          <Button onClick={onClose} color="gray" outline>
            취소
          </Button>
          <Button type="submit">전송</Button>
        </div>
      </form>
    </div>
  );
};

export default PasswordFindModal;
