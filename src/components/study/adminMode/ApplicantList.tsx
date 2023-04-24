import { getStudyUser } from '@/api/study/studyAPI';
import Pagination from '@/components/common/Pagination';
import UserProfileImg from '@/components/common/UserProfileImg';
import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

const ApplicantList: FC = () => {
  const [activePage, setActivePage] = useState(1);
  const { studyId = '' } = useParams();

  const { data } = useQuery({
    queryFn: () => getStudyUser(studyId, { page: activePage, status: 'waiting' }),
    queryKey: ['studyApplicantLists'],
    select: ({ data }) => data,
  });

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  return (
    <div className="lists-container">
      <div className="lists-title">
        <p>스터디 참가 신청자 목록</p>
        <span>총 {data?.data.length}명</span>
      </div>
      {!data?.data.length ? (
        <div>아직 신청자가 없어용</div>
      ) : (
        <div className="lists-box">
          {data?.data.map((list) => (
            <div key={list.userId} className="list-box">
              <div className="people-profile">
                <UserProfileImg src={list.profileUrl} />
                <p>{list.userName}</p>
              </div>
              <p className="study-date">신청일 : {list.applicationDate}</p>
              <div className="list-button-container">
                <button className="light">승인</button>
                <button className="dark">거절</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {data?.data.length !== 0 && (
        <Pagination activePage={activePage} pages={maxPostPage} setActivePage={setActivePage} />
      )}
    </div>
  );
};

export default ApplicantList;
