import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label: string;
}

const Checkbox: FC<Props> = ({ onChange, label, ...props }) => {
  return (
    <li>
      <input
        type="checkbox"
        id={props.value?.toString()}
        value={props.value}
        onChange={onChange}
        checked={props.checked}
      />
      <label htmlFor={props.value?.toString()}>{label}</label>
    </li>
  );
};

export default Checkbox;
