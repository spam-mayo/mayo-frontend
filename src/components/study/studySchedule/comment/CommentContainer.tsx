import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStudyTaskComment } from '@/api/study/studyAPI';

import SingleUserComment from '@/components/study/studySchedule/comment/SingleUserComment';

interface Props {
  taskDate: string;
  studyId: number;
}

const CommentContainer: FC<Props> = ({ taskDate, studyId }) => {
  const { data } = useQuery({
    queryFn: () => getStudyTaskComment(Number(studyId), taskDate),
    queryKey: ['studyComments', taskDate],
  });

  return (
    <div className="comment-list-container">
      {data?.data.map((data) => {
        return <SingleUserComment key={data.studyCommentId} taskDate={taskDate} commentData={data} />;
      })}
    </div>
  );
};

export default CommentContainer;
