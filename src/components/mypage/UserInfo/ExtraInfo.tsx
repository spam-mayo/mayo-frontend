import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { type FC, useState, ChangeEvent, FormEvent } from 'react';
import Select from '@/components/auth/Select';
import { categoryOption } from '@/constants/categoryOption';
import { stackOption } from '@/constants/stackOption';
import type { Stack } from '@/api/auth/types';
import Checkbox from '@/components/common/Checkbox';
import { useMutation } from '@tanstack/react-query';
import { patchUserInfo } from '@/api/auth/authAPI';
import axios from 'axios';

interface Props {
  field: string;
  stack?: Stack[];
  userId: string;
}

const ExtraInfo: FC<Props> = ({ field, stack = [], userId }) => {
  const userStack = stack.map((el) => el.stackName);
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState<string[]>([...userStack]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const { mutate: patchToUserInfo } = useMutation(patchUserInfo, {
    onSuccess: () => {
      alert('추가 정보가 저장되었습니다!');
      setIsEdit(false);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          alert('일치하는 정보가 없습니다.');
        }
      }
    },
  });

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item;
      })
    : '';

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
    setChecked([]);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const field = selectedCategory;
    const userStacks = checked;

    patchToUserInfo({ userId, field, userStacks });
  };

  return (
    <form className="userInfo-container" onSubmit={onSubmit}>
      <div className="userInfo-container-top">
        <p>추가 정보</p>
        <MultiButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      <div className="userInfo-container-content">
        {isEdit ? (
          <>
            <div className="row">
              <p className="label">활동 분야</p>
              <Select
                defaultValue={field}
                options={categoryOption}
                value={selectedCategory}
                onChange={onChangeSelect}
              />
            </div>
            <div className="row">
              <p className="label">관심 분야</p>

              <div className="stack-container">
                <div className="checked-stacks">
                  {checkedItems.length === 0 ? '아래 목록 중 스택을 선택하세요' : `${checkedItems}`}
                </div>

                <ul className="checkbox-container">
                  <span className="stack-title">프론트엔드</span>
                  <div>
                    {stackOption.front.map((item) => (
                      <Checkbox value={item.value} key={item.id} onChange={handleCheck}>
                        {item.label}
                      </Checkbox>
                    ))}
                  </div>
                </ul>

                <ul className="checkbox-container">
                  <span className="stack-title">백엔드</span>
                  <div>
                    {stackOption.back.map((item) => (
                      <Checkbox value={item.value} key={item.id} onChange={handleCheck}>
                        {item.label}
                      </Checkbox>
                    ))}
                  </div>
                </ul>

                <ul className="checkbox-container">
                  <span className="stack-title">디자인</span>
                  <div>
                    {stackOption.design.map((item) => (
                      <Checkbox value={item.value} key={item.id} onChange={handleCheck}>
                        <span>{item.label}</span>
                      </Checkbox>
                    ))}
                  </div>
                </ul>

                <ul className="checkbox-container">
                  <span className="stack-title">기타</span>
                  <div>
                    {stackOption.other.map((item) => (
                      <Checkbox value={item.value} key={item.id} onChange={handleCheck}>
                        {item.label}
                      </Checkbox>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <p className="label">활동 분야</p>
              <p className="value">{field}</p>
            </div>
            <div className="row">
              <p className="label">관심 분야</p>
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
    </form>
  );
};

export default ExtraInfo;
