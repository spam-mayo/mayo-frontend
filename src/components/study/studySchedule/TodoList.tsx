import { getStudyTask } from '@/api/study/studyAPI';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';

interface Props {
  taskDate: string;
  studyId: number;
  setTaskId: Dispatch<SetStateAction<number>>;
}

const TodoList: FC<Props> = ({ taskDate, studyId, setTaskId }: Props) => {
  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), taskDate),
    queryKey: ['studyTasks', taskDate],
    retry: 1,
  });

  useEffect(() => {
    if (data?.data) setTaskId(data?.data.taskId);
  }, [data]);

  return (
    <div className="todo-container">
      <p>{taskDate}</p>
      <p>{data ? data.data.task : '할 일이 없어요~'}</p>
    </div>
  );
};

export default TodoList;
