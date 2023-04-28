import TodoList from '@/components/study/studySchedule/TodoList';
import { type FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar: FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isTodoOpen, setIsTodoOpen] = useState(false);

  const onChageDate = (date: Date) => {
    setStartDate(date);
    setIsTodoOpen(true);
  };

  return (
    <div className="calender-todo-list">
      <DatePicker selected={startDate} onChange={onChageDate} inline />
      {isTodoOpen && <TodoList date={startDate?.toDateString()} />}
    </div>
  );
};

export default Calendar;
