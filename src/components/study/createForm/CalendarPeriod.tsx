import { type FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { formatDate } from '@/utils/dateForm';
import { useFormContext } from 'react-hook-form';

const CalendarPeriod: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const handleStartDateChange = (date: Date) => {
    if (date) {
      setStartDate(date);
      const newStartDate = formatDate(date, 'yyyy-MM-dd');
      setValue('startDate', newStartDate);
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (date) {
      setEndDate(date);
      const newEndDate = formatDate(date, 'yyyy-MM-dd');
      setValue('endDate', newEndDate);
    }
  };

  return (
    <div className="calender-container">
      <div className="calendar-box">
        <DatePicker
          {...register('startDate')}
          locale={ko}
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          minDate={startDate}
          calendarClassName="period-calendar"
        />
        {errors.startDate && <p className="place-error">{errors.startDate.message?.toString()}</p>}
      </div>
      <div className="calendar-box">
        <DatePicker
          {...register('endDate')}
          locale={ko}
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          minDate={startDate}
          calendarClassName="period-calendar"
        />
        {errors.endDate && <p className="place-error">{errors.endDate.message?.toString()}</p>}
      </div>
    </div>
  );
};

export default CalendarPeriod;
