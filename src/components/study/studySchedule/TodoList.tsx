import { getStudyTask, postStudyTask } from '@/api/study/studyAPI';
import Button from '@/components/common/Button';
import { useMutation, useQuery } from '@tanstack/react-query';
import { type FC, useState } from 'react';

interface Props {
  taskDate: string;
  studyId: number;
}

const TodoList: FC<Props> = ({ taskDate, studyId }: Props) => {
  // const [isEdit, setIsEdit] = useState(false);
  const [plusTask, setPlusTask] = useState(false);
  const [taskText, setTaskText] = useState('');

  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), taskDate),
    queryKey: ['studyTasks', taskDate],
    retry: 1,
  });

  const { mutate: postTask } = useMutation(postStudyTask, {
    onSuccess: () => {
      alert('등록되었습니다!');
    },
  });

  const onClickPlusTask = () => {
    setPlusTask((prev) => !prev);
  };

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
    setTaskText('');
    setPlusTask(false);
  };

  return (
    <div className="todo-container">
      <p>{taskDate}</p>
      <div className="todo-content">
        {data ? (
          data.data.task
        ) : (
          <>
            {plusTask ? (
              <form className="todo-form-container" onSubmit={onSubmitTask}>
                <input placeholder="할 일을 적어주세요." value={taskText} onChange={onChangeTaskText} />
                <div className="todo-form-buttons">
                  <Button color="gray" outline onClick={onClickPlusTask}>
                    취소
                  </Button>
                  <Button>저장</Button>
                </div>
              </form>
            ) : (
              <Button size="medium" color="gray" outline onClick={onClickPlusTask}>
                할 일 추가하기
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
