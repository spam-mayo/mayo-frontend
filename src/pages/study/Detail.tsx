import { getStudyDetail } from '@/api/study/studyAPI';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const StudyDetail: FC = () => {
  const { studyId } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getStudyDetail(Number(studyId)),
    queryKey: ['studyDetail', studyId],
    select: ({ data }) => data,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  return (
    <div>
      <StudyDetailIntro detailData={data} />
    </div>
  );
};

export default StudyDetail;
