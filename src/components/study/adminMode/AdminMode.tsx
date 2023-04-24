import type { StudyOwner } from '@/api/study/studyTypes';
import ApplicantList from '@/components/study/adminMode/ApplicantList';
import Management from '@/components/study/adminMode/Management';
import Notice from '@/components/study/adminMode/Notice';
import ParticipatingList from '@/components/study/adminMode/ParticipatingList';
import type { FC } from 'react';

interface Props {
  ownerData: StudyOwner;
}

const AdminMode: FC<Props> = ({ ownerData }: Props) => {
  return (
    <div className="adminMode-container">
      <div>
        <Management />
        <Notice />
      </div>
      <div>
        <ParticipatingList ownerData={ownerData} />
        <ApplicantList />
      </div>
    </div>
  );
};

export default AdminMode;
