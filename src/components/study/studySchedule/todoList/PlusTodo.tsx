import { postStudyTask } from '@/api/study/studyAPI';
import Button from '@/components/common/Button';
import { useMutation } from '@tanstack/react-query';
import { useState, type FC } from 'react';

interface Props {
  taskDate: string;
  studyId: number;
  onClick: () => void;
  plusTask: boolean;
}

const PlusTodo: FC<Props> = ({ taskDate, studyId, onClick, plusTask }: Props) => {
  const [taskText, setTaskText] = useState('');

  const { mutate: postTask } = useMutation(postStudyTask, {
    onSuccess: () => {
      alert('등록되었습니다!');
      setTaskText('');
      onClick();
    },
  });

  const onChangeTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const onSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      taskDate: taskDate,
      task: taskText,
    };
    postTask({ studyId, body });
  };

  return (
    <>
      {plusTask ? (
        <form className="todo-form-container" onSubmit={onSubmitTask}>
          <input placeholder="할 일을 적어주세요." value={taskText} onChange={onChangeTaskText} />
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
