import type { FC } from 'react';
import './index.scss';

interface Props {
  src: string;
  alt: string;
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

const UserProfile: FC<Props> = ({ src, alt, name, onClick }) => {
  return (
    <div className="proflie">
      <div className="imgContainer">
        <img src={src} alt={alt} />
        <i className="icon-pencil icon" onClick={onClick} style={style} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default UserProfile;
