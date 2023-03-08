import { getStudies } from '@/api/mockAPI';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';

const StudyList: FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getStudies(),
    queryKey: ['studies'],
    select: ({ data }) => data,
  });

  const studies = data?.data ?? [];

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {studies.map(({ studyId, title, userName, startDate, studyStatus, stack }) => (
        <div key={studyId}>
          <div>{`제목: ${title}`}</div>
          <div>{`모집자: ${userName}`}</div>
          <div>{`시작일자: ${startDate}`}</div>
          <div>{`모집상태: ${studyStatus}`}</div>
          <div>{`기술스택: ${stack.map(({ stackName }) => stackName).join(', ')}`}</div>
        </div>
      ))}
    </div>
  );
};

export default StudyList;
