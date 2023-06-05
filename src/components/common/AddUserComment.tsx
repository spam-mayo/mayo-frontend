import UserProfileImg from '@/components/common/UserProfileImg';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  profileUrl?: string;
  onSubmitComment: (data: CommentFormValue) => void;
}

export interface CommentFormValue {
  comment: string;
}

const AddUserComment: FC<Props> = ({ profileUrl, onSubmitComment }) => {
  const { handleSubmit, register } = useForm<CommentFormValue>();

  return (
    <div>
      <p className="comment-title">댓글</p>
      <form className="comment-input-container" onSubmit={handleSubmit(onSubmitComment)}>
        <UserProfileImg src={profileUrl} />
        <input {...register('comment')} />
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default AddUserComment;
