import UserProfileImg from '@/components/common/UserProfileImg';
import { type FC, useState } from 'react';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { deleteStudyComment, patchStudyComment } from '@/api/study/studyAPI';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import type { CommentFormValue } from '@/components/common/AddUserComment';
import { formatDate } from '@/utils/dateForm';

interface Props {
  commentData: {
    userName: string;
    comment: string;
    createdAt: string;
    profileUrl: string;
    studyCommentId: number;
    userId: number;
  };
  taskDate: string;
}

const SingleUserComment: FC<Props> = ({ commentData, taskDate }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { userName, comment, createdAt, profileUrl, studyCommentId, userId } = commentData;
  const { handleSubmit, register, reset } = useForm<CommentFormValue>({ defaultValues: { commnet: comment } });

  const commentDateForm = formatDate(createdAt, 'yyyy-MM-dd HH:mm');
  const idOfUser = localStorage.getItem('userId');

  const { mutate: deleteComment } = useMutation(deleteStudyComment, {
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });

  const { mutate: patchComment } = useMutation(patchStudyComment, {
    onSuccess: () => {
      reset();
      setIsEdit(false);
      alert('수정되었습니다.');
    },
  });

  const onClickEditButton = () => {
    setIsEdit((prev) => !prev);
  };

  const onSubmitPatchComment: SubmitHandler<CommentFormValue> = ({ commnet }) => {
    const body = {
      taskDate: taskDate,
      comment: commnet,
    };
    patchComment({ studyCommentId, body });
  };

  return (
    <form className="comment-list" onSubmit={handleSubmit(onSubmitPatchComment)}>
      <UserProfileImg src={profileUrl} />
      <div className="comment-content-container">
        <div className="comment-top">
          <p className="comment-top-name">{userName}</p>
          <p>{commentDateForm}</p>
        </div>
        {isEdit ? <input {...register('commnet')} /> : <p className="comment-content">{comment}</p>}
      </div>
      <div className="comment-button-container">
        {Number(idOfUser) === userId && (
          <>
            <MultiButton isEdit={isEdit} onClick={onClickEditButton} />
            <button type="button" onClick={() => deleteComment(studyCommentId)} className="delete-button">
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
