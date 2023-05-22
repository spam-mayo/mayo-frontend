import { type FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarPeriod: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="calender-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(new Date(date ?? ''))}
        selectsStart
        startDate={startDate}
        minDate={startDate}
        endDate={endDate}
        calendarClassName="period-calendar"
      />

      <DatePicker
        selected={startDate}
        onChange={(date) => setEndDate(new Date(date ?? ''))}
        selectsStart
        startDate={startDate}
        minDate={startDate}
        endDate={endDate}
        calendarClassName="period-calendar"
      />
    </div>
  );
};

export default CalendarPeriod;
