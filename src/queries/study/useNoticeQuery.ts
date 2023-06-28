import { getStudyNotice } from '@/api/study/studyAPI';
import { useQuery } from '@tanstack/react-query';

const useNoticeQuery = (studyId: number) => {
  return useQuery(['notice', studyId], () => getStudyNotice(studyId), {
    select: ({ data }) => data,
  });
};

export default useNoticeQuery;
