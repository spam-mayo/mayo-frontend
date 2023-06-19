import { getRecruit } from '@/api/recruit/recruitAPI';
import { useQuery } from '@tanstack/react-query';

const useRecruitDetailQuery = (studyId: number) => {
  return useQuery(['recruit', studyId], () => getRecruit(Number(studyId)), {
    select: ({ data }) => data,
  });
};

export default useRecruitDetailQuery;
