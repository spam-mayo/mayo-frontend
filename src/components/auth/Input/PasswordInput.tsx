import { type InputHTMLAttributes, forwardRef, useState, useCallback } from 'react';
import './index.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(({ label, error, ...rest }, ref) => {
  const [visible, setVisible] = useState(false);

  const onClickShowPw = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-box visible">
        <input {...rest} ref={ref} type={visible ? 'text' : 'password'} />
        <i className={visible ? 'icon-eye' : 'icon-eye-blocked'} onClick={onClickShowPw} />
        {error && <p className="err-msg">{error}</p>}
      </div>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
