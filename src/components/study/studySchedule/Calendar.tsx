import type { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

interface Props {
  curDate: Date;
  onDateChange: (date: Date | null) => void;
  startDate?: string;
  endDate?: string;
}

const Calendar: FC<Props> = ({ curDate, onDateChange, startDate, endDate }) => {
  return (
    <DatePicker
      locale={ko}
      selected={curDate}
      onChange={onDateChange}
      minDate={new Date(startDate ?? '')}
      maxDate={new Date(endDate ?? '')}
      calendarClassName="date-picker-calendar"
      inline
      renderCustomHeader={({
        monthDate,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="custom-header">
          <button onClick={() => decreaseMonth()} disabled={prevMonthButtonDisabled}>
            <i className="icon-circle-left" />
          </button>
          <div>
            {monthDate.getFullYear()}년 {monthDate.getMonth() + 1}월
          </div>
          <button onClick={() => increaseMonth()} disabled={nextMonthButtonDisabled}>
            <i className="icon-circle-right" />
          </button>
        </div>
      )}
    />
  );
};

export default Calendar;
