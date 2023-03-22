import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { type FC, useState } from 'react';
import Select from '@/components/auth/Select';
import { categoryOption } from '@/constants/categoryOption';
import type { Stack } from '@/api/auth/types';

interface Props {
  field: string;
  stack?: Stack[];
}

const ExtraInfo: FC<Props> = ({ field, stack = [] }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="userInfo-container">
      <div className="userInfo-container-top">
        <p>추가 정보</p>
        <MultiButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      <div className="userInfo-container-content">
        {isEdit ? (
          <>
            <div className="row">
              <p className="key">활동 분야</p>
              <Select options={categoryOption} />
            </div>
            <div className="row">
              <p className="key">관심 분야</p>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <p className="key">활동 분야</p>
              <p className="value">{field}</p>
            </div>
            <div className="row">
              <p className="key">관심 분야</p>
              <div className="stack-box">
                {stack ? (
                  stack.map((el, idx) => {
                    return <p key={idx}>{el.stackName}</p>;
                  })
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExtraInfo;
