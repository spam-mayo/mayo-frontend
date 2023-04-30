import { FC, useState } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getStudyUser, putStudyDelegation, putStudyExpulsion } from '@/api/study/studyAPI';
import Pagination from '@/components/common/Pagination';
import type { StudyOwner } from '@/api/study/studyTypes';
import crown from '@/assets/images/crown.png';
import ConfirmModal from '@/components/modal/ConfirmModal';

interface Props {
  ownerData: StudyOwner;
}

const ParticipatingList: FC<Props> = ({ ownerData }: Props) => {
  const [activePage, setActivePage] = useState(1);
  const [delegationModalOpen, setDelegationModalOpen] = useState(false);
  const [expulsionModalOpen, setExpulsionModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [selectedUserName, setSelectedUserName] = useState('');
  const { studyId = '' } = useParams();

  const { data } = useQuery({
    queryFn: () => getStudyUser(studyId, { page: activePage, status: 'approval' }),
    queryKey: ['studyParticipatingLists'],
    select: ({ data }) => data,
  });

  const { mutate: delegationUser } = useMutation(putStudyDelegation, {
    onSuccess: () => {
      alert('방장 권한 위임이 완료되었습니다!');
    },
  });

  const { mutate: expulsionUser } = useMutation(putStudyExpulsion, {
    onSuccess: () => {
      alert('스터디 추방이 완료되었습니다!');
    },
  });

  const onClickPutDelegation = () => {
    setDelegationModalOpen(false);
    delegationUser({ studyId: Number(studyId), userId: selectedUserId });
  };

  const onClickPutExpulsion = () => {
    setExpulsionModalOpen(false);
    expulsionUser({ studyId: Number(studyId), userId: selectedUserId });
  };

  const onClickOpenModal = (
    { userId, userName }: { userId: number; userName: string },
    modalType: 'delegation' | 'expulsion'
  ) => {
    setSelectedUserId(userId);
    setSelectedUserName(userName);
    if (modalType === 'delegation') {
      setDelegationModalOpen(true);
    } else {
      setExpulsionModalOpen(true);
    }
  };

  const onClickCloseModal = () => {
    setDelegationModalOpen(false);
    setExpulsionModalOpen(false);
  };

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  return (
    <>
      {delegationModalOpen && (
        <ConfirmModal
          title={`${selectedUserName}님에게 방장 권한을 위임하시겠습니까?`}
          onClickCheck={onClickPutDelegation}
          onClickCancel={onClickCloseModal}
        />
      )}
      {expulsionModalOpen && (
        <ConfirmModal
          title={`${selectedUserName}님을 스터디에서 추방하시겠습니까?`}
          onClickCheck={onClickPutExpulsion}
          onClickCancel={onClickCloseModal}
        />
      )}
      <div className="lists-container">
        <div className="lists-title">
          <p>현 스터디원 목록</p>
          <span>총 {data?.data?.length ? data.data.length + 1 : 1}명</span>
        </div>
        <div className="lists-box">
          <div key={ownerData.userId} className="list-box host">
            <div className="people-profile">
              <UserProfileImg src={ownerData.userProfileUrl} />
              <p className="host-name">{ownerData.userName}</p>
              <img src={crown} />
            </div>
          </div>
          {data?.data.map(({ userId, userName, profileUrl, applicationDate }) => (
            <div key={userId} className="list-box participating">
              <div className="people-profile">
                <UserProfileImg src={profileUrl} />
                <p>{userName}</p>
              </div>
              <p className="study-date">가입일 : {applicationDate}</p>
              <div className="list-button-container participating">
                <button className="light" onClick={() => onClickOpenModal({ userId, userName }, 'expulsion')}>
                  추방
                </button>
                <button className="light" onClick={() => onClickOpenModal({ userId, userName }, 'delegation')}>
                  방장 권한 위임
                </button>
              </div>
            </div>
          ))}
        </div>
        {data?.data.length !== 0 && (
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={maxPostPage} />
        )}
      </div>
    </>
  );
};

export default ParticipatingList;
