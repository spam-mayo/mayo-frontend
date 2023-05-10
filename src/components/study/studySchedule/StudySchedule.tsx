import { type FC, useState } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import { useParams } from 'react-router-dom';
import TodoList from '@/components/study/studySchedule/todoList/TodoList';
import AddUserComment from '@/components/common/AddUserComment';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';
import CommentBox from '@/components/study/studySchedule/comment/CommentBox';

interface Props {
  startDate?: string;
  endDate?: string;
}

const StudySchedule: FC<Props> = ({ startDate, endDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [taskId, setTaskId] = useState(0);
  const { studyId } = useParams();
  const userId = localStorage.getItem('userId');

  const { data } = useQuery({
    queryFn: () => getUserById(Number(userId)),
    queryKey: ['user', userId],
  });

  const handleDateChange = (date: Date | null) => {
    if (date) setSelectedDate(date);
  };

  const onChangeTaskId = (taskId: number) => {
    setTaskId(taskId);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <div className="detail-todo-container">
            <Calendar curDate={selectedDate} onDateChange={handleDateChange} startDate={startDate} endDate={endDate} />
            <TodoList selectedDate={selectedDate} studyId={studyId} onChange={onChangeTaskId} />
          </div>
          <AddUserComment
            profileUrl={data?.data.profileUrl}
            studyId={studyId}
            selectedDate={selectedDate}
            taskId={taskId}
          />
          <CommentBox startDate={selectedDate} studyId={studyId} />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
