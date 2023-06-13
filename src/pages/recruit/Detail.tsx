import AddUserComment, { CommentFormValue } from '@/components/common/AddUserComment';
import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import CommentBox from '@/components/study/studySchedule/comment/CommentBox';
import useRecruitCommentDelete from '@/queries/recruit/useRecruitCommentDelete';
import useRecruitCommentPatch from '@/queries/recruit/useRecruitCommentPatch';
import useRecruitCommentPost from '@/queries/recruit/useRecruitCommentPost';
import useRecruitCommentQuery from '@/queries/recruit/useRecruitCommentQuery';
import useRecruitDetailQuery from '@/queries/recruit/useRecruitDetailQuery';
import useRecruitLikesPost from '@/queries/recruit/useRecruitLikesPost';
import useStudyDetailQuery from '@/queries/study/useStudyDetailQuery';
import useStudyGroupPost from '@/queries/study/useStudyGroupPost';
import useUserDetailQuery from '@/queries/user/useUserDetailQuery';
import { type FC, useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecruitDetail: FC = () => {
  const { studyId } = useParams();
  const { data: study } = useStudyDetailQuery(Number(studyId));
  const { data: recruit } = useRecruitDetailQuery(Number(studyId));
  const { data: user } = useUserDetailQuery();
  const { data: recruitComment } = useRecruitCommentQuery(Number(studyId));
  const [isClicked, setIsClicked] = useState(false);
  const deleteCom = useRecruitCommentDelete();
  const patchCom = useRecruitCommentPatch();
  const postCom = useRecruitCommentPost();
  const postStudy = useStudyGroupPost();
  const navigate = useNavigate();

  useEffect(() => {
    if (study?.checkLikes !== undefined && study.checkLikes !== null) setIsClicked(study.checkLikes);
  }, [study?.checkLikes]);

  const onSubmit = (data: CommentFormValue) => {
    if (!studyId) return;

    const body = {
      comment: data.comment,
      secret: false,
    };

    postCom({ studyId: Number(studyId), body });
  };

  const onSubmitPatchComment = ({ data, id }: { data: CommentFormValue; id: number }) => {
    const body = {
      comment: data.comment,
      secret: false,
    };

    patchCom({ offerCommentId: id, body });
  };

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onClickStudyJoin = () => {
    postStudy(Number(studyId));
  };

  const onToggleHeart = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  const postRecruitLike = useRecruitLikesPost(onToggleHeart);

  const onClickHeart = () => {
    postRecruitLike(Number(studyId));
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
          <StudyDetailIntro detailData={study} />
          <div className="join-button">
            <i className={`icon-heart ${isClicked ? 'clicked' : ''}`} onClick={onClickHeart} />
            <Button size="large" onClick={onClickStudyJoin}>
              신청하기
            </Button>
          </div>
          <div className="recruit-detail-content">
            <div className="recruit-detail-main">
              <div className="detail-block">
                <p className="recruit-subtitle">스터디 소개</p>
                <div dangerouslySetInnerHTML={{ __html: introHTML ?? '' }} />
              </div>
              <div className="detail-block">
                <p className="recruit-subtitle">스터디 규칙</p>
                <div dangerouslySetInnerHTML={{ __html: ruleHTML ?? '' }} />
              </div>
            </div>
            <AddUserComment onSubmitComment={onSubmit} profileUrl={user?.profileUrl} />
            <CommentBox
              getComments={recruitComment ?? []}
              deleteComment={deleteCom}
              onSubmitPatchComment={onSubmitPatchComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitDetail;
