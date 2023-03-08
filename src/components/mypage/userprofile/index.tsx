import type { FC } from 'react';

interface Props {
  profileUrl: string;
  userName: string;
}

export const UserProfile: FC<Props> = (props: Props) => {
  const { userName, profileUrl } = props;
  return (
    <div>
      <div>
        <img src={profileUrl}></img>
      </div>
      <div>
        <p>{userName}</p>
      </div>
    </div>
  );
};
