import { type InputHTMLAttributes, forwardRef } from 'react';
import './index.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, error, ...rest }, ref) => (
  <div className="input-container">
    <label>{label}</label>
    <div className="input-box">
      <input {...rest} ref={ref} />
      {error && <p className="err-msg">{error}</p>}
    </div>
  </div>
));

Input.displayName = 'Input';

export default Input;
