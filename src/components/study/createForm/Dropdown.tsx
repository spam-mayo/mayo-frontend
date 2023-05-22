import type { SelectOption } from '@/components/auth/Select';
import { forwardRef, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  name: string;
  title: string;
  options: SelectOption[];
  className?: string;
  value?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, Props>(({ title, options, className, ...props }, ref) => {
  return (
    <div className="dropdown-wrapper">
      <label className="content-title">
        {title}
        <span className={className}></span>
      </label>
      <select className="select" ref={ref} {...props}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
});

Dropdown.displayName = 'Dropdwon';

export default Dropdown;
