import { type FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar: FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
    </>
  );
};

export default Calendar;
