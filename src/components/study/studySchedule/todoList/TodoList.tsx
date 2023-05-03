import { getStudyTask } from '@/api/study/studyAPI';
import EditTodo from '@/components/study/studySchedule/todoList/EditTodo';
import PlusTodo from '@/components/study/studySchedule/todoList/PlusTodo';
import { useQuery } from '@tanstack/react-query';
import { type FC, useState } from 'react';

interface Props {
  taskDate: string;
  studyId: number;
}

const TodoList: FC<Props> = ({ taskDate, studyId }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [plusTask, setPlusTask] = useState(false);

  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), taskDate),
    queryKey: ['studyTasks', taskDate],
    retry: 1,
  });

  const onClickPlusTask = () => {
    setPlusTask((prev) => !prev);
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
          <PlusTodo taskDate={taskDate} studyId={studyId} onClick={onClickPlusTask} plusTask={plusTask} />
        )}
      </div>
    </div>
  );
};

export default TodoList;
