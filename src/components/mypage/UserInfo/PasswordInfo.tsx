import EditButton from '@/components/mypage/UserInfo/EditButton';
import { type FC, useState } from 'react';
import './info.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { passwordChangeSchema, PasswordChangeSchema } from '@/constants/schema/passwordChangeSchema';
import { useMutation } from '@tanstack/react-query';
import { patchUserInfo } from '@/api/auth/authAPI';
import axios from 'axios';
import Input from '@/components/auth/Input/Input';

interface Props {
  userId: string;
}

const PasswordInfo: FC<Props> = ({ userId }) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<PasswordChangeSchema>({
    resolver: yupResolver(passwordChangeSchema),
  });

  const { mutate: userInfoPatch } = useMutation(patchUserInfo, {
    onSuccess: () => {
      alert('비밀번호 변경이 완료되었습니다!');
      reset();
      setIsEdit(false);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          alert('일치하는 정보가 없습니다.');
        }
      }
    },
  });

  const onClickEdit = () => {
    setIsEdit(!isEdit);
    reset();
  };

  const onSubmit: SubmitHandler<PasswordChangeSchema> = (data) => {
    const password = data.newPassword;

    userInfoPatch({ userId, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="userInfo-container">
      <div className="userInfo-container-top">
        <p>비밀번호</p>
        <EditButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      {isEdit ? (
        <div className="userInfo-container-content">
          <Input
            {...register('newPassword')}
            label="비밀번호"
            type="password"
            placeholder="새로운 비밀번호를 입력하세요."
            error={errors.newPassword?.message}
          />
          <Input
            {...register('newPasswordCheck')}
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 확인해주세요."
            error={errors.newPasswordCheck?.message}
          />
        </div>
      ) : null}
    </form>
  );
};

export default PasswordInfo;
