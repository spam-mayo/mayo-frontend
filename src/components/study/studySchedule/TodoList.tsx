import type { FC } from 'react';

interface Props {
  date: string | undefined;
}

const TodoList: FC<Props> = ({ date }: Props) => {
  return (
    <div className="todo-container">
      This is to do list.
      <p>{date}</p>
    </div>
  );
};

export default TodoList;
