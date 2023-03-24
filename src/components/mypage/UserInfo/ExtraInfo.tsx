import MultiButton from '@/components/mypage/UserInfo/MultiButton';
import { type FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Select from '@/components/auth/Select';
import { fieldOption } from '@/constants/fieldOption';
import type { Stack } from '@/api/auth/types';
import { useMutation } from '@tanstack/react-query';
import { patchUserInfo } from '@/api/auth/authAPI';
import axios from 'axios';
import StackForm from '@/components/study/Stack';

interface Props {
  field: string;
  stack?: Stack[];
  userId: string;
}

const tmp = (categoryLabel: string) => {
  const res = fieldOption.find(({ label }) => label === categoryLabel);
  return res;
};

const ExtraInfo: FC<Props> = ({ field, stack = [], userId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);
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
        if (err.response?.status === 400) {
          alert('변경할 항목을 선택해주세요.');
        }
      }
    },
  });

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
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

  useEffect(() => {
    setSelectedCategory(tmp(field)?.value ?? '');
  }, [field]);

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
              <Select options={fieldOption} value={selectedCategory} onChange={onChangeSelect} />
            </div>
            <div className="row">
              <p className="label">관심 분야</p>
              <StackForm onChange={onChangeCheckList} checked={checked} />
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
