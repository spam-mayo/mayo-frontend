import Checkbox from '@/components/common/Checkbox';
import { ChangeEvent, useState } from 'react';

const stackOption = {
  front: [
    { label: 'JavaScript', value: 'javascript', id: 1 },
    { label: 'TypeScript', value: 'typescript', id: 2 },
    { label: 'React', value: 'react', id: 3 },
    { label: 'Vue', value: 'vuejs', id: 4 },
    { label: 'Svelte', value: 'svelte', id: 5 },
    { label: 'Nextjs', value: 'nextjs', id: 6 },
    { label: 'Jest', value: 'jest', id: 7 },
  ],
  back: [
    { label: 'Java', value: 'java', id: 8 },
    { label: 'Spring', value: 'spring', id: 9 },
    { label: 'Nodejs', value: 'nodejs', id: 10 },
    { label: 'Nestjs', value: 'nestjs', id: 11 },
    { label: 'Go', value: 'go', id: 12 },
    { label: 'Kotlin', value: 'kotlin', id: 13 },
    { label: 'Python', value: 'python', id: 14 },
    { label: 'MySQL', value: 'mysql', id: 15 },
    { label: 'Django', value: 'django', id: 16 },
    { label: 'Express', value: 'express', id: 17 },
    { label: 'PHP', value: 'php', id: 18 },
    { label: 'MongoDB', value: 'mongodb', id: 19 },
    { label: 'Firebase', value: 'firebase', id: 20 },
    { label: 'GraphQL', value: 'graphql', id: 21 },
  ],
  design: [
    { label: 'Figma', value: 'figma', id: 22 },
    { label: 'Zeplin', value: 'zeplin', id: 23 },
  ],
  other: [
    { label: 'Flutter', value: 'flutter', id: 24 },
    { label: 'Kubernetes', value: 'kubernetes', id: 25 },
    { label: 'Git', value: 'git', id: 26 },
    { label: 'Swift', value: 'swift', id: 27 },
    { label: 'AWS', value: 'aws', id: 28 },
    { label: 'Docker', value: 'docker', id: 29 },
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
