import AdditionalInfo from '@/components/study/createForm/AdditionalInfo';
import MainInfo from '@/components/study/createForm/MainInfo';
import { ChangeEvent, FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const StudyCreate: FC = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = useForm();

  const onClickGoBack = () => {
    navigate(-1);
  };

  const onChangeCheckList = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <form className="section-form">
            <div className="title-area">
              <button onClick={onClickGoBack}>
                <i className="icon-arrow-left"></i>
              </button>
              <p>스터디 생성하기</p>
              <div />
            </div>
            <MainInfo register={register} />
            <AdditionalInfo
              onChangeCheckList={onChangeCheckList}
              checkedStackList={checked}
              register={register}
              errors={errors}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudyCreate;
