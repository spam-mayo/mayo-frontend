import type { FC } from 'react';

export interface CardProps {
  post: { id: number; title: string };
}

const Card: FC<CardProps> = ({ post }) => {
  return (
    <div className="CardWrapper">
      <div className="imgSection">Image area</div>
      <div className="innerWrapper">
        <div className="badge" />
        <div className="titleSection">{post?.title}</div>
        <div className="nameSection">{post?.id}</div>
        <div className="infoSection">
          <div className="dateSection">2023s년 3월 3일</div>
          <div className="statusSection">모집중</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
