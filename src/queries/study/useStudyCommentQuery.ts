import { getStudyTaskComment } from '@/api/study/studyAPI';
import { formatDate } from '@/utils/dateForm';
import { useQuery } from '@tanstack/react-query';

const useStudyCommentQuery = (studyId: number, startDate: string) => {
  const taskDate = formatDate(startDate, 'yyyy-MM-dd');
  return useQuery(['studyComment', taskDate], () => getStudyTaskComment(Number(studyId), taskDate), {
    select: ({ data }) => data,
  });
};

export default useStudyCommentQuery;
