import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStudyTaskComment } from '@/api/study/studyAPI';
import SingleUserComment from '@/components/study/studySchedule/comment/SingleUserComment';
import { formatDate } from '@/utils/dateForm';

interface Props {
  startDate: Date;
  studyId?: string;
}

const CommentBox: FC<Props> = ({ startDate, studyId }) => {
  const taskDate = formatDate(startDate, 'yyyy-MM-dd');
  const { data } = useQuery({
    queryFn: () => getStudyTaskComment(Number(studyId), taskDate),
    queryKey: ['studyComments', taskDate],
  });

  return (
    <div className="comment-list-container">
      {data?.data.map((data) => (
        <SingleUserComment key={data.studyCommentId} taskDate={taskDate} commentItem={data} />
      ))}
    </div>
  );
};

export default CommentBox;
