import { FC, useState } from 'react';
import UserProfileImg from '@/components/common/UserProfileImg';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getStudyUser } from '@/api/study/studyAPI';
import Pagination from '@/components/common/Pagination';
import type { StudyOwner } from '@/api/study/studyTypes';
import crown from '@/assets/images/crown.png';

interface Props {
  ownerData: StudyOwner;
}

const ParticipatingList: FC<Props> = ({ ownerData }: Props) => {
  const [activePage, setActivePage] = useState(1);
  const { studyId = '' } = useParams();

  const { data } = useQuery({
    queryFn: () => getStudyUser(studyId, { page: activePage, status: 'approval' }),
    queryKey: ['studyParticipatingLists'],
    select: ({ data }) => data,
  });

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  return (
    <div className="lists-container">
      <div className="lists-title">
        <p>현 스터디원 목록</p>
        <span>총 {data?.data?.length ? data.data.length + 1 : 1}명</span>
      </div>
      <div className="lists-box">
        <div key={ownerData.userId} className="list-box host">
          <div className="people-profile">
            <UserProfileImg src={ownerData.userProfileUrl} />
            <p className="host-name">{ownerData.userName}</p>
            <img src={crown} />
          </div>
        </div>
        {data?.data.map((list) => (
          <div key={list.userId} className="list-box participating">
            <div className="people-profile">
              <UserProfileImg src={list.profileUrl} />
              <p>{list.userName}</p>
            </div>
            <p className="study-date">가입일 : {list.applicationDate}</p>
            <div className="list-button-container participating">
              <button className="light">추방</button>
              <button className="light">방장 권한 위임</button>
            </div>
          </div>
        ))}
      </div>
      {data?.data.length !== 0 && (
        <Pagination activePage={activePage} setActivePage={setActivePage} pages={maxPostPage} />
      )}
    </div>
  );
};

export default ParticipatingList;
