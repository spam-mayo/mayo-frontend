import { categoryOption } from '@/constants/categoryOption';
import { forwardRef, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';
import './index.scss';

export interface SelectOption {
  label: string;
  value: string | number;
  id: number;
}

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, Props>(({ onChange, options, defaultValue, ...props }, ref) => {
  const labelName = categoryOption.find((option) => option.label === defaultValue);

  return (
    <select ref={ref} {...props} onChange={onChange}>
      <option selected disabled value={labelName?.value} key={labelName?.id}>
        {labelName?.label}
      </option>
      {options.map(({ label, value, id }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
