import { type FC, useState } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';
import { format } from 'date-fns';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteStudyComment, getStudyTaskComment } from '@/api/study/studyAPI';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';

interface Props {
  taskDate: string;
  studyId: number;
}

const CommentContainer: FC<Props> = ({ taskDate, studyId }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { data } = useQuery({
    queryFn: () => getStudyTaskComment(Number(studyId), taskDate),
    queryKey: ['studyComments', taskDate],
  });

  const { mutate: deleteComment } = useMutation(deleteStudyComment, {
    onSuccess: () => {
      // console.log(res);
      alert('삭제되었습니다.');
    },
  });

  // const { mutate: patchComment } = useMutation(patchStudyComment, {
  //   onSuccess: (res) => {
  //     console.log(res);
  //     alert('수정되었습니다.');
  //   },
  // });

  // const onClickDeleteComment = () => {
  //   deleteStudyComment(data?.data.studyCommentId);
  // };

  const onClickEditButton = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="comment-list-container">
      {data?.data.map(({ userName, comment, createdAt, profileUrl, studyCommentId }) => {
        const newDate = new Date(createdAt);
        const newDateForm = format(newDate, 'yyyy-MM-dd HH:mm');

        return (
          <div key={studyCommentId} className="comment-list">
            <UserProfileImg src={profileUrl} />
            <div className="comment-content-container">
              <div className="comment-top">
                <p className="comment-top-name">{userName}</p>
                <p>{newDateForm}</p>
              </div>
              <p>{comment}</p>
            </div>
            <div className="comment-button-container">
              <MultiButton isEdit={isEdit} onClick={onClickEditButton} />
              <button onClick={() => deleteComment(studyCommentId)}>삭제</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentContainer;
