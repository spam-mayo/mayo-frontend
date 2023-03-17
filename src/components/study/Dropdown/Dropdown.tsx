import Select, { SelectOption } from '@/components/auth/Select';

interface DropdownProps {
  title: string;
  options: SelectOption[];
}

const Dropdown = ({ title, options }: DropdownProps) => {
  return (
    <div className="dropdown-wrapper">
      <span className="content-title">{title}</span>
      <Select options={options} />
    </div>
  );
};

export default Dropdown;
