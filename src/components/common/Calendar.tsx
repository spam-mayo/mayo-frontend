import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, DayRange } from 'react-modern-calendar-datepicker';
import '@/styles/constants/_colors.scss';

const CalendarRange = () => {
  const [selectedDayRange, onChangeSetSelectedDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });

  return (
    <div>
      <Calendar
        value={selectedDayRange}
        onChange={onChangeSetSelectedDayRange}
        /* 변수 사용이 불가하므로 직접 색번호 기입 */
        colorPrimary="#115173"
        colorPrimaryLight="rgba(39, 96, 126, 0.4)"
        shouldHighlightWeekends
        calendarClassName="responsive-calendar"
      />
    </div>
  );
};

export default CalendarRange;
