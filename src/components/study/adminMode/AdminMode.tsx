import ApplicantList from '@/components/study/adminMode/ApplicantList';
import Management from '@/components/study/adminMode/Management';
import Notice from '@/components/study/adminMode/Notice';
import ParticipatingList from '@/components/study/adminMode/ParticipatingList';
import type { FC } from 'react';

const AdminMode: FC = () => {
  return (
    <div className="adminMode-container">
      <div>
        <Management />
        <Notice />
      </div>
      <div>
        <ParticipatingList />
        <ApplicantList />
      </div>
    </div>
  );
};

export default AdminMode;
