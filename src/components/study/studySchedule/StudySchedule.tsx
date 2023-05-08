import { FC, useState } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import TodoList from '@/components/study/studySchedule/TodoList';
import CommentContainer from '@/components/study/studySchedule/comment/CommentContainer';
import Comment from '@/components/common/Comment';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';

const StudySchedule: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [taskId, setTaskId] = useState(0);
  const { studyId } = useParams();
  const userId = localStorage.getItem('userId');

  const { data } = useQuery({
    queryFn: () => getUserById(Number(userId)),
    queryKey: ['user', userId],
  });

  const handleDateChange = (date: Date | null) => {
    if (date) setStartDate(date);
  };

  const formdate = format(startDate, 'yyyy-MM-dd');

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <div className="detail-todo-container">
            <Calendar date={startDate} onDateChange={handleDateChange} />
            <TodoList taskDate={formdate} studyId={Number(studyId)} setTaskId={setTaskId} />
          </div>
          <Comment
            profileUrl={data?.data.profileUrl ?? ''}
            studyId={Number(studyId)}
            todoDate={formdate}
            taskId={taskId}
          />
          <CommentContainer taskDate={formdate} studyId={Number(studyId)} />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
