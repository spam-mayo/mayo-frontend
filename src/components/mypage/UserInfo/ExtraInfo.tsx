import EditButton from '@/components/mypage/UserInfo/EditButton';
import { type FC, useState } from 'react';
import Select, { type SelectOption } from '@/components/auth/Select';

type Stack = {
  stackId: number;
  stackName: string;
};

interface Props {
  field: string;
  stack?: Stack[];
}

const categoryOption: SelectOption[] = [
  { label: '선택 안 함', value: 'NO_FIELD', id: 1 },
  { label: '프론트엔드', value: 'FRONTEND', id: 2 },
  { label: '백엔드', value: 'BACKEND', id: 3 },
  { label: '디자인', value: 'DESIGN', id: 4 },
  { label: '기획', value: 'PLAN', id: 5 },
  { label: '기타', value: 'OTHER', id: 6 },
];

const ExtraInfo: FC<Props> = ({ field, stack }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="extra-container">
      <div className="extra-container-top">
        <p>추가 정보</p>
        <EditButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      <div className="extra-container-content">
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
                {stack?.map((el, idx) => {
                  return <p key={idx}>{el.stackName}</p>;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExtraInfo;
