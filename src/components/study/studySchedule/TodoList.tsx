import { getStudyTask } from '@/api/study/studyAPI';
import { formatDate } from '@/utils/dateForm';
import { useQuery } from '@tanstack/react-query';
import { type Dispatch, type FC, SetStateAction, useEffect } from 'react';

interface Props {
  startDate: Date;
  studyId?: string;
  setTaskId: Dispatch<SetStateAction<number>>;
}

const TodoList: FC<Props> = ({ startDate, studyId, setTaskId }: Props) => {
  const taskDate = formatDate(startDate, 'yyyy-MM-dd');

  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), taskDate),
    queryKey: ['studyTasks', taskDate],
  });

  useEffect(() => {
    if (data?.data) setTaskId(data.data.taskId);
  }, [data]);

  return (
    <div className="todo-container">
      <p>{taskDate}</p>
      <p>{data ? data.data.task : '할 일이 없어요~'}</p>
    </div>
  );
};

export default TodoList;
