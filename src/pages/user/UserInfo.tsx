import { deleteUser } from '@/api/auth/authAPI';
import ConfirmModal from '@/components/modal/ConfirmModal';
import BasicInfo from '@/components/mypage/UserInfo/BasicInfo';
import ExtraInfo from '@/components/mypage/UserInfo/ExtraInfo';
import PasswordInfo from '@/components/mypage/UserInfo/PasswordInfo';
import { StorageKeys } from '@/constants/storageKeys';
import useAuth from '@/hooks/useAuth';
import useUserDetailQuery from '@/queries/user/useUserDetailQuery';
import { initAuthStorage } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { type FC, useState } from 'react';
import './userInfo.scss';

const UserInfo: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userId } = useAuth();
  const oauth = localStorage.getItem(StorageKeys.OAuth);
  const { data } = useUserDetailQuery();

  if (!userId) {
    throw new Error('no user');
  }

  const userName = data?.userName;
  const email = data?.email;
  const field = data?.field;
  const stack = data?.stack;

  const { mutate: deleteMember } = useMutation(deleteUser, {
    onSuccess: () => {
      alert('회원탈퇴 완료');
      initAuthStorage();
      window.location.href = '/';
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) alert('참여중인 스터디가 있을 경우 탈퇴가 불가능합니다.');
        if (err.response?.status === 404) alert('존재하지 않는 회원입니다.');
      }
    },
  });

  const onClickOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickUnregister = () => {
    deleteMember(userId);
  };

  return (
    <>
      <div className="user-container">
        <BasicInfo name={userName} email={email} userId={userId} />
        <ExtraInfo field={field} stack={stack} userId={userId} />
        {!oauth && <PasswordInfo userId={userId} />}
        <div onClick={onClickOpenModal}>
          <button>회원 탈퇴</button>
        </div>
      </div>
      {isModalOpen && (
        <ConfirmModal
          title="정말 탈퇴하시겠습니까?"
          onClickCancel={onClickOpenModal}
          onClickCheck={onClickUnregister}
        />
      )}
    </>
  );
};

export default UserInfo;
