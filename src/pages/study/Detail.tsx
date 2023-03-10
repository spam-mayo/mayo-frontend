import { getStudy } from '@/api/mockAPI';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const StudyDetail: FC = () => {
  const { studyId } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getStudy(Number(studyId)),
    queryKey: ['studies', studyId],
    select: ({ data }) => data,
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>404 Not Found</div>;
  }

  return (
    <div>
      <div>{`제목: ${data.title}`}</div>
      <div>{`모집자: ${data.userName}`}</div>
      <div>{`시작일자: ${data.startDate}`}</div>
      <div>{`모집상태: ${data.studyStatus}`}</div>
      <div>{`기술스택: ${data.stack.map(({ stackName }) => stackName).join(', ')}`}</div>
    </div>
  );
};

export default StudyDetail;
