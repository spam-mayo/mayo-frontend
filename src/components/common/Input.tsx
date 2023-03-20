import { type InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, label, error, ...rest }, ref) => (
  <div className="input-container">
    <label>
      {label}
      <span className={className}></span>
    </label>
    <input {...rest} ref={ref} />
    {error && <p className="err-msg">{error}</p>}
  </div>
));

Input.displayName = 'Input';

export default Input;
