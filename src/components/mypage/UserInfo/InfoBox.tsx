import type { FC } from 'react';
import './infoBox.scss';

interface Props {
  title: string;
  name?: string;
  email?: string;
}

const InfoBox: FC<Props> = ({ title, name, email }) => {
  return (
    <div className="boxContainer">
      <div className="title">
        <h1>{title}</h1>
        <button type="button">수정</button>
      </div>
      <div className="content">
        <div>이름 : {name}</div>
        <div>이메일 : {email}</div>
      </div>
    </div>
  );
};

export default InfoBox;
