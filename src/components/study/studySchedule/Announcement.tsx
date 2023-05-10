import type { FC } from 'react';
import { announcement } from '@/constants/announcement';

const Announcement: FC = () => {
  return (
    <div className="announcement-container">
      <p className="announcement-title">공지사항</p>
      <ul>
        {announcement.map((el, index) => (
          <li key={index} className="announcement-list">
            {el.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcement;
