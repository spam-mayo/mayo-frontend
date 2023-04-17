import type { FC } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';
import StackData from '@/assets/stacks/stackData';
import Button from '@/components/common/Button';
import type { GetStudyDetailRes } from '@/api/study/studyTypes';

interface Props {
  detailData: GetStudyDetailRes;
}

const StudyDetailIntro: FC<Props> = ({ detailData }: Props) => {
  const { title, stack, studyName, startDate, endDate, place, personnel, owner } = detailData;

  return (
    <div className="studyIntro-container">
      <div className="studyIntro-top">
        <div className="studyIntro-top-title">
          {title}
          <i className="icon-share2"></i>
        </div>
        <div className="studyIntro-top-stack">
          {stack.map(({ stackId, stackName }) => (
            <img key={stackId} src={StackData[stackName]} alt={stackName}></img>
          ))}
        </div>
      </div>
      <div className="studyIntro-bottom">
        <div className="meeting-info">
          <p>
            스터디 명<span>{studyName}</span>
          </p>
          <p>
            모임 기간
            <span>
              {startDate} ~ {endDate}
            </span>
          </p>
          <p>
            모임 장소
            <span>
              {place} <Button size="small">지도보기</Button>
            </span>
          </p>
          <p>
            모집 인원<span>{personnel}</span>
          </p>
        </div>
        <div className="studyOwner-container">
          <div className="studyOwner-title">
            <p>개설자 정보</p>
          </div>
          <div className="studyOwner-intro">
            <UserProfileImg src={owner.userProfileUrl} />
            <div className="studyOwner-info">
              <p>{owner.userName}</p>
              <p>{owner.email}</p>
              <p>{owner.field}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDetailIntro;
