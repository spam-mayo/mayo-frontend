import type { FC } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import Comment from '@/components/common/Comment';

const StudySchedule: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <Calendar />
          <p className="comment-title">댓글</p>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
