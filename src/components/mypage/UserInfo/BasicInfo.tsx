import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { type FC, useState } from 'react';
import './info.scss';
import { patchUserInfo } from '@/api/auth/authAPI';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { nameSchema, NameSchema } from '@/constants/schema/nameSchema';
import Input from '@/components/common/Input';

interface Props {
  name?: string;
  email?: string;
  userId: number;
}

const BasicInfo: FC<Props> = ({ name, email, userId }) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<NameSchema>({
    resolver: yupResolver(nameSchema),
  });

  const { mutate: patchToUserInfo } = useMutation(patchUserInfo, {
    onSuccess: () => {
      alert('이름이 변경되었습니다!');
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

  const onSubmit: SubmitHandler<NameSchema> = ({ userName }) => {
    if (!userId) return;
    patchToUserInfo({ userId, userName });
  };

  const onClickEdit = () => {
    setIsEdit(!isEdit);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="userInfo-container">
      <div className="userInfo-container-top">
        <p>기본 정보</p>
        <MultiButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      <div className="userInfo-container-content">
        {isEdit ? (
          <>
            <Input label="이름" defaultValue={name} {...register('userName')} error={errors.userName?.message} />
          </>
        ) : (
          <div className="row">
            <p className="label">이름</p>
            <p className="value">{name}</p>
          </div>
        )}
        <div className="row">
          <p className="label">이메일</p>
          <p className="value">{email}</p>
        </div>
      </div>
    </form>
  );
};

export default BasicInfo;
