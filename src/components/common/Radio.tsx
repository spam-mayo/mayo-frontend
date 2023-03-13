type RadioProps = {
  children: React.ReactNode;
  value: string;
  name: string;
  defaultChecked?: boolean;
};

const Radio = ({ children, value, name, defaultChecked }: RadioProps) => {
  return (
    <label>
      <input type="radio" value={value} name={name} defaultChecked={defaultChecked} />
      {children}
    </label>
  );
};

export default Radio;
