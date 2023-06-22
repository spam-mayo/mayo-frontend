import type { RecruitFormValue } from '@/api/recruit/recruitTypes';
import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import { recruitSchema } from '@/constants/schema/recruitSchema';
import usePatchRecruitMutation from '@/queries/recruit/usePatchRecruitMutation';
import useRecruitDetailQuery from '@/queries/recruit/useRecruitDetailQuery';
import useStudyDetailQuery from '@/queries/study/useStudyDetailQuery';
import changeToPlainText from '@/utils/changeToPlainText';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FC } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const RecruitEdit: FC = () => {
  const { studyId } = useParams();
  const navigate = useNavigate();
  const { data: study } = useStudyDetailQuery(Number(studyId));
  const { data: recruit } = useRecruitDetailQuery(Number(studyId));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecruitFormValue>({ resolver: yupResolver(recruitSchema) });
  const patchRecruit = usePatchRecruitMutation();

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onSumbit: SubmitHandler<RecruitFormValue> = (data) => {
    patchRecruit.mutate({ offerId: Number(recruit?.offerId), ...data });
  };

  const introHTML = changeToPlainText(recruit?.offerIntro);
  const ruleHTML = changeToPlainText(recruit?.offerRule);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area">
            <button onClick={onClickGoBack}>
              <i className="icon-arrow-left" />
            </button>
            <p>구인 글 수정하기</p>
            <div />
          </div>
          <StudyDetailIntro detailData={study} />

          <form className="add-recruit-box" onSubmit={handleSubmit(onSumbit)} id="recruit">
            <div className="recruit-intro">
              <p>스터디 소개</p>
              <textarea
                placeholder="내용을 작성해주세요."
                required
                form="recruit"
                {...register('offerIntro')}
                defaultValue={introHTML}
              />
              {errors.offerIntro && <p className="err-msg">{errors.offerIntro.message}</p>}
            </div>

            <div className="recruit-rule">
              <p>스터디 규칙</p>
              <textarea
                placeholder="내용을 작성해주세요."
                required
                form="recruit"
                {...register('offerRule')}
                defaultValue={ruleHTML}
              />
              {errors.offerRule && <p className="err-msg">{errors.offerRule.message}</p>}
            </div>
            <div className="button-area">
              <Button size="large" color="gray" outline>
                취소
              </Button>
              <Button size="large" type="submit">
                저장
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruitEdit;
