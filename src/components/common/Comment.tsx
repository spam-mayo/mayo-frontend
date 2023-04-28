import UserProfileImg from '@/components/common/UserProfileImg';
import { type FC, useState } from 'react';

const Comment: FC = () => {
  const [text, setText] = useState('');

  const onChaneInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText('');
  };

  return (
    <form className="comment-container" onSubmit={onSubmitComment}>
      <UserProfileImg />
      <input placeholder="내용을 입력하세요." value={text} onChange={onChaneInputText} />
      <button type="submit">등록하기</button>
    </form>
  );
};

export default Comment;
