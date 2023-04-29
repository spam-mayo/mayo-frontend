import type { FC } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import CommentContainer from '@/components/study/studySchedule/CommentContainer';
import Comment from '@/components/common/Comment';

const StudySchedule: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <Calendar />
          <Comment />
          <CommentContainer />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
