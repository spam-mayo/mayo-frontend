import type { FC } from 'react';
import { BASE_PROFILE_URL } from '@/constants/profileUrl';
import UserProfileImg from '@/components/common/UserProfileImg';

const participatingLists = [
  { name: '김형진', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일', admin: true },
  { name: '최진우', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일', admin: false },
  { name: '최진우', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일', admin: false },
  { name: '최진우', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일', admin: false },
];

const ParticipatingList: FC = () => {
  return (
    <div className="lists-container">
      <div className="lists-title">
        <p>현 스터디원 목록</p>
        <span>총 {participatingLists.length + 1}명</span>
      </div>
      <div className="lists-box">
        {participatingLists.map((list) => (
          <div key={list.name} className="list-box participating">
            <div className="people-profile">
              <UserProfileImg src={list.profileUrl} />
              <p>{list.name}</p>
            </div>
            <p className="study-date">가입일 : {list.date}</p>
            <div className="list-button-container participating">
              <button className="light">추방</button>
              <button className="light">방장 권한 위임</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipatingList;
