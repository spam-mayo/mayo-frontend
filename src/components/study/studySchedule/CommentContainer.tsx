import type { FC } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';

const commentList = [
  {
    index: 1,
    name: '김현정',
    date: '2023.2.7 15:41',
    content: '안녕하세요, 참가비는 얼마인가요? 내용 아무것도 모르는데 괜찮을까요?',
  },
  {
    index: 2,
    name: '최진우',
    date: '2023.3.10 18:30',
    content: '저도 참가하고 싶습니다.',
  },
];

const CommentContainer: FC = () => {
  return (
    <div className="comment-list-container">
      {commentList.map(({ index, name, date, content }) => (
        <div key={index} className="comment-list">
          <UserProfileImg />
          <div className="comment-content-container">
            <div className="comment-top">
              <p className="comment-top-name">{name}</p>
              <p>{date}</p>
            </div>
            <p>{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentContainer;
