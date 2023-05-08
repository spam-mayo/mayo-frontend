import { postStudyComment } from '@/api/study/studyAPI';
import UserProfileImg from '@/components/common/UserProfileImg';
import { useMutation } from '@tanstack/react-query';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  profileUrl?: string;
  studyId: number;
  todoDate: string;
  taskId: number;
}

interface FormValue {
  comment: string;
}

const AddUserComment: FC<Props> = ({ profileUrl, studyId, todoDate, taskId }) => {
  const { handleSubmit, register, reset } = useForm<FormValue>();

  const { mutate: postComment } = useMutation(postStudyComment, {
    onSuccess: () => {
      alert('등록되었습니다!');
      reset();
    },
  });

  const onSubmitComment: SubmitHandler<FormValue> = (data) => {
    const { comment } = data;
    const body = {
      taskId: taskId,
      taskDate: todoDate,
      comment: comment,
    };
    postComment({ studyId, body });
  };

  return (
    <>
      <p className="comment-title">댓글</p>
      <form className="comment-input-container" onSubmit={handleSubmit(onSubmitComment)}>
        <UserProfileImg src={profileUrl} />
        <input {...register('comment')} />
        <button type="submit">등록하기</button>
      </form>
    </>
  );
};

export default AddUserComment;
