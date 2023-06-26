import { getStudyTask } from '@/api/study/studyAPI';
import { useQuery } from '@tanstack/react-query';

const useTodoQuery = (studyId: number, taskDate: string) =>
  useQuery(['studyTasks', taskDate], () => getStudyTask(Number(studyId), taskDate), {
    select: ({ data }) => data,
  });

export default useTodoQuery;
