import type { FC } from 'react';
import { BASE_PROFILE_URL } from '@/constants/profileUrl';
import UserProfileImg from '@/components/common/UserProfileImg';

const participatingLists = [
  { name: '최진우', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일' },
  { name: '최진우', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일' },
  { name: '최진우', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일' },
  { name: '최진우', profileUrl: BASE_PROFILE_URL, date: '2023년 3월 15일' },
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
          <div key={list.name} className="list-box">
            <div className="people-profile">
              <UserProfileImg src={list.profileUrl} />
              <p>{list.name}</p>
            </div>
            <p className="apply-date">신청일 : {list.date}</p>
            <div className="list-button-container">
              <button className="approve">추방</button>
              <button className="refuse">방장 권한 위임</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipatingList;
