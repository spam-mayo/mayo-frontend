import AddUserComment, { CommentFormValue } from '@/components/common/AddUserComment';
import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import CommentBox from '@/components/study/studySchedule/comment/CommentBox';
import useDeleteRecruitCommentMutation from '@/queries/recruit/useDeleteRecruitCommentMutation';
import usePatchRecruitCommentMutation from '@/queries/recruit/usePatchRecruitCommentMutation';
import usePostRecruitCommentMutation from '@/queries/recruit/usePostRecruitCommentMutation';
import useRecruitCommentQuery from '@/queries/recruit/useRecruitCommentQuery';
import useRecruitDetailQuery from '@/queries/recruit/useRecruitDetailQuery';
import usePostRecruitLikesMutation from '@/queries/recruit/usePostRecruitLikesMutation';
import useStudyDetailQuery from '@/queries/study/useStudyDetailQuery';
import usePostStudyGroupMutation from '@/queries/study/usePostStudyGroupMutation';
import useUserDetailQuery from '@/queries/user/useUserDetailQuery';
import { type FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';

const RecruitDetail: FC = () => {
  const { studyId } = useParams();
  const { data: study } = useStudyDetailQuery(Number(studyId));
  const { data: recruit } = useRecruitDetailQuery(Number(studyId));
  const { data: user } = useUserDetailQuery();
  const { data: recruitComment } = useRecruitCommentQuery(Number(studyId));
  const [isClicked, setIsClicked] = useState(false);
  const deleteCom = useDeleteRecruitCommentMutation();
  const patchCom = usePatchRecruitCommentMutation();
  const postCom = usePostRecruitCommentMutation();
  const postStudy = usePostStudyGroupMutation();
  const { mutate: postRecruitLike } = usePostRecruitLikesMutation({
    onSuccess: () => {
      setIsClicked((prev) => !prev);
    },
  });
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

    postCom.mutate({ studyId: Number(studyId), body });
  };

  const onSubmitPatchComment = ({ data, id }: { data: CommentFormValue; id: number }) => {
    const body = {
      comment: data.comment,
      secret: false,
    };

    patchCom.mutate({ offerCommentId: id, body });
  };

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onClickStudyJoin = () => {
    postStudy.mutate(Number(studyId));
  };

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
            <i className={classNames('icon-heart', { clicked: isClicked })} onClick={onClickHeart} />
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
