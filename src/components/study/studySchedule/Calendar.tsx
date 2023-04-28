import { type FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar: FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const onChageDate = (date: Date) => {
    setStartDate(date);
    // console.log(startDate);
    // console.log(startDate?.getFullYear() + '-' + startDate?.getDay() + '-' + startDate?.getDate());
  };

  return (
    <>
      <DatePicker selected={startDate} onChange={onChageDate} inline />
    </>
  );
};

export default Calendar;
