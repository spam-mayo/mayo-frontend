import { forwardRef, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';
import './index.scss';

export interface SelectOption {
  label: string;
  value: string;
}

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, Props>(({ onChange, value, options, ...props }, ref) => {
  return (
    <select ref={ref} value={value ?? ''} {...props} onChange={onChange}>
      <option value="" disabled>
        선택안함
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
