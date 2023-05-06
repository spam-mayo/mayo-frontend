import { deleteStudyTask, patchStudyTask } from '@/api/study/studyAPI';
import type { PatchStudyTaskReq } from '@/api/study/studyTypes';
import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { useMutation } from '@tanstack/react-query';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  isEdit: boolean;
  task: string;
  taskId: number;
  onClick: () => void;
}

const EditTodo: FC<Props> = ({ isEdit, task, taskId, onClick }: Props) => {
  const { handleSubmit, register, reset } = useForm<PatchStudyTaskReq>({ defaultValues: { task } });

  const { mutate: patchTask } = useMutation(patchStudyTask, {
    onSuccess: () => {
      alert('수정되었습니다!');
      reset();
      onClick();
    },
  });

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
    <>
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
        <MultiButton isEdit={isEdit} onClick={onClick} />
      </form>
    </>
  );
};

export default EditTodo;
