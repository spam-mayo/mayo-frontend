import UserProfileImg from '@/components/common/UserProfileImg';
import { type FC, useState } from 'react';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { CommentFormValue } from '@/components/common/AddUserComment';
import { formatDate } from '@/utils/dateForm';
import useAuth from '@/hooks/useAuth';
import type { CommentRes } from '@/api/recruit/recruitTypes';

interface Props {
  commentItem: CommentRes;
  taskDate?: string;
  onSubmitPatchComment: ({ data, id }: { data: CommentFormValue; id: number }) => void;
  onDeleteComment: (id: number) => void;
}

const SingleUserComment: FC<Props> = ({ commentItem, onDeleteComment, onSubmitPatchComment }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { userName, comment, createdAt, profileUrl, studyCommentId, userId, offerCommentId } = commentItem;

  const { handleSubmit, register } = useForm<CommentFormValue>({ defaultValues: { comment: comment } });

  const commentDateForm = formatDate(createdAt, 'yyyy-MM-dd HH:mm');

  const { userId: idOfUser } = useAuth();

  const onClickEditButton = () => {
    setIsEdit((prev) => !prev);
  };

  const onSubmit: SubmitHandler<CommentFormValue> = (data) => {
    const id = offerCommentId || studyCommentId;

    if (id) {
      onSubmitPatchComment({ data, id: Number(id) });
      setIsEdit(false);
    }
  };

  const onClickDeleteComment = () => {
    if (offerCommentId) onDeleteComment(offerCommentId);
    if (studyCommentId) onDeleteComment(studyCommentId);
  };

  return (
    <form className="comment-list" onSubmit={handleSubmit(onSubmit)}>
      <UserProfileImg src={profileUrl} />
      <div className="comment-content-container">
        <div className="comment-top">
          <p className="comment-top-name">{userName}</p>
          <p>{commentDateForm}</p>
        </div>
        {isEdit ? <input {...register('comment')} /> : <p className="comment-content">{comment}</p>}
      </div>
      <div className="comment-button-container">
        {idOfUser === userId && (
          <>
            <MultiButton isEdit={isEdit} onClick={onClickEditButton} />
            <button type="button" onClick={onClickDeleteComment} className="delete-button">
              <i className="icon-bin" />
              삭제
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default SingleUserComment;
