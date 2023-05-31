import { getStudyDetail } from '@/api/study/studyAPI';
import { useQuery } from '@tanstack/react-query';

const useStudyDetailQuery = (studyId: number) => {
  return useQuery(['studyDetail', studyId], () => getStudyDetail(Number(studyId)), {
    select: ({ data }) => data,
  });
};

export default useStudyDetailQuery;
