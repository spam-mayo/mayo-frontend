import { forwardRef, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';
import './index.scss';

export interface SelectOption {
  label: string;
  value: string;
}

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, Props>(({ options, ...props }, ref) => {
  return (
    <select ref={ref} value={props.value} {...props} onChange={props.onChange}>
      <option value="">선택안함</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
