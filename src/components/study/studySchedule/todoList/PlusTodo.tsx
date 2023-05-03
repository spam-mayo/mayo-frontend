import { postStudyTask } from '@/api/study/studyAPI';
import Button from '@/components/common/Button';
import { useMutation } from '@tanstack/react-query';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  taskDate: string;
  studyId: number;
  onClick: () => void;
  plusTask: boolean;
}

interface FormValue {
  todo: string;
}

const PlusTodo: FC<Props> = ({ taskDate, studyId, onClick, plusTask }: Props) => {
  const { handleSubmit, register, reset } = useForm<FormValue>();

  const { mutate: postTask } = useMutation(postStudyTask, {
    onSuccess: () => {
      alert('등록되었습니다!');
      reset();
      onClick();
    },
  });

  const onSubmitTask: SubmitHandler<FormValue> = (data) => {
    const { todo } = data;
    const body = {
      taskDate: taskDate,
      task: todo,
    };
    postTask({ studyId, body });
  };

  return (
    <>
      {plusTask ? (
        <form className="todo-form-container" onSubmit={handleSubmit(onSubmitTask)}>
          <input {...register('todo')} />
          <div className="todo-form-buttons">
            <Button color="gray" outline onClick={onClick}>
              취소
            </Button>
            <Button>저장</Button>
          </div>
        </form>
      ) : (
        <Button size="medium" color="gray" outline onClick={onClick}>
          할 일 추가하기
        </Button>
      )}
    </>
  );
};

export default PlusTodo;
