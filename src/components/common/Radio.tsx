type RadioProps = {
  children: React.ReactNode;
  value: string;
  name: string;
  defaultChecked?: boolean;
};

const Radio = ({ children, value, name, defaultChecked }: RadioProps) => {
  return (
    <div className="radio">
      <label>
        <input type="radio" value={value} name={name} defaultChecked={defaultChecked} />
        {children}
      </label>
    </div>
  );
};

export default Radio;
