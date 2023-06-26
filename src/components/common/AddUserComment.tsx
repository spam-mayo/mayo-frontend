import UserProfileImg from '@/components/common/UserProfileImg';
import { commentSchema } from '@/constants/schema/comment.schema';
import useUser from '@/hooks/useUser';
import { yupResolver } from '@hookform/resolvers/yup';
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
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CommentFormValue>({ resolver: yupResolver(commentSchema) });
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
        <div className="comment-input">
          <input {...register('comment')} onChange={handleInputChange} />
          {errors.comment && <p className="err-msg">{errors.comment.message}</p>}
        </div>
        <button type="submit" disabled={isInputEmpty} className={classNames({ disabled: isInputEmpty })}>
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AddUserComment;
