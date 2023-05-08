import UserProfileImg from '@/components/common/UserProfileImg';
import { type FC, useState } from 'react';
import { format } from 'date-fns';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';

import { deleteStudyComment, patchStudyComment } from '@/api/study/studyAPI';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

interface Props {
  commentData: {
    userName: string;
    comment: string;
    createdAt: string;
    profileUrl: string;
    studyCommentId: number;
  };
  taskDate: string;
}

interface FormValue {
  text: string;
}

const SingleComment: FC<Props> = ({ commentData, taskDate }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { userName, comment, createdAt, profileUrl, studyCommentId } = commentData;
  const newDate = new Date(createdAt);
  const newDateForm = format(newDate, 'yyyy-MM-dd HH:mm');

  const { handleSubmit, register, reset } = useForm<FormValue>();

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
    const { text } = data;
    const body = {
      taskDate: taskDate,
      comment: text,
    };
    patchComment({ studyCommentId, body });
  };

  return (
    <form className="comment-list" onSubmit={handleSubmit(onSubmitPatchComment)}>
      <UserProfileImg src={profileUrl} />
      <div className="comment-content-container">
        <div className="comment-top">
          <p className="comment-top-name">{userName}</p>
          <p>{newDateForm}</p>
        </div>
        {isEdit ? <input {...register('text')} /> : <p className="comment-content">{comment}</p>}
      </div>
      <div className="comment-button-container">
        <MultiButton isEdit={isEdit} onClick={onClickEditButton} />
        <button type="button" onClick={() => deleteComment(studyCommentId)}>
          삭제
        </button>
      </div>
    </form>
  );
};

export default SingleComment;
