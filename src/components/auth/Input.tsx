import { type InputHTMLAttributes, forwardRef } from 'react';
import './Input.scss';

interface Prop extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, Prop>(({ label, error, ...rest }, ref) => (
  <div className="inputCountainer">
    <label>{label}</label>
    <input {...rest} ref={ref} />
    {error && <p>{error}</p>}
  </div>
));

Input.displayName = 'Input';
