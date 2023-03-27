import MultiButton from '@/components/mypage/UserInfo/MultiButton';
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
  const [isShowPw, setIsShowPw] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<PasswordChangeSchema>({
    resolver: yupResolver(passwordChangeSchema),
  });

  const { mutate: patchToUserInfo } = useMutation(patchUserInfo, {
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

  const onClickToggleShowPw = () => {
    setIsShowPw((prev) => !prev);
  };

  const onSubmit: SubmitHandler<PasswordChangeSchema> = (data) => {
    const password = data.newPassword;

    patchToUserInfo({ userId, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="userInfo-container">
      <div className="userInfo-container-top">
        <p>비밀번호</p>
        <MultiButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      {isEdit ? (
        <div className="userInfo-container-content">
          <div className="show-input">
            <Input
              {...register('newPassword')}
              label="비밀번호"
              type={isShowPw ? 'text' : 'password'}
              placeholder="새로운 비밀번호를 입력하세요."
              error={errors.newPassword?.message}
            />
            <i
              className={isShowPw ? 'icon-checkbox-checked' : 'icon-checkbox-unchecked'}
              onClick={onClickToggleShowPw}
            />
          </div>
          <div className="show-input">
            <Input
              {...register('newPasswordCheck')}
              label="비밀번호 확인"
              type={isShowPw ? 'text' : 'password'}
              placeholder="비밀번호를 확인해주세요."
              error={errors.newPasswordCheck?.message}
            />
            <i
              className={isShowPw ? 'icon-checkbox-checked' : 'icon-checkbox-unchecked'}
              onClick={onClickToggleShowPw}
            />
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default PasswordInfo;
