import { postRecruit } from '@/api/recruit/recruitAPI';
import useStudyDetailQuery from '@/queries/study/useStudyDetailQuery';
import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import { recruitSchema } from '@/constants/schema/recruitSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import type { FC } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import type { RecruitFormValue } from '@/api/recruit/recruitTypes';

const RecruitCreate: FC = () => {
  const { studyId } = useParams();
  const navigate = useNavigate();
  const { data } = useStudyDetailQuery(Number(studyId));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecruitFormValue>({ resolver: yupResolver(recruitSchema) });

  const { mutate: postNewRecruit } = useMutation(postRecruit, {
    onSuccess: () => {
      alert('구인글이 작성되었습니다!');
      navigate(`/recruit/detail/${studyId}`);
    },
  });

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onSumbit: SubmitHandler<RecruitFormValue> = (data) => {
    postNewRecruit({ studyId: Number(studyId), ...data });
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
              {errors.offerIntro && <p className="err-msg">{errors.offerIntro.message}</p>}
            </div>

            <div className="recruit-rule">
              <p>스터디 규칙</p>
              <textarea placeholder="내용을 작성해주세요." required form="recruit" {...register('offerRule')} />
              {errors.offerRule && <p className="err-msg">{errors.offerRule.message?.toString()}</p>}
            </div>
            <div className="button-area">
              <Button size="large" color="gray" outline onClick={onClickGoBack} type="button">
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
