import type { FC } from 'react';

const Management: FC = () => {
  return (
    <div className="notice-container">
      <p className="notice-title">스터디 운영 관리</p>

      <div className="manage-content">
        <div className="ha">
          <p>구인 글 관리</p>
          <div className="management-group">
            <span>스터디 만들거야 모집중</span>
            <div className="btn-group">
              <button>수정</button>
              <button className="btn-delete">삭제</button>
            </div>
          </div>
        </div>

        <div className="ha">
          <p>관리 운영</p> <span>스터디를 페쇄합니다.</span>
        </div>
      </div>
    </div>
  );
};

export default Management;
