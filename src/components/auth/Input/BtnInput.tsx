import { type InputHTMLAttributes, forwardRef } from 'react';
import './index.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const BtnInput = forwardRef<HTMLInputElement, Props>(({ label, error, ...rest }, ref) => (
  <div className="inputCountainer">
    <label>{label}</label>
    <input {...rest} ref={ref} className="btnPad" />
    {error && <p className="errMsg">{error}</p>}
  </div>
));

BtnInput.displayName = 'BtnInput';

export default BtnInput;
