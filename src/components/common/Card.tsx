import type { FC, ReactNode } from 'react';
import './style/common.scss';
import './style/Card.module.scss';

const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="CardWrapper">
      <div className="imgSection">Image area</div>
      <div className="innerWrapper">
        <div className="badge" />
        <div className="titleSection">{children}</div>
        <div className="nameSection">id</div>
        <div className="infoSection">
          <div className="dateSection">2023s년 3월 3일</div>
          <div className="statusSection">모집중</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// userId: 1;
// id: 1;
// title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
// body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';
