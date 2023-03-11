import RecruitForm from '@/components/recruit/RecruitForm';
import type { FC } from 'react';

const RecruitCreate: FC = () => {
  return (
    <div className="container">
      구인 글 create
      <RecruitForm />
    </div>
  );
};

export default RecruitCreate;
