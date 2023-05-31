import AdditionalInfo from '@/components/study/createForm/AdditionalInfo';
import MainInfo from '@/components/study/createForm/MainInfo';
import { ChangeEvent, type FC, useState } from 'react';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface PostStudyFormValue {
  studyName: string;
  title: string;
  startDate: string;
  endDate: string;
  personnel: string;
  place: string;
  latitude?: number;
  longitude?: number;
  activity?: string[];
  period?: string;
  online?: boolean;
  studyStacks?: string[];
}

const StudyCreate: FC = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const navigate = useNavigate();
  const methods = useForm<PostStudyFormValue>();

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onChangeCheckList = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChecked((prev) => (prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]));
  };

  const onSubmit: SubmitHandler<PostStudyFormValue> = (data) => {
    const body = {
      ...data,
      stacks: checked,
    };
    alert(body);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <FormProvider {...methods}>
            <form className="section-form" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="title-area">
                <button onClick={onClickGoBack}>
                  <i className="icon-arrow-left" />
                </button>
                <p>스터디 생성하기</p>
                <div />
              </div>
              <MainInfo />
              <AdditionalInfo onChangeCheckList={onChangeCheckList} checkedStackList={checked} />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default StudyCreate;
