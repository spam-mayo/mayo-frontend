import type { PatchNoticeReq } from '@/api/study/studyTypes';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { noticeSchma } from '@/constants/schema/noticeSchema';
import useNoticeQuery from '@/queries/study/useNoticeQuery';
import usePatchNoticeMutation from '@/queries/study/usePatchNoticeMutation';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onClose: () => void;
  studyId?: string;
  isEdit?: boolean;
}

const NoticeEditModal: FC<Props> = ({ onClose, studyId, isEdit }) => {
  const { data } = useNoticeQuery(Number(studyId));
  const patchNotice = usePatchNoticeMutation({
    onSuccess: () => {
      alert('공지사항이 등록되었습니다!');
      onClose();
    },
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PatchNoticeReq>({ resolver: yupResolver(noticeSchma) });

  const onSumbit = (data: PatchNoticeReq) => {
    patchNotice.mutate({ ...data, studyId: Number(studyId) });
  };

  const noticeContent = data?.noticeContent;
  const noticeTitle = data?.noticeTitle;

  return (
    <div className="modal-container">
      <form className="modal-content notice-modal" onSubmit={handleSubmit(onSumbit)}>
        <p className="notice-title">공지사항 {isEdit ? '수정' : '등록'}</p>
        <div>
          <Input
            placeholder="공지사항 제목을 입력해주세요."
            {...register('noticeTitle')}
            defaultValue={isEdit ? noticeTitle : ''}
          />
          {errors.noticeTitle && <p className="err-msg">{errors.noticeTitle.message}</p>}
        </div>
        <div>
          {' '}
          <textarea
            placeholder="공지사항 내용을 입력해주세요."
            {...register('noticeContent')}
            defaultValue={isEdit ? noticeContent : ''}
          />
          {errors.noticeContent && <p className="err-msg">{errors.noticeContent.message}</p>}
        </div>
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
