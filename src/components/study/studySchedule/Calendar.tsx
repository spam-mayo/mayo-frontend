import { type FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getStudyTask } from '@/api/study/studyAPI';
import { useParams } from 'react-router-dom';
import TodoList from '@/components/study/studySchedule/TodoList';

const Calendar: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { studyId } = useParams();

  const formdate = format(startDate, 'yyyy-MM-dd');

  const { data } = useQuery({
    queryFn: () => getStudyTask(Number(studyId), formdate),
    queryKey: ['studyTasks', startDate],
  });

  const onChageDate = (date: Date) => {
    setStartDate(date);
  };

  return (
    <div className="calender-todo-list">
      <DatePicker locale={ko} selected={startDate} onChange={onChageDate} inline />
      <TodoList task={data?.data.task ?? ''} taskDate={data?.data.taskDate ?? ''} />
    </div>
  );
};

export default Calendar;
