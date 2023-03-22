import { deleteUser, getUserById } from '@/api/auth/authAPI';
import ConfirmModal from '@/components/modal/confirmModal';
import BasicInfo from '@/components/mypage/UserInfo/BasicInfo';
import ExtraInfo from '@/components/mypage/UserInfo/ExtraInfo';
import PasswordInfo from '@/components/mypage/UserInfo/PasswordInfo';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type FC, useState } from 'react';
import './userInfo.scss';

const UserInfo: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');

  if (!userId) {
    throw new Error('no user');
  }

  const { data } = useQuery(['user', userId], () => getUserById(Number(userId)));

  const { mutate: userDelete } = useMutation(deleteUser, {
    onSuccess: () => {
      alert('회원탈퇴 완료');
      localStorage.removeItem('userId');
      localStorage.removeItem('authorization');
      localStorage.removeItem('refresh');
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
    userDelete(Number(userId));
  };

  return (
    <>
      {isModalOpen && (
        <ConfirmModal
          title="정말 탈퇴하시겠습니까?"
          onClickCancel={onClickOpenModal}
          onClickCheck={onClickUnregister}
        />
      )}
      <div className="user-container">
        <BasicInfo name={data?.data.userName} email={data?.data.email} userId={userId} />
        <ExtraInfo field={data?.data.field} stack={data?.data.stack} />
        <PasswordInfo userId={userId} />
        <div onClick={onClickOpenModal}>
          <button>회원 탈퇴</button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
