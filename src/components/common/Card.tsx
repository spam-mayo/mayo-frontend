import type { FC } from 'react';
import './style/common.scss';
import './style/Card.scss';

const Card: FC = () => {
  return (
    <div className="CardWrapper">
      <div className="imgSection">JavaScript</div>
      <div className="stackSection">JS</div>
      <div className="titleSection">바닐라 JS의 중요성! 기초 다지기!</div>
      <div className="nameSection">최진우</div>
      <div className="infoSection">
        <div className="dateSection">시작일: 2023년 3월 1일</div>
        <div className="statusSection">모집중</div>
      </div>
    </div>
  );
};

export default Card;
