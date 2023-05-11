import { getStudyTask } from '@/api/study/studyAPI';
import EditTodo from '@/components/study/studySchedule/todoList/EditTodo';
import AddTodo from '@/components/study/studySchedule/todoList/AddTodo';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { formatDate } from '@/utils/dateForm';

interface Props {
  selectedDate: Date;
  studyId?: string;
  onChange: (taskId: number) => void;
}

const TodoList: FC<Props> = ({ selectedDate, studyId, onChange }: Props) => {
  const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');
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
      <div className="todo-content">
        {data ? (
          <EditTodo task={data.data.task} taskId={data.data.taskId} />
        ) : (
          <AddTodo taskDate={taskDate} studyId={studyId} />
        )}
      </div>
    </div>
  );
};

export default TodoList;
