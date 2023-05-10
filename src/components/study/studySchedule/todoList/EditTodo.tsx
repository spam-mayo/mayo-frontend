import { deleteStudyTask, patchStudyTask } from '@/api/study/studyAPI';
import type { PatchStudyTaskReq } from '@/api/study/studyTypes';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { useMutation } from '@tanstack/react-query';
import { type FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  task: string;
  taskId: number;
}

const EditTodo: FC<Props> = ({ task, taskId }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const { handleSubmit, register, reset } = useForm<PatchStudyTaskReq>({ defaultValues: { task } });

  const { mutate: patchTask } = useMutation(patchStudyTask, {
    onSuccess: () => {
      alert('수정되었습니다!');
      reset();
      setIsEdit(false);
    },
  });

  const onClickToggleEditTask = () => {
    setIsEdit((prev) => !prev);
  };

  const { mutate: deleteTask } = useMutation(deleteStudyTask, {
    onSuccess: () => {
      alert('삭제되었습니다!');
      window.location.reload();
    },
  });

  const onClickDeleteTask = () => {
    deleteTask(taskId);
  };

  const onSubmitPatchTask: SubmitHandler<PatchStudyTaskReq> = (data) => {
    const { task } = data;
    patchTask({ taskId: taskId, body: { task } });
  };

  return (
    <form className="todo-content-container" onSubmit={handleSubmit(onSubmitPatchTask)}>
      {isEdit ? (
        <div className="edit-todo-task">
          <input {...register('task')} />
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
      <MultiButton isEdit={isEdit} onClick={onClickToggleEditTask} />
    </form>
  );
};

export default EditTodo;
