import { getRecruitComment } from '@/api/recruit/recruitAPI';
import { useQuery } from '@tanstack/react-query';

const useRecruitCommentQuery = (studyId: number) => {
  return useQuery(['recruitComments', studyId], () => getRecruitComment(Number(studyId)), {
    select: ({ data }) => data,
  });
};

export default useRecruitCommentQuery;
