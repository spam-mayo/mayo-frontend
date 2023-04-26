import { getStudyUser, putStudyApproval, putStudyReject } from '@/api/study/studyAPI';
import Pagination from '@/components/common/Pagination';
import UserProfileImg from '@/components/common/UserProfileImg';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import ConfirmModal from '@/components/modal/ConfirmModal';

const ApplicantList: FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [approvalModalOpen, setApprovalModalOpen] = useState(false);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [selectedUserName, setSelectedUserName] = useState('');
  const { studyId = '' } = useParams();

  const { data } = useQuery({
    queryFn: () => getStudyUser(studyId, { page: activePage, status: 'waiting' }),
    queryKey: ['studyApplicantLists'],
    select: ({ data }) => data,
  });

  const { mutate: approvalUser } = useMutation(putStudyApproval, {
    onSuccess: () => {
      alert('스터디 요청을 승인하였습니다!');
    },
  });

  const { mutate: rejectUser } = useMutation(putStudyReject, {
    onSuccess: () => {
      alert('스터디 요청을 거절하였습니다!');
    },
  });

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  const onClickPutApproval = () => {
    setApprovalModalOpen(false);
    approvalUser({ studyId: Number(studyId), userId: selectedUserId });
  };

  const onClickPutRefuse = () => {
    setRejectModalOpen(false);
    rejectUser({ studyId: Number(studyId), userId: selectedUserId });
  };

  const onClickOpenModal = (userId: number, userName: string, modalType: 'approval' | 'refuse') => {
    setSelectedUserId(userId);
    setSelectedUserName(userName);
    if (modalType === 'approval') {
      setApprovalModalOpen(true);
    } else if (modalType === 'refuse') {
      setRejectModalOpen(true);
    }
  };

  const onClickCloseModal = () => {
    setApprovalModalOpen(false);
    setRejectModalOpen(false);
  };

  return (
    <>
      {approvalModalOpen && (
        <ConfirmModal
          title={`${selectedUserName}님의 스터디 신청을 승인하시겠습니까?`}
          onClickCheck={onClickPutApproval}
          onClickCancel={onClickCloseModal}
        />
      )}
      {rejectModalOpen && (
        <ConfirmModal
          title={`${selectedUserName}님의 스터디 신청을 거절하시겠습니까?`}
          onClickCheck={onClickPutRefuse}
          onClickCancel={onClickCloseModal}
        />
      )}
      <div className="lists-container">
        <div className="lists-title">
          <p>스터디 참가 신청자 목록</p>
          <span>총 {data?.data.length}명</span>
        </div>
        {!data?.data.length ? (
          <div>아직 신청자가 없어용</div>
        ) : (
          <div className="lists-box">
            {data?.data.map((list) => (
              <div key={list.userId} className="list-box">
                <div className="people-profile">
                  <UserProfileImg src={list.profileUrl} />
                  <p>{list.userName}</p>
                </div>
                <p className="study-date">신청일 : {list.applicationDate}</p>
                <div className="list-button-container">
                  <button className="light" onClick={() => onClickOpenModal(list.userId, list.userName, 'approval')}>
                    승인
                  </button>
                  <button className="dark" onClick={() => onClickOpenModal(list.userId, list.userName, 'refuse')}>
                    거절
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {data?.data.length !== 0 && (
          <Pagination activePage={activePage} pages={maxPostPage} setActivePage={setActivePage} />
        )}
      </div>
    </>
  );
};

export default ApplicantList;
