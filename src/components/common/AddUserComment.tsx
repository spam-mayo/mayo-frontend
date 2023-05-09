import { postStudyComment } from '@/api/study/studyAPI';
import UserProfileImg from '@/components/common/UserProfileImg';
import { formatDate } from '@/utils/dateForm';
import { useMutation } from '@tanstack/react-query';
import type { FC } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  profileUrl?: string;
  studyId?: string;
  startDate: Date;
  taskId: number;
}

export interface CommentFormValue {
  commnet: string;
}

const AddUserComment: FC<Props> = ({ profileUrl, studyId, startDate, taskId }) => {
  const taskDate = formatDate(startDate, 'yyyy-MM-dd');

  const { handleSubmit, register, reset } = useForm<CommentFormValue>();

  const { mutate: postComment } = useMutation(postStudyComment, {
    onSuccess: () => {
      alert('등록되었습니다!');
      reset();
    },
  });

  const onSubmitComment: SubmitHandler<CommentFormValue> = ({ commnet }) => {
    const body = {
      taskId: taskId,
      taskDate: taskDate,
      comment: commnet,
    };

    if (!studyId) return;
    postComment({ studyId: Number(studyId), body });
  };

  return (
    <div>
      <p className="comment-title">댓글</p>
      <form className="comment-input-container" onSubmit={handleSubmit(onSubmitComment)}>
        <UserProfileImg src={profileUrl} />
        <input {...register('commnet')} />
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default AddUserComment;
