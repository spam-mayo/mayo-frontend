import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStudyTaskComment } from '@/api/study/studyAPI';

import SingleUserComment from '@/components/study/studySchedule/comment/SingleUserComment';

interface Props {
  taskDate: string;
  studyId?: string;
  loginUser: string;
}

const CommentContainer: FC<Props> = ({ taskDate, studyId, loginUser }) => {
  const { data } = useQuery({
    queryFn: () => getStudyTaskComment(Number(studyId), taskDate),
    queryKey: ['studyComments', taskDate],
  });

  return (
    <div className="comment-list-container">
      {data?.data.map((data) => {
        return (
          <SingleUserComment key={data.studyCommentId} taskDate={taskDate} commentData={data} loginUser={loginUser} />
        );
      })}
    </div>
  );
};

export default CommentContainer;
