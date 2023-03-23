import type { ChangeEvent } from 'react';

type CheckboxProps = {
  children: React.ReactNode;
  value: string;
  key: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = (props: CheckboxProps) => {
  return (
    <li>
      <input type="checkbox" id={props.value} value={props.value} onChange={props.onChange} />
      <label htmlFor={props.value}>{props.children}</label>
    </li>
  );
};

export default Checkbox;
