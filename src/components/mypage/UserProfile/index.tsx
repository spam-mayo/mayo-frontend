import UserProfileImg from '@/components/common/UserProfileImg';
import type { FC } from 'react';
import './index.scss';

interface Props {
  src?: string;
  name: string;
  onClick: () => void;
}

const UserProfile: FC<Props> = ({ src, name, onClick }) => {
  return (
    <div className="proflie">
      <div className="imgContainer">
        <UserProfileImg src={src} />
        <i className="icon-pencil icon" onClick={onClick} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default UserProfile;
