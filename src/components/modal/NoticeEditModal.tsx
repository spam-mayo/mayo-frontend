import type { PatchNoticeReq } from '@/api/study/studyTypes';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import usePatchNoticeMutation from '@/queries/study/usePatchNoticeMutation';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onClose: () => void;
  studyId?: string;
}

const NoticeEditModal: FC<Props> = ({ onClose, studyId }) => {
  const patchNotice = usePatchNoticeMutation(onClose);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PatchNoticeReq>();

  const onSumbit = (data: PatchNoticeReq) => {
    patchNotice.mutate({ ...data, studyId: Number(studyId) });
  };

  return (
    <div className="modal-container">
      <form className="modal-content notice-modal" onSubmit={handleSubmit(onSumbit)}>
        <p>공지사항 등록</p>
        <Input placeholder="공지사항 제목을 입력해주세요." {...register('noticeTitle')} />
        <textarea placeholder="공지사항 내용을 입력해주세요." {...register('noticeContent')} />
        {errors.noticeContent && <p>{errors.noticeContent.message}</p>}
        <div>
          <Button onClick={onClose} color="gray" outline>
            취소
          </Button>
          <Button type="submit">전송</Button>
        </div>
      </form>
    </div>
  );
};

export default NoticeEditModal;
