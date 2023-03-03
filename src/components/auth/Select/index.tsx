import { forwardRef, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';

export interface SelectOption {
  label: string;
  value: string | number;
  id: number;
}

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, Props>(({ options, ...props }, ref) => (
  <select ref={ref} {...props}>
    {options.map(({ label, value, id }) => (
      <option key={id} value={value}>
        {label}
      </option>
    ))}
  </select>
));

Select.displayName = 'Select';
