import { getRecruit } from '@/api/recruit/recruitAPI';
import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import useStudyDetailQuery from '@/queries/study/useStudyDetailQuery';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecruitDetail: FC = () => {
  const { studyId } = useParams();
  const { data } = useStudyDetailQuery(Number(studyId));
  const navigate = useNavigate();

  const { data: recruit } = useQuery({
    queryFn: () => getRecruit(Number(studyId)),
    queryKey: ['recruit', studyId],
    select: ({ data }) => data,
  });

  const onClickGoBack = () => {
    navigate(-1);
  };

  const introHTML = recruit?.offerIntro.replace(/\n/g, '<br/>');
  const ruleHTML = recruit?.offerRule.replace(/\n/g, '<br/>');

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area">
            <button onClick={onClickGoBack}>
              <i className="icon-arrow-left" />
            </button>
          </div>
          <StudyDetailIntro detailData={data} />
          <Button size="large">신청하기</Button>
          <div className="recruit-detail-container">
            <div className="detail-block">
              <p className="recruit-subtitle">스터디 소개</p>
              <div dangerouslySetInnerHTML={{ __html: introHTML ?? '' }} />
            </div>
            <div className="detail-block">
              <p className="recruit-subtitle">스터디 규칙</p>
              <div dangerouslySetInnerHTML={{ __html: ruleHTML ?? '' }} />
            </div>
          </div>
          {/* <AddUserComment taskId={1} selectedDate="2023-11-11" /> */}
        </div>
      </div>
    </div>
  );
};

export default RecruitDetail;
