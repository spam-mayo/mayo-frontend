import UserProfileImg from '@/components/common/UserProfileImg';
import type { FC } from 'react';
import './index.scss';

interface Props {
  src?: string;
  name: string;
  onClick: () => void;
}

const style = {
  color: 'white',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const UserProfile: FC<Props> = ({ src, name, onClick }) => {
  return (
    <div className="proflie">
      <div className="imgContainer">
        <UserProfileImg src={src} />
        <i className="icon-pencil icon" onClick={onClick} style={style} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default UserProfile;
