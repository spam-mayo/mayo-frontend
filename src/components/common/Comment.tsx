import UserProfileImg from '@/components/common/UserProfileImg';
import { type FC, useState } from 'react';

interface Props {
  profileUrl: string;
}

const Comment: FC<Props> = ({ profileUrl }) => {
  const [text, setText] = useState('');

  const onChaneInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
