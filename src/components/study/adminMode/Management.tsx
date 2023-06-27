import useDeleteRecruitMutation from '@/queries/recruit/useDeleteRecruitMutation';
import useRecruitDetailQuery from '@/queries/recruit/useRecruitDetailQuery';
import useDeleteStudyMutation from '@/queries/study/useDeleteStudyMutation';
import useStudyDetailQuery from '@/queries/study/useStudyDetailQuery';
import type { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const Management: FC = () => {
  const { studyId } = useParams();
  const { data: study, isError } = useStudyDetailQuery(Number(studyId));
  const { data: recruit } = useRecruitDetailQuery(Number(studyId));
  const { mutate: deleteRecruit } = useDeleteRecruitMutation();
  const { mutate: deleteStudy } = useDeleteStudyMutation();

  const onClickDeleteRecruit = () => {
    deleteRecruit(Number(recruit?.offerId));
  };

  const onClickDeleteStudy = () => {
    deleteStudy(Number(studyId));
  };

  if (isError) {
    return <div>에러 발생!!</div>;
  }

  return (
    <div className="notice-container">
      <p className="notice-title">스터디 운영 관리</p>
      <div className="manage-content">
        <div className="sub-content">
          <p>구인 글 관리</p>
          <div className="sub-content-bundle">
            <Link to={`/recruit/detail/${studyId}`}>
              <span>{study?.title}</span>
            </Link>
            <div className="notice-button-container">
              <Link to={`/recruit/edit/${studyId}`}>
                <button>수정</button>
              </Link>
              <button className="notice-delete" onClick={onClickDeleteRecruit}>
                삭제
              </button>
            </div>
          </div>
        </div>
        <div className="sub-content">
          <p>스터디 관리</p>
          <button className="study-closed" onClick={onClickDeleteStudy}>
            페쇄
          </button>
        </div>
      </div>
    </div>
  );
};

export default Management;
