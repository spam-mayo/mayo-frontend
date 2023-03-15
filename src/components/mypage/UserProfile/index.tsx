import type { FC } from 'react';
import './index.scss';
import { MdOutlineModeEditOutline } from 'react-icons/md';

// interface Props {
//   profileUrl: string;
//   userName: string;
// }

// const UserProfile: FC<Props> = (props: Props) => {
//   const { userName, profileUrl } = props;
//   return (
//     <div>
//       <div>
//         <img src={profileUrl}></img>
//       </div>
//       <div>
//         <p>{userName}</p>
//       </div>
//     </div>
//   );
// };

interface Props {
  src: string;
  alt: string;
  name: string;
  onClick: () => void;
}
const UserProfile: FC<Props> = ({ src, alt, name, onClick }) => {
  return (
    <div className="proflie">
      <div className="imgContainer">
        <img src={src} alt={alt} />
        <MdOutlineModeEditOutline className="icon" color="white" onClick={onClick} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default UserProfile;
