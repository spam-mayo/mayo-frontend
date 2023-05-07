import { postStudyComment } from '@/api/study/studyAPI';
import UserProfileImg from '@/components/common/UserProfileImg';
import { useMutation } from '@tanstack/react-query';
import { type FC, useState } from 'react';

interface Props {
  profileUrl: string;
  studyId: number;
  todoDate: string;
  taskId: number;
}

const Comment: FC<Props> = ({ profileUrl, studyId, todoDate, taskId }) => {
  const [text, setText] = useState('');

  const { mutate: postComment } = useMutation(postStudyComment, {
    onSuccess: () => {
      alert('등록되었습니다!');
    },
  });

  const onChaneInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      taskId: taskId,
      taskDate: todoDate,
      comment: text,
    };
    postComment({ studyId, body });
    setText('');
  };

  return (
    <>
      <p className="comment-title">댓글</p>
      <form className="comment-input-container" onSubmit={onSubmitComment}>
        <UserProfileImg src={profileUrl} />
        <input placeholder="내용을 입력하세요." value={text} onChange={onChaneInputText} />
        <button type="submit">등록하기</button>
      </form>
    </>
  );
};

export default Comment;
