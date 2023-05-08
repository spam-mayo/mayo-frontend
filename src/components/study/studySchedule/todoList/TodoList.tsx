import { getStudyTask } from '@/api/study/studyAPI';
import EditTodo from '@/components/study/studySchedule/todoList/EditTodo';
import AddTodo from '@/components/study/studySchedule/todoList/AddTodo';
import { useQuery } from '@tanstack/react-query';
import { type FC, useState } from 'react';

interface Props {
  taskDate: string;
  studyId: number;
}

const TodoList: FC<Props> = ({ taskDate, studyId }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [addTask, setAddTask] = useState(false);

  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), taskDate),
    queryKey: ['studyTasks', taskDate],
    retry: 1,
  });

  const onClickPlusTask = () => {
    setAddTask((prev) => !prev);
  };

  const onClickEditTask = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="todo-container">
      <p>{taskDate}</p>
      <div className="todo-content">
        {data ? (
          <EditTodo isEdit={isEdit} onClick={onClickEditTask} task={data.data.task} taskId={data.data.taskId} />
        ) : (
          <AddTodo taskDate={taskDate} studyId={studyId} onClick={onClickPlusTask} addTask={addTask} />
        )}
      </div>
    </div>
  );
};

export default TodoList;
