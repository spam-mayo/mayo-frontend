import NoticeEditModal from '@/components/modal/NoticeEditModal';
import useDeleteNoticeMutation from '@/queries/study/useDeleteNoticeMutation';
import useNoticeQuery from '@/queries/study/useNoticeQuery';
import classNames from 'classnames';
import { type FC, useState } from 'react';

interface Props {
  studyId?: string;
}

const Notice: FC<Props> = ({ studyId }) => {
  const [noticeModalOpen, setNoticeModalOpen] = useState(false);
  const [noticeEditModalOpen, setNoticeEditModalOpen] = useState(false);
  const { mutate: deleteNotice } = useDeleteNoticeMutation();
  const { data: notice } = useNoticeQuery(Number(studyId));

  const isNotice = Boolean(notice?.noticeContent);

  const onClickPostModal = () => {
    if (!isNotice) setNoticeModalOpen((prev) => !prev);
  };

  const onClickPatchModal = () => {
    if (isNotice) setNoticeEditModalOpen((prev) => !prev);
  };

  const onClickDeleteNotice = () => {
    if (isNotice) deleteNotice(Number(studyId));
  };

  return (
    <>
      <div className="notice-container">
        <p className="notice-title">공지사항 관리</p>
        <div className="notice-content">
          <p>공지사항</p>
          <div className="notice-button-container">
            <button onClick={onClickPostModal} className={classNames({ disabled: isNotice })}>
              작성
            </button>
            <button onClick={onClickPatchModal} className={classNames({ disabled: !isNotice })}>
              수정
            </button>
            <button className={classNames('notice-delete', { disabled: !isNotice })} onClick={onClickDeleteNotice}>
              삭제
            </button>
          </div>
        </div>
      </div>
      {noticeModalOpen && <NoticeEditModal onClose={onClickPostModal} studyId={studyId} />}
      {noticeEditModalOpen && <NoticeEditModal onClose={onClickPatchModal} studyId={studyId} isEdit />}
    </>
  );
};

export default Notice;
