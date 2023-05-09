import { getStudyTask } from '@/api/study/studyAPI';
import { formatDate } from '@/utils/dateForm';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';

interface Props {
  startDate: Date;
  studyId?: string;
  onChange: (taskId: number) => void;
}

const TodoList: FC<Props> = ({ startDate, studyId, onChange }: Props) => {
  const taskDate = formatDate(startDate, 'yyyy-MM-dd');

  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), taskDate),
    queryKey: ['studyTasks', taskDate],
    onSuccess: (data) => {
      if (data) onChange(data.data.taskId);
    },
  });

  return (
    <div className="todo-container">
      <p>{taskDate}</p>
      <p>{data ? data.data.task : '할 일이 없어요~'}</p>
    </div>
  );
};

export default TodoList;
