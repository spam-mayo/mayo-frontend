import { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, error, type, ...rest }, ref) => {
  const [visible, setVisible] = useState(false);

  const onToggleVisble = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return (
    <div className="input-container">
      <label>{label}</label>
      {type === 'password' ? (
        <div className="input-box visible">
          <input {...rest} ref={ref} type={visible ? 'text' : type} />
          <i className={visible ? 'icon-eye' : 'icon-eye-blocked'} onClick={onToggleVisble} />
          {error && <p className="err-msg">{error}</p>}
        </div>
      ) : (
        <>
          <input {...rest} ref={ref} />
          {error && <p className="err-msg">{error}</p>}
        </>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
