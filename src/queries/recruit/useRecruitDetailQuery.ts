import { getRecruit } from '@/api/recruit/recruitAPI';
import { useQuery } from '@tanstack/react-query';

const useRecruitDetailQuery = (studyId: number) =>
  useQuery(['recruit', studyId], () => getRecruit(Number(studyId)), {
    select: ({ data }) => data,
  });

export default useRecruitDetailQuery;
