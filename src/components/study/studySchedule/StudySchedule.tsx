import { FC, useState } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import { useParams } from 'react-router-dom';
import TodoList from '@/components/study/studySchedule/todoList/TodoList';
import CommentContainer from '@/components/study/studySchedule/CommentContainer';
import Comment from '@/components/common/Comment';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';

interface Props {
  startDate?: string;
  endDate?: string;
}

const StudySchedule: FC<Props> = ({ startDate, endDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { studyId } = useParams();
  const userId = localStorage.getItem('userId');

  const { data } = useQuery({
    queryFn: () => getUserById(Number(userId)),
    queryKey: ['user', userId],
  });

  const handleDateChange = (date: Date | null) => {
    if (date) setSelectedDate(date);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <div className="detail-todo-container">
            <Calendar curDate={selectedDate} onDateChange={handleDateChange} startDate={startDate} endDate={endDate} />
            <TodoList selectedDate={selectedDate} studyId={studyId} />
          </div>
          <Comment profileUrl={data?.data.profileUrl ?? ''} />
          <CommentContainer selectedDate={selectedDate} studyId={Number(studyId)} />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
