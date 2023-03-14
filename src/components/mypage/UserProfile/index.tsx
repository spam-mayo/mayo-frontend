import type { FC } from 'react';
import './index.scss';

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
}
const UserProfile: FC<Props> = ({ src, alt, name }) => {
  return (
    <div className="proflie">
      <div className="imgContainer">
        <img src={src} alt={alt} />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default UserProfile;
