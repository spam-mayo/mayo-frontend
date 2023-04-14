import type { FC } from 'react';

const StudyOwner: FC = () => {
  return (
    <div className="studyOwner-container">
      <div className="studyOwner-title">
        <p>개설자 정보</p>
      </div>
      <div className="studyOwner-intro">
        <i className="icon-union" />
        <div className="studyOwner-info">
          <p>김현정</p>
          <p>cowguswjd@gmail.com</p>
          <p>프론트엔드</p>
        </div>
      </div>
    </div>
  );
};

export default StudyOwner;
