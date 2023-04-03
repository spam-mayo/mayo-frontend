import type { FC } from 'react';

interface Props {
  startDate: string;
  endDate: string;
}

const Date: FC<Props> = ({ startDate, endDate }: Props) => {
  return (
    <div className="date-container">
      <p className="start-date">시작일 : {startDate}</p>
      <p className="end-date">종료일 : {endDate}</p>
    </div>
  );
};

export default Date;
