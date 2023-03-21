import EditInput from '@/components/auth/Input/EditInput';
import EditButton from '@/components/mypage/UserInfo/EditButton';
import { type FC, useState } from 'react';
import './info.scss';
import { patchUserInfo } from '@/api/auth/authAPI';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { nameSchema, NameSchema } from '@/constants/schema/nameSchema';

interface Props {
  name: string;
  email: string;
  userId: string;
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

  const { mutate: userInfoPatch } = useMutation(patchUserInfo, {
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

  const onSubmit: SubmitHandler<NameSchema> = (data) => {
    const userName = data.userName;
    userInfoPatch({ userId, userName });
  };

  const onClickEdit = () => {
    setIsEdit(!isEdit);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="basic-container">
      <div className="basic-container-top">
        <p>기본 정보</p>
        <EditButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      <div className="basic-container-content">
        {isEdit ? (
          <>
            <EditInput
              label="이름"
              placeholder="이름을 입력하세요"
              {...register('userName')}
              error={errors.userName?.message}
            />
          </>
        ) : (
          <div className="row">
            <p className="key">이름</p>
            <p className="value">{name}</p>
          </div>
        )}
        <div className="row">
          <p className="key">이메일</p>
          <p className="value">{email}</p>
        </div>
      </div>
    </form>
  );
};

export default BasicInfo;
