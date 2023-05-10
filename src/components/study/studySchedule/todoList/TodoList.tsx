import { getStudyTask } from '@/api/study/studyAPI';
import EditTodo from '@/components/study/studySchedule/todoList/EditTodo';
import AddTodo from '@/components/study/studySchedule/todoList/AddTodo';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { formatDate } from '@/utils/dateForm';

interface Props {
  selectedDate: Date;
  studyId?: string;
}

const TodoList: FC<Props> = ({ selectedDate, studyId }: Props) => {
  const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');
  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), taskDate),
    queryKey: ['studyTasks', taskDate],
    retry: 1,
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
