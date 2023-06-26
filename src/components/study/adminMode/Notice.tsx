import NoticeEditModal from '@/components/modal/NoticeEditModal';
import useDeleteNoticeMutation from '@/queries/study/useDeleteNoticeMutation';
import { type FC, useState } from 'react';

interface Props {
  studyId?: string;
}

const Notice: FC<Props> = ({ studyId }) => {
  const [noticeEditModalOpen, setNoticeEditModalOpen] = useState(false);
  const deleteNotice = useDeleteNoticeMutation();

  const onClickCloseModal = () => {
    setNoticeEditModalOpen((prev) => !prev);
  };

  const onClickDeleteNotice = () => {
    deleteNotice.mutate(Number(studyId));
  };

  return (
    <>
      {noticeEditModalOpen && <NoticeEditModal onClose={onClickCloseModal} studyId={studyId} />}
      <div className="notice-container">
        <p className="notice-title">공지사항 관리</p>
        <div className="notice-content">
          <p>공지사항 수정</p>
          <div className="notice-button-container">
            <button onClick={onClickCloseModal}>작성</button>
            <button onClick={onClickCloseModal}>수정</button>
            <button className="notice-delete" onClick={onClickDeleteNotice}>
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
