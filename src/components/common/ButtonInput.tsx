import { type InputHTMLAttributes, forwardRef } from 'react';
import './index.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const ButtonInput = forwardRef<HTMLInputElement, Props>(({ label, error, ...rest }, ref) => (
  <div className="input-container">
    <label>{label}</label>
    <input {...rest} ref={ref} className="btn-padding" />
    {error && <p className="err-msg">{error}</p>}
  </div>
));

ButtonInput.displayName = 'ButtonInput';

export default ButtonInput;
