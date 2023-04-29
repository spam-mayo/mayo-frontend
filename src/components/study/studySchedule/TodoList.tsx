import type { FC } from 'react';

interface Props {
  taskDate: string;
  task: string;
}

const TodoList: FC<Props> = ({ taskDate, task }: Props) => {
  return (
    <div className="todo-container">
      <p>{taskDate}</p>
      <p>{task}</p>
    </div>
  );
};

export default TodoList;
