import Checkbox from '@/components/common/Checkbox';
import { ChangeEvent, useState } from 'react';

const stackOption = {
  front: [
    { label: 'JavaScript', value: 'JavaScript', id: 1 },
    { label: 'TypeScript', value: 'TypeScript', id: 2 },
    { label: 'React', value: 'React', id: 3 },
    { label: 'Vue', value: 'Vue', id: 4 },
    { label: 'Svelte', value: 'Svelte', id: 5 },
    { label: 'Nextjs', value: 'Nextjs', id: 6 },
  ],
  back: [
    { label: 'Java', value: 'Java', id: 7 },
    { label: 'Spring', value: 'Spring', id: 8 },
    { label: 'Nodejs', value: 'Nodejs', id: 9 },
    { label: 'Nestjs', value: 'Nestjs', id: 10 },
    { label: 'Go', value: 'Go', id: 11 },
    { label: 'Kotlin', value: 'Kotlin', id: 12 },
    { label: 'Python', value: 'Python', id: 13 },
    { label: 'C#', value: 'C#', id: 14 },
    { label: 'C++', value: 'C++', id: 15 },
    { label: 'C', value: 'C', id: 16 },
    { label: 'MySQL', value: 'MySQL', id: 17 },
    { label: 'Django', value: 'Django', id: 18 },
  ],
  design: [
    { label: 'Figma', value: 'Figma', id: 19 },
    { label: 'Zeplin', value: 'Zeplin', id: 20 },
    { label: 'AdobeXD', value: 'AdobeXD', id: 21 },
    { label: 'Abstract', value: 'Abstract', id: 22 },
    { label: 'Protopie', value: 'Protopie', id: 23 },
  ],
  other: [
    { label: 'Android', value: 'Android', id: 24 },
    { label: 'iOS', value: 'iOS', id: 25 },
    { label: 'Git', value: 'Git', id: 26 },
    { label: 'Flutter', value: 'Flutter', id: 27 },
    { label: 'Swift', value: 'Swift', id: 28 },
  ],
};

const Stack = () => {
  // State with list of all checked item
  const [checked, setChecked] = useState<string[]>([]);

  // Add/Remove checked item from list
  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item;
      })
    : '';

  return (
    <div className="stack-container">
      <span className="content-title">기술스택</span>
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
  );
};

export default Stack;
