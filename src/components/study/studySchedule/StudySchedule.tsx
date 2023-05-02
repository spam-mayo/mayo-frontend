import { FC, useState } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import { useParams } from 'react-router-dom';
import TodoList from '@/components/study/studySchedule/TodoList';
import CommentBox from '@/components/study/studySchedule/CommentBox';
import UserComment from '@/components/common/UserComment';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';
import dateForm from '@/utils/dateForm';

const StudySchedule: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { newDateForm } = dateForm(startDate);
  const { studyId } = useParams();
  const userId = localStorage.getItem('userId');

  const { data } = useQuery({
    queryFn: () => getUserById(Number(userId)),
    queryKey: ['user', userId],
  });

  const handleDateChange = (date: Date | null) => {
    if (date) setStartDate(date);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <div className="detail-todo-container">
            <Calendar date={startDate} onDateChange={handleDateChange} />
            <TodoList taskDate={newDateForm} studyId={Number(studyId)} />
          </div>
          <UserComment profileUrl={data?.data.profileUrl ?? ''} />
          <CommentBox taskDate={newDateForm} studyId={Number(studyId)} />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
