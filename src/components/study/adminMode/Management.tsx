import type { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const Management: FC = () => {
  const { studyId } = useParams();

  return (
    <div className="notice-container">
      <p className="notice-title">스터디 운영 관리</p>
      <div className="manage-content">
        <div className="sub-content">
          <p>구인 글 관리</p>
          <div className="sub-content-bundle">
            <Link to={`/recruit/detail/${studyId}`}>
              <span>스터디 만들거야 모집중</span>
            </Link>
            <div className="notice-button-container">
              <Link to={`/recruit/edit/${studyId}`}>
                <button>수정</button>
              </Link>
              <button className="notice-delete">삭제</button>
            </div>
          </div>
        </div>
        <div className="sub-content">
          <p>관리 운영</p> <span className="study-closed">스터디를 페쇄합니다.</span>
        </div>
      </div>
    </div>
  );
};

export default Management;
