import UserProfileImg from '@/components/common/UserProfileImg';
import type { FC } from 'react';

interface Props {
  profileUrl: string;
  name: string;
  email: string;
  field: string;
}

const StudyOwner: FC<Props> = ({ profileUrl, name, email, field }: Props) => {
  return (
    <div className="studyOwner-container">
      <div className="studyOwner-title">
        <p>개설자 정보</p>
      </div>
      <div className="studyOwner-intro">
        <UserProfileImg src={profileUrl} />
        <div className="studyOwner-info">
          <p>{name}</p>
          <p>{email}</p>
          <p>{field}</p>
        </div>
      </div>
    </div>
  );
};

export default StudyOwner;
