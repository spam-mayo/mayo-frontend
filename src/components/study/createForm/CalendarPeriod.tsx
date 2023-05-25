import { type FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { formatDate } from '@/utils/dateForm';
import { useRecoilState } from 'recoil';
import { studyPeriodState } from '@/atom/atom';

const CalendarPeriod: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [studyPeriod, setStudyPeriod] = useRecoilState(studyPeriodState);

  const handleStartDateChange = (date: Date) => {
    if (date) {
      setStartDate(date);
      const newStartDate = formatDate(date, 'yyyy-MM-dd');
      setStudyPeriod({ ...studyPeriod, startDate: newStartDate });
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (date) {
      setEndDate(date);
      const newEndDate = formatDate(date, 'yyyy-MM-dd');
      setStudyPeriod({ ...studyPeriod, endDate: newEndDate });
    }
  };

  return (
    <div className="calender-container">
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        minDate={startDate}
        calendarClassName="period-calendar"
      />

      <DatePicker
        locale={ko}
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        minDate={endDate}
        calendarClassName="period-calendar"
      />
    </div>
  );
};

export default CalendarPeriod;
