import StudyCreateForm from '@/components/study/createForm/StudyCreateForm';
import type { FC } from 'react';

const StudyCreate: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <StudyCreateForm />
        </div>
      </div>
    </div>
  );
};

export default StudyCreate;
