import { getStudyTaskComments } from '@/api/study/studyAPI';
import { formatDate } from '@/utils/dateForm';
import { useQuery } from '@tanstack/react-query';

const useStudyCommentsQuery = (studyId: number, Date: Date) => {
  const taskDate = formatDate(Date, 'yyyy-MM-dd');
  return useQuery(['studyComment', taskDate], () => getStudyTaskComments(Number(studyId), taskDate), {
    select: ({ data }) => data,
  });
};

export default useStudyCommentsQuery;
