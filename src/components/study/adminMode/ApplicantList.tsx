import UserProfileImg from '@/components/common/UserProfileImg';
import { BASE_PROFILE_URL } from '@/constants/profileUrl';
import type { FC } from 'react';

const applicantLists = [
  { name: '김현정', profileUrl: BASE_PROFILE_URL, date: '2023년 4월 19일' },
  { name: '김현정', profileUrl: BASE_PROFILE_URL, date: '2023년 4월 19일' },
  { name: '김현정', profileUrl: BASE_PROFILE_URL, date: '2023년 4월 19일' },
  { name: '김현정', profileUrl: BASE_PROFILE_URL, date: '2023년 4월 19일' },
];

const ApplicantList: FC = () => {
  return (
    <div className="lists-container">
      <div className="lists-title">
        <p>스터디 참가 신청자 목록</p>
        <span>총 {applicantLists.length}명</span>
      </div>
      <div className="lists-box">
        {applicantLists.map((list) => (
          <div key={list.name} className="list-box">
            <div className="people-profile">
              <UserProfileImg src={list.profileUrl} />
              <p>{list.name}</p>
            </div>
            <p className="study-date">신청일 : {list.date}</p>
            <div className="list-button-container">
              <button className="light">승인</button>
              <button className="dark">거절</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantList;
