type RadioProps = {
  children: React.ReactNode;
  value: string;
  name: string;
};

const Radio = ({ children, value, name }: RadioProps) => {
  return (
    <div className="radio">
      <input type="radio" value={value} name={name} />
      <span className="radio-input">{children}</span>
    </div>
  );
};

export default Radio;
