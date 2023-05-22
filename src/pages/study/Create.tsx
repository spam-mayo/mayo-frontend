import StudyCreateForm from '@/components/study/createForm/StudyCreateForm';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const StudyCreate: FC = () => {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <div>
        <button onClick={onClickGoBack}>
          <i className="icon-arrow-left"></i>
        </button>
        <h1>스터디 생성하기</h1>
      </div>
      <div>
        <StudyCreateForm />
      </div>
    </div>
  );
};

export default StudyCreate;
