import UserProfileImg from '@/components/common/UserProfileImg';
import { type FC, useState } from 'react';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { deleteStudyComment, patchStudyComment } from '@/api/study/studyAPI';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yeartToHour } from '@/utils/dateForm';

interface Props {
  commentData: {
    userName: string;
    comment: string;
    createdAt: string;
    profileUrl: string;
    studyCommentId: number;
  };
  taskDate: string;
  loginUser: string;
}

interface FormValue {
  editComment: string;
}

const SingleUserComment: FC<Props> = ({ commentData, taskDate, loginUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { userName, comment, createdAt, profileUrl, studyCommentId } = commentData;
  const { handleSubmit, register, reset } = useForm<FormValue>({ defaultValues: { editComment: comment } });

  const commentDateForm = yeartToHour(new Date(createdAt));

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

  const onSubmitPatchComment: SubmitHandler<FormValue> = (data) => {
    const { editComment } = data;
    const body = {
      taskDate: taskDate,
      comment: editComment,
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
        {isEdit ? <input {...register('editComment')} /> : <p className="comment-content">{comment}</p>}
      </div>
      <div className="comment-button-container">
        {loginUser === userName && (
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
