import { forwardRef, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';

interface Option {
  label: string;
  value: string | number;
  id: number;
}

interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: Option[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ options, ...props }, ref) => (
  <select ref={ref} {...props}>
    {options.map(({ label, value, id }) => (
      <option key={id} value={value}>
        {label}
      </option>
    ))}
  </select>
));

Select.displayName = 'Select';
