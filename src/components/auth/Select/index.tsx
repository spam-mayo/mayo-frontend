import { forwardRef, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';

export interface SelectOption {
  label: string;
  value: string | number;
  id: number;
}

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, Props>(({ options, ...props }, ref) => {
  return (
    <select ref={ref} value={props.value} {...props} onChange={props.onChange}>
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
