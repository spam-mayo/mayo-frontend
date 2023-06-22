import UserProfileImg from '@/components/common/UserProfileImg';
import useUser from '@/hooks/useUser';
import classNames from 'classnames';
import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onSubmitPostComment: (data: CommentFormValue) => void;
}

export interface CommentFormValue {
  comment: string;
}

const AddUserComment: FC<Props> = ({ onSubmitPostComment }) => {
  const { handleSubmit, register, reset } = useForm<CommentFormValue>();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const { userProfile } = useUser();

  const onSubmit = (data: CommentFormValue) => {
    onSubmitPostComment(data);
    reset();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputEmpty(e.target.value === '');
  };

  return (
    <div>
      <p className="comment-title">댓글</p>
      <form className="comment-input-container" onSubmit={handleSubmit(onSubmit)}>
        <UserProfileImg src={userProfile} />
        <input {...register('comment')} onChange={handleInputChange} />
        <button type="submit" disabled={isInputEmpty} className={classNames({ disabled: isInputEmpty })}>
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AddUserComment;
