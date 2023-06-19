import { postRecruit } from '@/api/recruit/recruitAPI';
import type { PostRecruitReq } from '@/api/recruit/recruitTypes';
import { getStudyDetail } from '@/api/study/studyAPI';
import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const RecruitCreate: FC = () => {
  const { studyId } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<PostRecruitReq>();

  const { data } = useQuery({
    queryFn: () => getStudyDetail(Number(studyId)),
    queryKey: ['studyDetail', studyId],
    select: ({ data }) => data,
  });

  const { mutate: postNewRecruit } = useMutation(postRecruit, {
    onSuccess: () => {
      alert('구인글이 작성되었습니다!');
      navigate(`/recruit/detail/${studyId}`);
    },
  });

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onSumbit: SubmitHandler<PostRecruitReq> = (data) => {
    postNewRecruit({ studyId: Number(studyId), offerIntro: data.offerIntro, offerRule: data.offerRule });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area">
            <button onClick={onClickGoBack}>
              <i className="icon-arrow-left" />
            </button>
            <p>구인 글 생성하기</p>
            <div />
          </div>
          <StudyDetailIntro detailData={data} />

          <form className="add-recruit-box" onSubmit={handleSubmit(onSumbit)} id="recruit">
            <div className="recruit-intro">
              <p>스터디 소개</p>
              <textarea placeholder="내용을 작성해주세요." required form="recruit" {...register('offerIntro')} />
            </div>

            <div className="recruit-rule">
              <p>스터디 규칙</p>
              <textarea placeholder="내용을 작성해주세요." required form="recruit" {...register('offerRule')} />
            </div>
            <div className="button-area">
              <Button size="large" color="gray" outline>
                취소
              </Button>
              <Button size="large" type="submit">
                생성하기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruitCreate;
