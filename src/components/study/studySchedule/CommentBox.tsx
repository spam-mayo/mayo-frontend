import type { FC } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getStudyTaskComment } from '@/api/study/studyAPI';
import { formatDate } from '@/utils/dateForm';

interface Props {
  selectedDate: Date;
  studyId: number;
}

const CommentBox: FC<Props> = ({ selectedDate, studyId }) => {
  const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');
  const { data } = useQuery({
    queryFn: () => getStudyTaskComment(Number(studyId), taskDate),
    queryKey: ['studyComments', taskDate],
  });

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
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
