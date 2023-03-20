import { type InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  value?: string;
}

const EditInput = forwardRef<HTMLInputElement, Props>(({ label, error, value, ...rest }, ref) => (
  <div className="edit-input-container">
    <label>{label}</label>
    <input {...rest} ref={ref} value={value} />
    {error && <p>{error}</p>}
  </div>
));

EditInput.displayName = 'EditInput';

export default EditInput;
