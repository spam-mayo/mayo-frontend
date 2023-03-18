import Select, { SelectOption } from '@/components/auth/Select';

interface DropdownProps {
  title: string;
  options: SelectOption[];
  className?: string;
}

const Dropdown = ({ title, options, className }: DropdownProps) => {
  return (
    <div className="dropdown-wrapper">
      <label className="content-title">
        {title}
        <span className={className}></span>
      </label>
      <Select options={options} />
    </div>
  );
};

export default Dropdown;
