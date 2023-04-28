import type { FC } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';

const StudySchedule: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
