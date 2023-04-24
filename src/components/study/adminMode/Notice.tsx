const Notice = () => {
  return (
    <div className="notice-container">
      <p className="notice-title">공지사항 관리</p>
      <div className="notice-content">
        <p>공지사항 수정</p>
        <div className="notice-button-container">
          <button>작성</button>
          <button>수정</button>
          <button className="notice-delete">삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Notice;
