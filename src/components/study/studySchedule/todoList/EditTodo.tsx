import { deleteStudyTask, patchStudyTask } from '@/api/study/studyAPI';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { useMutation } from '@tanstack/react-query';
import { useState, type FC } from 'react';

interface Props {
  isEdit: boolean;
  task: string;
  taskId: number;
  onClick: () => void;
}

const EditTodo: FC<Props> = ({ isEdit, task, taskId, onClick }: Props) => {
  const [editTaskText, setEditTaskText] = useState('');

  const { mutate: patchTask } = useMutation(patchStudyTask, {
    onSuccess: () => {
      alert('수정되었습니다!');
      onClick();
      setEditTaskText('');
    },
  });

  const { mutate: deleteTask } = useMutation(deleteStudyTask, {
    onSuccess: () => {
      alert('삭제되었습니다!');
    },
  });

  const onChangeEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTaskText(e.target.value);
  };

  const onClickDeleteTask = () => {
    deleteTask(taskId);
  };

  const onSubmitPatchTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      task: editTaskText,
    };

    patchTask({ taskId: taskId, body });
  };

  return (
    <>
      <form className="todo-content-container" onSubmit={onSubmitPatchTask}>
        {isEdit ? (
          <div className="edit-todo-task">
            <input defaultValue={task} onChange={onChangeEditTask} />
          </div>
        ) : (
          <div className="todo-task">
            <div>{task}</div>
            <button type="button" onClick={onClickDeleteTask}>
              <i className="icon-bin" />
              삭제
            </button>
          </div>
        )}
        <MultiButton isEdit={isEdit} onClick={onClick} />
      </form>
    </>
  );
};

export default EditTodo;
