import type { FC } from 'react';
import profile from './../../../assets/images/kakao3.jpeg';

const StudyOwner: FC = () => {
  return (
    <div className="studyOwner-container">
      <div className="studyOwner-title">
        <p>개설자 정보</p>
        <hr color="#797979" className="hypertext" />
      </div>
      <div className="studyOwner-intro">
        <img src={profile} alt="owner" />
        <div className="studyOwner-info">
          <p>김현정</p>
          <p>cowguswjd@gmail.com</p>
          <p>frontend</p>
        </div>
      </div>
    </div>
  );
};

export default StudyOwner;
