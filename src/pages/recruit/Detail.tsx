import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import usePostRecruitLikesMutation from '@/queries/recruit/usePostRecruitLikesMutation';
import useRecruitDetailQuery from '@/queries/recruit/useRecruitDetailQuery';
import usePostStudyGroupMutation from '@/queries/study/usePostStudyGroupMutation';
import useStudyDetailQuery from '@/queries/study/useStudyDetailQuery';
import changeToHtml from '@/utils/changeToHtml';
import classNames from 'classnames';
import { type FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecruitDetail: FC = () => {
  const { studyId } = useParams();
  const { data: study } = useStudyDetailQuery(Number(studyId), {
    onSuccess: (data) => {
      if (data?.checkLikes !== undefined && data.checkLikes !== null) setIsClicked(data.checkLikes);
    },
  });
  const { data: recruit } = useRecruitDetailQuery(Number(studyId));
  const [isClicked, setIsClicked] = useState(false);
  const postStudy = usePostStudyGroupMutation();
  const { mutate: postRecruitLike } = usePostRecruitLikesMutation({
    onSuccess: () => {
      setIsClicked((prev) => !prev);
    },
  });
  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onClickStudyJoin = () => {
    postStudy.mutate(Number(studyId));
  };

  const onClickHeart = () => {
    postRecruitLike(Number(studyId));
  };

  const introHTML = changeToHtml(recruit?.offerIntro);
  const ruleHTML = changeToHtml(recruit?.offerRule);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area">
            <button onClick={onClickGoBack}>
              <i className="icon-arrow-left" />
            </button>
          </div>
          <StudyDetailIntro detailData={study} />
          <div className="join-button">
            <i className={classNames('icon-heart', { clicked: isClicked })} onClick={onClickHeart} />
            <Button size="large" onClick={onClickStudyJoin}>
              신청하기
            </Button>
          </div>
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
