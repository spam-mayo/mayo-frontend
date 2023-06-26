import { getStudyDetail } from '@/api/study/studyAPI';
import type { GetStudyDetailRes } from '@/api/study/studyTypes';
import { useQuery } from '@tanstack/react-query';

type QueryOption = {
  onSuccess: (data: GetStudyDetailRes) => void;
};

const useStudyDetailQuery = (studyId: number, options?: QueryOption) =>
  useQuery(['studyDetail', studyId], () => getStudyDetail(Number(studyId)), {
    select: ({ data }) => data,
    ...options,
  });

export default useStudyDetailQuery;
