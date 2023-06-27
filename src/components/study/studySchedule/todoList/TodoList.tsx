import EditTodo from '@/components/study/studySchedule/todoList/EditTodo';
import AddTodo from '@/components/study/studySchedule/todoList/AddTodo';
import type { FC } from 'react';
import { formatDate } from '@/utils/dateForm';
import useTodoQuery from '@/queries/study/useTodoQuery';

interface Props {
  selectedDate: Date;
  studyId?: string;
}

const TodoList: FC<Props> = ({ selectedDate, studyId }: Props) => {
  const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');
  const { data } = useTodoQuery(Number(studyId), taskDate);

  return (
    <div className="todo-container">
      <p>{data?.taskDate}</p>
      <div className="todo-content">
        {data ? <EditTodo task={data.task} taskId={data.taskId} /> : <AddTodo taskDate={taskDate} studyId={studyId} />}
      </div>
    </div>
  );
};

export default TodoList;
