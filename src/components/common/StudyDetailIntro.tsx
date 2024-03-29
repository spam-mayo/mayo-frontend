import type { FC } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';
import StackData from '@/assets/stacks/stackData';
import Button from '@/components/common/Button';
import type { GetStudyDetailRes } from '@/api/study/studyTypes';

interface Props {
  detailData?: GetStudyDetailRes;
  onClick?: () => void;
}

const StudyDetailIntro: FC<Props> = ({ detailData, onClick }: Props) => {
  if (!detailData) {
    return <div>...Loading</div>;
  }

  const { title, stack, studyName, startDate, endDate, place, personnel, owner, online } = detailData;

  return (
    <div className="study-intro-container">
      <div className="study-intro-top">
        <div className="study-intro-top-title">
          {title}
          <i className="icon-share2" />
        </div>
        <div className="study-intro-top-stack">
          {stack.map(({ stackId, stackName }) => (
            <img key={stackId} src={StackData[stackName]} alt={stackName} />
          ))}
        </div>
      </div>
      <div className="study-intro-bottom">
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
          <div>
            모임 장소
            {online ? (
              <span>온라인</span>
            ) : (
              <>
                <span className="place-name">{place}</span>
                <Button size="small" onClick={onClick}>
                  지도보기
                </Button>
              </>
            )}
          </div>
          <p>
            모집 인원<span>{personnel}</span>
          </p>
        </div>
        <div className="study-owner-container">
          <div className="study-owner-title">
            <p>개설자 정보</p>
          </div>
          <div className="study-owner-intro">
            <UserProfileImg src={owner.userProfileUrl} />
            <div className="study-owner-info">
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
