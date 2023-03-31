import Date from '@/components/mypage/sutdy/Date';
import type { FC } from 'react';
// import classNames from 'classnames';
import Title from '@/components/mypage/sutdy/Title';

const StudyBlock: FC = () => {
  return (
    <div className="studyBlock-container">
      <Title
        title="이거슨 타이틀이여"
        stacks={[
          { stackId: 1, stackName: 'jacascript' },
          {
            stackId: 2,
            stackName: 'typescript',
          },
          {
            stackId: 3,
            stackName: 'react',
          },
        ]}
      />
      <Date startData="2022.12.22" endData="2023.12.22" />
    </div>
  );
};

export default StudyBlock;
