import type { FC } from 'react';

interface Props {
  startData: string;
  endData: string;
}

const Date: FC<Props> = ({ startData, endData }: Props) => {
  return (
    <div className="date-container">
      <p className="start-date">시작일 : {startData}</p>
      <p className="end-date">종료일 : {endData}</p>
    </div>
  );
};

export default Date;
