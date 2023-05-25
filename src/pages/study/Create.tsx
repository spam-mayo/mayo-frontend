import { postStudy } from '@/api/study/studyAPI';
import type { PostStudyReq } from '@/api/study/studyTypes';
import { placeState, studyPeriodState } from '@/atom/atom';
import AdditionalInfo from '@/components/study/createForm/AdditionalInfo';
import MainInfo from '@/components/study/createForm/MainInfo';
import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, type FC, useState } from 'react';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const StudyCreate: FC = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const [activity, setActivity] = useState<string[]>([]);
  const methods = useForm<PostStudyReq>();
  const placeInfo = useRecoilValue(placeState);
  const periodInfo = useRecoilValue(studyPeriodState);
  const navigate = useNavigate();

  const { mutate: postNewStudy } = useMutation(postStudy, {
    onSuccess: () => {
      alert('스터디가 생성되었습니다');
    },
  });

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onChangeCheckList = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChecked((prev) => (prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]));
  };

  const onChangeActivity = (e: ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setActivity(selectedValues);
  };

  const onSubmit: SubmitHandler<PostStudyReq> = (data) => {
    const body = {
      ...data,
      ...placeInfo,
      ...periodInfo,
      activity,
      studyStacks: checked,
    };
    postNewStudy(body);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <FormProvider {...methods}>
            <form className="section-form" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="title-area">
                <button onClick={onClickGoBack}>
                  <i className="icon-arrow-left"></i>
                </button>
                <p>스터디 생성하기</p>
                <div />
              </div>
              <MainInfo />
              <AdditionalInfo
                onChangeCheckList={onChangeCheckList}
                checkedStackList={checked}
                onChangeActivity={onChangeActivity}
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default StudyCreate;
