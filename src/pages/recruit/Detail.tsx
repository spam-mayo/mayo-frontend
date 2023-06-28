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
import { type FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import KakaoMap from '@/components/common/KakaoMap';

const RecruitDetail: FC = () => {
  const { studyId } = useParams();
  const { data: study } = useStudyDetailQuery(Number(studyId), {
    onSuccess: (data) => {
      if (data?.checkLikes !== undefined && data.checkLikes !== null) setIsClicked(data.checkLikes);
    },
  });

  const { data: recruit } = useRecruitDetailQuery(Number(studyId));
  const { data: recruitComment } = useRecruitCommentQuery(Number(studyId));
  const [isClicked, setIsClicked] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const onDeleteComment = useDeleteRecruitCommentMutation();
  const onPatchComment = usePatchRecruitCommentMutation();
  const onPostComment = usePostRecruitCommentMutation();
  const onPostStudy = usePostStudyGroupMutation();
  const { mutate: postRecruitLike } = usePostRecruitLikesMutation({
    onSuccess: () => {
      setIsClicked((prev) => !prev);
    },
  });
  const navigate = useNavigate();

  const onSubmitPostComment = (data: CommentFormValue) => {
    if (!studyId) return;

    const body = {
      comment: data.comment,
      secret: false,
    };

    onPostComment.mutate({ studyId: Number(studyId), body });
  };

  const onSubmitPatchComment = ({ data, id }: { data: CommentFormValue; id: number }) => {
    const body = {
      comment: data.comment,
      secret: false,
    };

    onPatchComment.mutate({ offerCommentId: id, body });
  };

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onClickStudyJoin = () => {
    onPostStudy.mutate(Number(studyId));
  };

  const onClickHeart = () => {
    postRecruitLike(Number(studyId));
  };

  const onClickMapModal = () => {
    setIsMapModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area">
              <button onClick={onClickGoBack}>
                <i className="icon-arrow-left" />
              </button>
            </div>
            <StudyDetailIntro detailData={study} onClick={onClickMapModal} />
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
                  <div>{recruit?.offerIntro}</div>
                </div>
                <div className="detail-block">
                  <p className="recruit-subtitle">스터디 규칙</p>
                  <div>{recruit?.offerRule}</div>
                </div>
              </div>
              <AddUserComment onSubmitPostComment={onSubmitPostComment} />
              <CommentBox
                comments={recruitComment ?? []}
                onDeleteComment={onDeleteComment}
                onSubmitPatchComment={onSubmitPatchComment}
              />
            </div>
          </div>
        </div>
      </div>
      {isMapModalOpen && <KakaoMap latitude={study?.latitude} longitude={study?.longitude} onClose={onClickMapModal} />}
    </>
  );
};

export default RecruitDetail;
