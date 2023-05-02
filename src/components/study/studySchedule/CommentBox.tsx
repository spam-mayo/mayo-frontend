import type { FC } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';
import { useQuery } from '@tanstack/react-query';
import { getStudyTaskComment } from '@/api/study/studyAPI';
import dateForm from '@/utils/dateForm';

interface Props {
  taskDate: string;
  studyId: number;
}

const CommentBox: FC<Props> = ({ taskDate, studyId }) => {
  const { data } = useQuery({
    queryFn: () => getStudyTaskComment(Number(studyId), taskDate),
    queryKey: ['studyComments', taskDate],
  });

  return (
    <div className="comment-list-container">
      {data?.data.map(({ userName, comment, createdAt, profileUrl, studyCommentId }) => {
        // const newDate = new Date(createdAt);
        // const newDateForm = format(newDate, 'yyyy-MM-dd HH:mm');
        const { newDateFormHour } = dateForm(createdAt);

        return (
          <div key={studyCommentId} className="comment-list">
            <UserProfileImg src={profileUrl} />
            <div className="comment-content-container">
              <div className="comment-top">
                <p className="comment-top-name">{userName}</p>
                <p>{newDateFormHour}</p>
              </div>
              <p>{comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
